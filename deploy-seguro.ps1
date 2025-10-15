# ============================================
# SCRIPT DE DEPLOY INTELIGENTE
# Colégio Tradição de Magia Divina
# ============================================

param(
    [string]$Version = "v2.2"
)

Write-Host "================================" -ForegroundColor Cyan
Write-Host "  DEPLOY SEGURO - $Version" -ForegroundColor Cyan
Write-Host "================================`n" -ForegroundColor Cyan

# Funções auxiliares
function Write-Success { param($msg) Write-Host "✓ $msg" -ForegroundColor Green }
function Write-Error { param($msg) Write-Host "✗ $msg" -ForegroundColor Red }
function Write-Info { param($msg) Write-Host "ℹ $msg" -ForegroundColor Yellow }
function Write-Step { param($msg) Write-Host "`n→ $msg" -ForegroundColor Cyan }

# Verificar se Git está instalado
Write-Step "Verificando Git..."
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "Git não encontrado! Instale o Git primeiro."
    exit 1
}
Write-Success "Git encontrado"

# Verificar se estamos em um repositório Git
if (-not (Test-Path ".git")) {
    Write-Error "Este diretório não é um repositório Git!"
    Write-Info "Execute primeiro: git init"
    exit 1
}

# Criar/atualizar .gitignore
Write-Step "Configurando .gitignore..."
$gitignoreContent = @"
# Dependencies
node_modules/
.pnp
.pnp.js

# Next.js
.next/
out/
build/
dist/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Temporary
*.tmp
.cache/

# Build
*.tsbuildinfo
next-env.d.ts
"@

Set-Content -Path ".gitignore" -Value $gitignoreContent -Encoding UTF8
Write-Success ".gitignore criado/atualizado"

# Remover node_modules do cache do Git se existir
Write-Step "Limpando cache do Git..."
if (Test-Path "node_modules") {
    git rm -r --cached node_modules -f 2>$null
    Write-Success "node_modules removido do cache"
}
if (Test-Path ".next") {
    git rm -r --cached .next -f 2>$null
    Write-Success ".next removido do cache"
}

# Verificar tamanho dos arquivos
Write-Step "Analisando tamanho dos arquivos..."

$largeFiles = git ls-files | Where-Object {
    $file = $_
    if (Test-Path $file) {
        $size = (Get-Item $file).Length
        if ($size -gt 50MB) {
            Write-Warning "Arquivo grande detectado: $file ($([math]::Round($size/1MB, 2)) MB)"
            return $true
        }
    }
    return $false
}

if ($largeFiles) {
    Write-Error "Arquivos muito grandes detectados! Adicione-os ao .gitignore"
    exit 1
}
Write-Success "Nenhum arquivo muito grande detectado"

# Verificar status
Write-Step "Verificando status do repositório..."
$status = git status --short
if ($status) {
    Write-Host $status
} else {
    Write-Info "Nenhuma alteração detectada"
}

# Adicionar arquivos
Write-Step "Adicionando arquivos..."
git add .
Write-Success "Arquivos adicionados"

# Commit
Write-Step "Criando commit..."
$commitMessage = "Deploy $Version - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git commit -m $commitMessage
if ($LASTEXITCODE -eq 0) {
    Write-Success "Commit criado: $commitMessage"
} else {
    Write-Info "Nenhuma alteração para commitar"
}

# Verificar tamanho total do repositório
Write-Step "Verificando tamanho total..."
$repoSize = (git count-objects -vH | Select-String "size-pack").ToString().Split(":")[1].Trim()
Write-Info "Tamanho do repositório: $repoSize"

# Verificar branch remoto
Write-Step "Verificando configuração remota..."
$remote = git remote -v
if (-not $remote) {
    Write-Error "Nenhum remote configurado!"
    Write-Info "Configure com: git remote add origin <URL>"
    exit 1
}
Write-Success "Remote configurado"
Write-Host $remote

# Perguntar confirmação para push
Write-Host "`n" -NoNewline
Write-Host "PRONTO PARA FAZER PUSH!" -ForegroundColor Yellow
Write-Host "Deseja continuar? (S/N): " -NoNewline -ForegroundColor Yellow
$confirm = Read-Host

if ($confirm -eq "S" -or $confirm -eq "s") {
    Write-Step "Fazendo push para o repositório..."
    
    # Tentar push normal primeiro
    git push origin main 2>&1 | Tee-Object -Variable pushOutput
    
    if ($LASTEXITCODE -eq 0) {
        Write-Success "Push realizado com sucesso!"
    } else {
        # Se falhar, verificar se é problema de tamanho
        if ($pushOutput -match "file.*too large" -or $pushOutput -match "exceeds") {
            Write-Error "Arquivo muito grande detectado no push!"
            Write-Info "O Git detectou arquivos grandes que não estavam na análise local."
            Write-Info "Verifique o .gitignore e tente novamente."
            
            # Mostrar arquivos grandes no commit atual
            Write-Host "`nArquivos no último commit:"
            git diff-tree --no-commit-id --name-only -r HEAD
            
        } else {
            Write-Error "Erro ao fazer push. Detalhes acima."
        }
        exit 1
    }
} else {
    Write-Info "Push cancelado pelo usuário"
    exit 0
}

# Resumo final
Write-Host "`n================================" -ForegroundColor Green
Write-Host "  DEPLOY CONCLUÍDO COM SUCESSO!" -ForegroundColor Green
Write-Host "================================`n" -ForegroundColor Green

Write-Host "Versão: $Version" -ForegroundColor Cyan
Write-Host "Commit: $commitMessage" -ForegroundColor Cyan
Write-Host "`nPróximos passos no servidor:" -ForegroundColor Yellow
Write-Host "1. git pull origin main" -ForegroundColor White
Write-Host "2. npm install" -ForegroundColor White
Write-Host "3. npm run build" -ForegroundColor White
Write-Host "4. npm start" -ForegroundColor White

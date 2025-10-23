# ========================================
# SCRIPT DE REORGANIZAÇÃO COMPLETA
# Colégio Tradição de Magia Divina
# ========================================

$ErrorActionPreference = "Stop"

Write-Host "🔧 INICIANDO REORGANIZAÇÃO DO PROJETO..." -ForegroundColor Cyan
Write-Host ""

# 1. Navegar para pasta do projeto
Write-Host "📂 Navegando para pasta do projeto..." -ForegroundColor Yellow
cd "C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina"

# 2. Criar backup antes de qualquer mudança
Write-Host "💾 Criando backup..." -ForegroundColor Yellow
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupPath = "C:\Users\thais\Documents\backup-projeto-$timestamp"
Copy-Item -Path "." -Destination $backupPath -Recurse -Force
Write-Host "✅ Backup criado em: $backupPath" -ForegroundColor Green
Write-Host ""

# 3. Mover src/app para raiz (app/)
Write-Host "📁 Movendo src/app/ para raiz como app/..." -ForegroundColor Yellow
if (Test-Path "src\app") {
    if (Test-Path "app") {
        Remove-Item "app" -Recurse -Force
    }
    Move-Item -Path "src\app" -Destination "app" -Force
    Write-Host "✅ Pasta app/ movida para raiz" -ForegroundColor Green
} else {
    Write-Host "⚠️  src/app não encontrada" -ForegroundColor Red
}

# 4. Mover src/components para raiz
Write-Host "📁 Movendo src/components/ para raiz..." -ForegroundColor Yellow
if (Test-Path "src\components") {
    if (Test-Path "components") {
        Remove-Item "components" -Recurse -Force
    }
    Move-Item -Path "src\components" -Destination "components" -Force
    Write-Host "✅ Pasta components/ movida para raiz" -ForegroundColor Green
}

# 5. Mover src/lib para raiz
Write-Host "📁 Movendo src/lib/ para raiz..." -ForegroundColor Yellow
if (Test-Path "src\lib") {
    if (Test-Path "lib") {
        Remove-Item "lib" -Recurse -Force
    }
    Move-Item -Path "src\lib" -Destination "lib" -Force
    Write-Host "✅ Pasta lib/ movida para raiz" -ForegroundColor Green
}

# 6. Mover src/types para raiz
Write-Host "📁 Movendo src/types/ para raiz..." -ForegroundColor Yellow
if (Test-Path "src\types") {
    if (Test-Path "types") {
        Remove-Item "types" -Recurse -Force
    }
    Move-Item -Path "src\types" -Destination "types" -Force
    Write-Host "✅ Pasta types/ movida para raiz" -ForegroundColor Green
}

# 7. Remover pasta src vazia
Write-Host "🗑️  Removendo pasta src/ vazia..." -ForegroundColor Yellow
if (Test-Path "src") {
    Remove-Item "src" -Recurse -Force
    Write-Host "✅ Pasta src/ removida" -ForegroundColor Green
}
Write-Host ""

# 8. Baixar package.json correto
Write-Host "📦 Você precisa BAIXAR o package.json correto que criei!" -ForegroundColor Red
Write-Host "   Substitua o arquivo package.json na raiz do projeto" -ForegroundColor Red
Write-Host ""
Write-Host "⏸️  PAUSADO - Pressione qualquer tecla DEPOIS de substituir o package.json..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
Write-Host ""

# 9. Reinstalar dependências
Write-Host "📦 Reinstalando dependências..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item "node_modules" -Recurse -Force
}
if (Test-Path "package-lock.json") {
    Remove-Item "package-lock.json" -Force
}
npm install
Write-Host "✅ Dependências instaladas" -ForegroundColor Green
Write-Host ""

# 10. Testar localmente
Write-Host "🧪 Testando build local..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build local funcionou!" -ForegroundColor Green
} else {
    Write-Host "❌ Build falhou! Verifique os erros acima" -ForegroundColor Red
    exit 1
}
Write-Host ""

# 11. Commit e push
Write-Host "📤 Enviando para GitHub..." -ForegroundColor Yellow
git add .
git commit -m "Reorganiza estrutura - move src/ para raiz"
git push origin main
Write-Host "✅ Código enviado!" -ForegroundColor Green
Write-Host ""

Write-Host "🎉 REORGANIZAÇÃO COMPLETA!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 ESTRUTURA FINAL:" -ForegroundColor Cyan
Write-Host "   ├── app/" -ForegroundColor White
Write-Host "   ├── components/" -ForegroundColor White
Write-Host "   ├── lib/" -ForegroundColor White
Write-Host "   ├── types/" -ForegroundColor White
Write-Host "   ├── public/" -ForegroundColor White
Write-Host "   ├── middleware.ts" -ForegroundColor White
Write-Host "   ├── package.json (CORRIGIDO)" -ForegroundColor Green
Write-Host "   └── ..." -ForegroundColor White
Write-Host ""
Write-Host "⏱️  Aguarde 2-3 minutos para o Vercel fazer deploy" -ForegroundColor Yellow
Write-Host "🔐 Depois teste: https://colegio-magia-divina.vercel.app" -ForegroundColor Cyan
Write-Host "    Senha: colegio@preview" -ForegroundColor Cyan

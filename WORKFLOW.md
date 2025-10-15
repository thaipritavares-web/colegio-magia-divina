# 🎯 WORKFLOW - Colégio Tradução de Magia Divina

## 📋 SOBRE O PROJETO

### Informações Básicas
- **Nome**: Site Institucional - Colégio Tradução de Magia Divina
- **Repositório**: github.com/thaipritavares-web/colegio-magia-divina
- **Documentação Base**: Documento de Requisitos Técnicos v3
- **Linguagem**: Português do Brasil (pt-BR)
- **Encoding Obrigatório**: UTF-8 em TODOS os arquivos

### Paleta de Cores Oficial (NUNCA DESVIAR)
| Elemento | Cor | HEX | RGB | Uso |
|----------|-----|-----|-----|-----|
| **Azul Marinho Escuro** | ![#1B223F](https://via.placeholder.com/15/1B223F/1B223F.png) | `#1B223F` | 27, 34, 63 | Textos principais, Footer |
| **Azul Escuro** | ![#26377F](https://via.placeholder.com/15/26377F/26377F.png) | `#26377F` | 38, 55, 128 | Links, Hover, Menu |
| **Roxo/Azul Médio** | ![#5A5AA4](https://via.placeholder.com/15/5A5AA4/5A5AA4.png) | `#5A5AA4` | 90, 90, 165 | CTAs, Botões primários |
| **Lilás Claro** | ![#C6C0E1](https://via.placeholder.com/15/C6C0E1/C6C0E1.png) | `#C6C0E1` | 199, 192, 225 | Texto secundário |
| **Lavanda** | ![#DDCFE8](https://via.placeholder.com/15/DDCFE8/DDCFE8.png) | `#DDCFE8` | 221, 207, 231 | Cards, Blocos |
| **Lilás Quase Branco** | ![#ECE0F0](https://via.placeholder.com/15/ECE0F0/ECE0F0.png) | `#ECE0F0` | 236, 224, 239 | Header, Seções alternadas |
| **Fundo Principal** | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/FFFFFF.png) | `#FFFFFF` | 255, 255, 255 | Background geral |

### Fontes Oficiais (SEMPRE USAR)
- **Cerulya CF**: Títulos, Logo e Headings
- **Router** (bold/normal/thin): Corpo de texto, menus, labels

---

## 🔒 REGRAS DE SEGURANÇA (INVIOLÁVEIS)

### ❌ NUNCA Commitar no Git:
- [ ] Senhas ou credenciais de qualquer tipo
- [ ] Chaves de API (Stripe, PayPal, PagSeguro, etc)
- [ ] Tokens de autenticação ou JWT secrets
- [ ] Dados pessoais reais (CPF, RG, emails reais, telefones)
- [ ] Certificados ou documentos de usuários
- [ ] Arquivos `.env` com dados sensíveis
- [ ] Strings de conexão de banco de dados

### ✅ SEMPRE Usar:
- [ ] Variáveis de ambiente para TODAS as credenciais
- [ ] Placeholder/mock data em desenvolvimento
- [ ] `.gitignore` configurado ANTES do primeiro commit
- [ ] Validação de inputs no front-end E back-end
- [ ] Sanitização de dados de formulários
- [ ] HTTPS em produção (obrigatório)

### 🚫 Pastas que NUNCA vão pro Git:
```
/uploads/certificados/
/uploads/documentos/
/uploads/fotos/
/uploads/identidades/
.env
.env.local
.env.production
/node_modules/
/vendor/
*.log
```

### 🛡️ Checklist de Segurança por Funcionalidade

#### Upload de Arquivos:
- [ ] Validar extensão do arquivo (whitelist)
- [ ] Validar tamanho máximo
- [ ] Renomear arquivo com hash único
- [ ] Armazenar fora da pasta pública (se possível)
- [ ] Nunca executar arquivos uploadados

#### Formulários:
- [ ] Validação HTML5 (required, pattern, type)
- [ ] Validação JavaScript no front
- [ ] Validação no back-end (NUNCA confiar no front)
- [ ] Sanitização de inputs (strip_tags, htmlspecialchars)
- [ ] CSRF token em formulários importantes

#### Pagamentos:
- [ ] NUNCA armazenar número de cartão completo
- [ ] Usar API oficial (Stripe, PagSeguro) com tokens
- [ ] Chaves de API em variáveis de ambiente
- [ ] Logs de transação (sem dados sensíveis)

---

## 🔧 PADRÕES TÉCNICOS OBRIGATÓRIOS

### Encoding e Charset
```html
<!-- TODOS os arquivos HTML devem ter: -->
<meta charset="UTF-8">
```

```php
<?php
// TODOS os arquivos PHP devem ter no topo:
header('Content-Type: text/html; charset=utf-8');
?>
```

**Teste de Acentuação Obrigatório:**
Validar que estes textos aparecem corretamente:
- São Paulo
- José
- Tradução
- Magia
- Rubem Saraceni
- Iniciação

### Responsividade (Mobile-First)

**Breakpoints Obrigatórios:**
```css
/* Mobile First - Base */
/* Até 767px */

/* Tablet */
@media (min-width: 768px) { }

/* Desktop */
@media (min-width: 1024px) { }

/* Wide Desktop */
@media (min-width: 1440px) { }
```

**Testar em TODOS os breakpoints:**
- [ ] 320px (mobile pequeno)
- [ ] 768px (tablet)
- [ ] 1024px (desktop)
- [ ] 1440px (wide)

### Performance

- [ ] Imagens otimizadas (WebP quando possível, fallback JPG/PNG)
- [ ] CSS minificado em produção
- [ ] JavaScript minificado em produção
- [ ] CDN para bibliotecas externas (Bootstrap, jQuery, etc)
- [ ] Lazy loading para imagens abaixo da dobra
- [ ] Compressão GZIP/Brotli no servidor

### Compatibilidade de Navegadores

**Suporte obrigatório:**
- Chrome (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Edge (últimas 2 versões)

**Fallbacks necessários:**
- [ ] CSS Grid → Flexbox
- [ ] WebP → JPG/PNG
- [ ] Modern JS → Babel/Polyfills

---

## 🔄 WORKFLOW OBRIGATÓRIO (PROCESSO DE DESENVOLVIMENTO)

### 📥 Início de Cada Sessão:

1. [ ] **Buscar contexto anterior**
   - Usar `conversation_search` para recuperar discussões da release anterior
   - Perguntar ao usuário qual release estamos trabalhando

2. [ ] **Ler documentação do GitHub**
   ```
   - Ler CHANGELOG.md (histórico)
   - Ler WORKFLOW.md (este arquivo - instruções)
   - Ler código atual se necessário
   ```

3. [ ] **Confirmar escopo**
   - Número da release atual (ex: v1.3.0)
   - Funcionalidades a serem implementadas
   - Prazo/prioridades

4. [ ] **Revisar erros conhecidos**
   - Consultar seção "Histórico de Problemas" abaixo
   - Garantir que não vamos repetir erros

---

### 💻 Durante o Desenvolvimento:

1. [ ] **Antes de modificar código:**
   - Ler arquivos atuais do GitHub com `web_fetch`
   - Entender estrutura existente
   - Não reescrever do zero sem necessidade

2. [ ] **Ao escrever código:**
   - Aplicar paleta de cores oficial (copiar/colar HEX)
   - Validar encoding UTF-8
   - Comentar partes complexas
   - Seguir padrões de nomenclatura consistentes

3. [ ] **Testar continuamente:**
   - Responsividade em 4 breakpoints
   - Acentuação (São, José, etc)
   - Links internos
   - Validação de formulários

4. [ ] **Gerar mockup HTML:**
   - Criar versão standalone (sem dependências externas)
   - Incluir CSS inline ou em arquivo separado
   - Funcional para teste visual

---

### ✅ PRÉ-DEPLOY CHECKLIST (OBRIGATÓRIO)

**Funcionalidade:**
- [ ] Todas as features solicitadas implementadas
- [ ] Links internos funcionando
- [ ] Formulários com validação HTML5 + JS
- [ ] Upload de arquivos funcional (se aplicável)
- [ ] Mensagens de erro/sucesso claras

**Visual:**
- [ ] Paleta oficial aplicada corretamente
  - Textos: #1B223F
  - Links/Hover: #26377F
  - CTAs: #5A5AA4
  - Cards: #DDCFE8
- [ ] Fontes corretas carregadas (Cerulya CF + Router)
- [ ] Layout consistente em 320px, 768px, 1024px, 1440px
- [ ] Acentuação perfeita (testar: São Paulo, José, Tradução)
- [ ] Imagens otimizadas e com alt text

**Técnico:**
- [ ] UTF-8 em todos os arquivos HTML/PHP/CSS/JS
- [ ] `<meta charset="UTF-8">` em todos os HTMLs
- [ ] Código comentado (partes complexas)
- [ ] Sem `console.log()` ou código de debug
- [ ] Sem `alert()` de teste
- [ ] Caminhos de arquivos corretos (absolutos ou relativos consistentes)

**Segurança:**
- [ ] Zero credenciais no código
- [ ] Variáveis de ambiente para dados sensíveis
- [ ] Inputs validados e sanitizados
- [ ] Sem dados pessoais reais no código
- [ ] `.gitignore` atualizado

**Performance:**
- [ ] Tamanho total do release < 95MB
- [ ] Imagens comprimidas
- [ ] CSS/JS minificados (produção)
- [ ] Sem arquivos duplicados

**Documentação:**
- [ ] `CHANGELOG.md` atualizado com esta release
- [ ] Comentários no código (se necessário)
- [ ] `README.md` atualizado (se mudou estrutura)

---

### 📦 Após Aprovação (Entrega):

1. [ ] **Gerar pacote final:**
   - Arquivo `release-vX.X.X.zip` otimizado
   - Estrutura de pastas correta
   - Sem arquivos desnecessários

2. [ ] **Documentar:**
   - Atualizar `CHANGELOG.md` com detalhes da release
   - Documentar problemas encontrados e soluções
   - Notas técnicas importantes

3. [ ] **Instruções de deploy:**
   - Máximo 3 comandos simples
   - Exemplo:
   ```bash
   # 1. Download (link fornecido)
   # 2. Extrair
   unzip release-v1.3.0.zip -d ~/projeto
   # 3. Deploy
   cd ~/projeto && git add . && git commit -m "Release v1.3.0" && git push
   ```

---

## 🐛 HISTÓRICO DE PROBLEMAS E SOLUÇÕES

### ❌ Problema 1: Acentuação Quebrada
**Sintomas:** Caracteres especiais aparecem como � ou ÃÃ£o
**Causa Raiz:** 
- Falta de `<meta charset="UTF-8">` no HTML
- Arquivo salvo em encoding errado (ISO-8859-1, Windows-1252)
- Servidor não enviando header correto

**Solução Definitiva:**
```html
<!-- Em TODOS os arquivos HTML: -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ...
</head>
```

```php
<?php
// No topo de TODOS os arquivos PHP:
header('Content-Type: text/html; charset=utf-8');
?>
```

**Validação:**
Testar que estes textos aparecem corretamente:
- São Paulo → ✅ (não SÃ£o Paulo)
- José → ✅ (não JosÃ©)
- Tradução → ✅ (não TraduÃ§Ã£o)

---

### ❌ Problema 2: Cores Incorretas ou Inconsistentes
**Sintomas:** Cores diferentes da paleta oficial
**Causa Raiz:**
- Digitação manual do código HEX (erro de digitação)
- Uso de cores "parecidas" mas não oficiais
- Editor/IDE modificando cores

**Solução Definitiva:**
1. **SEMPRE copiar/colar** da tabela oficial acima
2. **Criar variáveis CSS** para reutilização:
```css
:root {
    --azul-marinho: #1B223F;
    --azul-escuro: #26377F;
    --roxo-medio: #5A5AA4;
    --lilas-claro: #C6C0E1;
    --lavanda: #DDCFE8;
    --lilas-branco: #ECE0F0;
}
```
3. **Validar visualmente** contra mockups aprovados

---

### ❌ Problema 3: Layout Quebrado no Mobile
**Sintomas:** Elementos sobrepostos, texto cortado, scroll horizontal
**Causa Raiz:**
- Falta de media queries
- Uso de unidades fixas (px) em vez de relativas
- Elementos com largura maior que viewport
- Falta de `viewport` meta tag

**Solução Definitiva:**
```html
<!-- Meta tag obrigatória: -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```css
/* Usar unidades relativas: */
.container {
    width: 90%; /* ou max-width: 1200px */
    margin: 0 auto;
}

.texto {
    font-size: 1rem; /* não 16px */
    padding: 1em; /* não 16px */
}

/* Media queries obrigatórias: */
@media (max-width: 767px) {
    .menu { flex-direction: column; }
}
```

**Validação:**
- Testar em Chrome DevTools (320px, 768px, 1024px)
- Testar rotação (portrait/landscape)
- Sem scroll horizontal

---

### ❌ Problema 4: Links/Dependências Quebradas
**Sintomas:** CSS não carrega, imagens quebradas, JS não funciona
**Causa Raiz:**
- Caminhos relativos incorretos (`../../css/style.css`)
- URLs absolutos com domínio errado
- Arquivos movidos sem atualizar referências

**Solução Definitiva:**
```html
<!-- Opção 1: Caminho da raiz (recomendado) -->
<link rel="stylesheet" href="/css/style.css">
<script src="/js/script.js"></script>
<img src="/assets/img/logo.png" alt="Logo">

<!-- Opção 2: CDN para bibliotecas -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

**Validação:**
- Verificar Network tab do navegador (200 OK em todos os recursos)
- Testar em subpastas (não só na raiz)

---

### ❌ Problema 5: Tamanho do Repositório Excedido
**Sintomas:** GitHub rejeita push, mensagem de arquivo > 100MB
**Causa Raiz:**
- Imagens não otimizadas (PNG de 10MB)
- node_modules commitado
- Arquivos de backup incluídos
- Uploads de usuários no Git

**Solução Definitiva:**
1. **Otimizar imagens ANTES de adicionar:**
```bash
# Comprimir JPG/PNG
# Converter para WebP quando possível
```

2. **`.gitignore` robusto** (já criado)

3. **Validar antes de commitar:**
```bash
# Ver tamanho dos arquivos
du -sh *

# Alertar se arquivo > 10MB
find . -type f -size +10M
```

**Limite de alerta:** Se qualquer arquivo > 10MB → avisar usuário

---

### ❌ Problema 6: Formulário Não Valida
**Sintomas:** Dados inválidos enviados, campos vazios aceitos
**Causa Raiz:**
- Falta de atributos HTML5 (required, pattern)
- Validação JavaScript mal implementada
- Falta de validação no back-end

**Solução Definitiva:**
```html
<!-- Validação HTML5 obrigatória: -->
<form>
    <input type="email" name="email" required 
           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    
    <input type="tel" name="telefone" required 
           pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}">
    
    <input type="text" name="nome" required minlength="3">
    
    <button type="submit">Enviar</button>
</form>
```

```javascript
// Validação JS adicional
form.addEventListener('submit', function(e) {
    if (!form.checkValidity()) {
        e.preventDefault();
        // Mostrar erros
    }
});
```

**Validação:**
- Testar envio com campos vazios (deve bloquear)
- Testar formato inválido (deve bloquear)
- Mensagens de erro claras

---

## 📝 TEMPLATES PRONTOS

### Template de CHANGELOG.md
```markdown
## vX.X.X - YYYY-MM-DD

### ✨ Adicionado
- [Nova funcionalidade 1]
- [Nova funcionalidade 2]

### 🔧 Modificado
- [Mudança 1]
- [Mudança 2]

### 🐛 Corrigido
- [Bug 1 resolvido]
- [Bug 2 resolvido]

### ⚠️ Problemas Conhecidos
- [Issue pendente 1]
- [Issue pendente 2]

### 📚 Notas Técnicas
- [Decisão arquitetural importante]
- [Dependência adicionada/removida]

### 🔗 Links
- [Mockup aprovado](link)
- [Discussão no chat](link)
```

---

### Template de Commit
```bash
git commit -m "Release vX.X.X - [Descrição breve]

- Feature 1 implementada
- Bug 2 corrigido
- Atualização no layout do header

Closes #issue-number"
```

---

### Template de Deploy (3 comandos)
```bash
# 1. Download do release
# (link fornecido pelo Claude: computer:///mnt/user-data/outputs/release-vX.X.X.zip)

# 2. Extrair e navegar
unzip release-vX.X.X.zip -d ~/projeto-magia-divina
cd ~/projeto-magia-divina

# 3. Deploy no GitHub
git add . && git commit -m "Release vX.X.X - [descrição]" && git push
```

---

## 🎯 CHECKLIST RESUMIDO (Quick Reference)

### Antes de Começar:
- [ ] Buscar conversas anteriores (`conversation_search`)
- [ ] Ler `CHANGELOG.md` do GitHub
- [ ] Confirmar número da release

### Durante o Trabalho:
- [ ] UTF-8 em tudo
- [ ] Paleta oficial (#1B223F, #26377F, #5A5AA4...)
- [ ] Fontes Cerulya CF + Router
- [ ] Testar em 320px, 768px, 1024px

### Antes de Entregar:
- [ ] Acentuação OK (São, José, Tradução)
- [ ] Responsivo OK
- [ ] Zero credenciais no código
- [ ] Tamanho < 95MB
- [ ] `CHANGELOG.md` atualizado
- [ ] Mockup gerado

---

## 📞 CONTATO E SUPORTE

**Desenvolvedor/Product Owner:** Thaipri Tavares  
**Repositório:** github.com/thaipritavares-web/colegio-magia-divina  

**Para dúvidas sobre requisitos:**
- Consultar: `Documento de Requisitos Técnicos v3.docx`
- Consultar: `Graus de Magia Divina.txt`

---

## 📄 LICENÇA E DIREITOS

**Todos os direitos reservados - Colégio Tradução de Magia Divina**

Este é um projeto proprietário. O código e conteúdo não devem ser reproduzidos, distribuídos ou utilizados sem autorização expressa.

---

**Última atualização:** 2025-10-15  
**Versão do Workflow:** 1.0.0

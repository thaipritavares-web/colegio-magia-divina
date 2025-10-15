# 🎯 WORKFLOW - Colégio Tradução de Magia Divina

## 📋 SOBRE O PROJETO

### Informações Básicas
- **Nome**: Site Institucional - Colégio Tradição de Magia Divina
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
- **Kaushan Script**: Títulos, Logo e Headings (alterado na v2.0)
- **Router** (bold/normal/thin): Corpo de texto, menus, labels

---

## 🔒 REGRAS DE DEPLOY (CRÍTICO)

### Deploy SEMPRE em Comando Único
```powershell
# SEMPRE fornecer comandos concatenados com ;
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue ; Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue ; git add . ; git commit -m "vX.X - descrição" ; git push --force
```

### Validação de Tamanho ANTES do Push
- SEMPRE verificar se tem node_modules ou .next
- SEMPRE incluir .gitignore correto
- SEMPRE usar script deploy-seguro.ps1 quando disponível
- NUNCA tentar push com arquivos > 100MB

### Recebimento de Arquivos do Usuário
- Quando usuário enviar fontes/imagens → incluir automaticamente no projeto
- Usar file_read para ler os arquivos enviados
- Não esperar que o usuário coloque manualmente

---

## 📊 HISTÓRICO DE RELEASES (ATUALIZADO)

### v2.0 - Implementação de Fontes
- ✅ Substituição Cerulya CF → Kaushan Script
- ✅ Implementação fonte Router (todas variações)
- ✅ Correção encoding UTF-8

### v2.1 - Melhorias Visuais
- ✅ REQ-010: Novo layout header (logo 200x200 + título)
- ✅ REQ-014: Hover nos links (cinza claro + sombra)
- ✅ Sombras nos botões
- ✅ Efeitos visuais modernos

### v2.2 - Segurança
- ✅ Sistema de login
- ✅ Proteção por senha
- ✅ Área restrita

### v3.0 - Formulário Completo
- ✅ CEP automático
- ✅ Estado/Cidade com busca
- ✅ Graus com seleção visual
- ✅ Tags para certificados
- ✅ Card reconhecimento
- ✅ Todas melhorias anteriores integradas

---

## 🚨 ERROS COMUNS E SOLUÇÕES

### Erro: "File too large" no GitHub
**Causa:** node_modules ou .next no commit
**Solução:**
```powershell
Remove-Item -Recurse -Force node_modules ; Remove-Item -Recurse -Force .next ; git rm -r --cached node_modules ; git rm -r --cached .next ; git add . ; git commit -m "Remove arquivos grandes" ; git push --force
```

### Erro: Fontes/Imagens não aparecem
**Causa:** Arquivos não copiados para public/
**Solução:** Sempre incluir arquivos enviados pelo usuário automaticamente

### Erro: Acentuação quebrada
**Causa:** Encoding incorreto
**Solução:** UTF-8 em TODOS os arquivos + meta charset

---

## ✅ CHECKLIST OBRIGATÓRIO PRÉ-DEPLOY

### Antes de QUALQUER entrega:
- [ ] WORKFLOW.md foi lido?
- [ ] Conversas anteriores foram buscadas?
- [ ] CHANGELOG.md foi consultado?
- [ ] Versão correta identificada?

### Validações Técnicas:
- [ ] UTF-8 em todos os arquivos?
- [ ] Paleta oficial aplicada corretamente?
- [ ] Fontes Kaushan Script + Router funcionando?
- [ ] Responsivo nos 4 breakpoints?
- [ ] .gitignore configurado?
- [ ] Tamanho < 95MB?

### Entrega:
- [ ] Comando único de deploy fornecido?
- [ ] ZIP otimizado criado?
- [ ] Mockup HTML para teste?
- [ ] CHANGELOG atualizado?

---

**Última atualização:** 2025-10-15
**Versão do Workflow:** 2.0.0 (corrigida pós-análise de erros)

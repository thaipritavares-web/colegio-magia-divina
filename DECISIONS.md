# 📋 DECISIONS.md - Registro de Decisões Técnicas

**Projeto:** Site Colégio Tradição de Magia Divina  
**Última atualização:** 2025-10-15

> ⚠️ **IMPORTANTE:** Este arquivo documenta TODAS as decisões técnicas do projeto.  
> NUNCA altere qualquer item sem aprovação EXPLÍCITA do usuário.

---

## 🎨 IDENTIDADE VISUAL

### **Fontes (CRÍTICO - NÃO ALTERAR)**
- **Títulos:** Kaushan Script (arquivo: KaushanScript-Regular.woff2)
  - ❌ NUNCA substituir por Cerulya CF ou outra fonte
  - Aplicar em: Título principal do site, headers de páginas
- **Textos:** Router (variações: bold, thin, normal)
  - Corpo de texto, menus, botões, formulários

### **Paleta de Cores Oficial**
```
Cor 1 (Azul Marinho Escuro): #1B223F
Cor 2 (Azul Escuro):          #26377F
Cor 3 (Roxo/Azul Médio):      #5A5AA4
Cor 4 (Lilás Claro):          #C6C0E1
Cor 5 (Lavanda):              #DDCFE8
Cor 6 (Lilás Quase Branco):   #ECE0F0
Fundo Principal:              #FFFFFF
```

### **Proposta de Paleta UI/UX**
- Fundo Principal (Body): `#FFFFFF`
- Fundo de Destaque/Rodapé: `#1B223F`
- Fundo de Blocos/Cards: `#DDCFE8`
- Fundo de Seção Alternado: `#ECE0F0`
- Texto Principal/Títulos: `#1B223F`
- Ação Primária (CTA): `#5A5AA4`
- Contraste/Hover: `#26377F`
- Texto/Links Secundários: `#C6C0E1`

### **Logo**
- Tamanho: 200x200px
- Formato: SVG com fundo transparente
- Arquivo: `logo_sem_texto.svg`
- Localização: `/public/images/`

---

## 📐 LAYOUT E ESTRUTURA

### **Header (Cabeçalho)**
- **Estrutura em 2 níveis:**
  1. **Linha Superior:** Menu de navegação + botão Login (alinhados à DIREITA)
  2. **Linha Inferior:** Logo (esquerda) + Título + Subtítulo (direita do logo)

- **Especificações:**
  - Logo: 200x200px, à esquerda
  - Título: "Colégio Tradição de Magia Divina" (Kaushan Script, linha única)
  - Subtítulo: Texto explicativo sobre o site
  - Fundo: Pode variar conforme design aprovado

- **Menu de Navegação:**
  - Itens: Sobre o Colégio Rubem Saraceni | Magia Divina | Consulta de Membros | FAQ | Blog | Afilie-se | Login
  - Efeito hover: Fundo `#f5f5f5`, sombra suave, bordas arredondadas 4px, transição 0.3s

### **Footer (Rodapé)**
- Fundo: `#1B223F` (Azul Marinho Escuro)
- Texto: Cor clara para contraste
- Conteúdo: Informações institucionais, links úteis

---

## 📝 FORMULÁRIO DE AFILIAÇÃO

### **Estrutura Multi-Step (6 Etapas)**
1. **Etapa 1:** Escolha do tipo de afiliação
   - ★ Iniciador (Mago/Professor) - R$ 250/ano
   - ☆ Iniciado (Praticante) - R$ 200/ano
2. **Etapa 2:** Dados pessoais
3. **Etapa 3:** Endereço
4. **Etapa 4:** Documentos obrigatórios
5. **Etapa 5:** Graus de magia e certificados
6. **Etapa 6:** Revisão e confirmação

### **Ícones (OBRIGATÓRIO)**
- Biblioteca: Phosphor Icons (`@phosphor-icons/react`)
- Uso: Progress bar, cards, campos do formulário
- Estrelas nos cards: ★ (Iniciador) / ☆ (Iniciado)

### **Campos e Máscaras**
- **CPF:** `000.000.000-00` (validação em tempo real)
- **CEP:** `00000-000` (busca automática ao completar ou TAB via API ViaCEP)
- **Telefone Celular:** `(00) 00000-0000`
- **Telefone Fixo:** `(00) 0000-0000`
- **Email:** 2 campos (email e confirmação)
- **Endereço:** Suporte para endereços internacionais (campo País)

### **Sistema de Graus (29 Magias)**
Lista completa dos graus:
1. Magia Sagrada das Sete Chamas
2. Magia Sagrada das Sete Pedras
3. Magia Sagrada das Sete Ervas Sagradas
4. Magia Sagrada das Sete Raios
5. Magia Sagrada das Sete Símbolos
6. Magia Sagrada das Sete Espadas
7. Magia Sagrada das Sete Eixos
8. Magia Sagrada das Sete Energias
9. Magia Sagrada das Sete Círculos
10. Magia Sagrada das Sete Esferas
11. Magia Sagrada das Sete Árvores
12. Magia Sagrada dos Sete Anjos
13. Magia Sagrada das Sete Luzes e Cores
14. Magia Sagrada dos Sete Vórtices
15. Magia Sagrada dos Sete Portais
16. Magia Sagrada dos Sete Assopros
17. Magia Sagrada dos Sete Giros
18. Magia Sagrada das Sete Vestes
19. Magia Sagrada dos Sete Mantos
20. Magia Sagrada dos Sete Gênios
21. Magia Sagrada dos Mentais
22. Magia Sagrada das Cruzes
23. Magia Sagrada dos Fatores
24. Magia Sagrada dos Dragões
25. Magia Sagrada dos Elementais
26. Magia Sagrada das Essências
27. Magia Sagrada das Diferenças
28. Magia Sagrada das Conchas
29. Magia Sagrada das Águas

**Requisitos Mínimos:**
- **Iniciador:** Mínimo 5 graus, incluindo obrigatoriamente:
  - Magia das Sete Chamas (Fogo)
  - Magia das Sete Pedras
  - Magia das Sete Ervas
  - Magia dos Sete Raios
  - + 1 grau adicional à escolha
- **Iniciado:** Mínimo 1 grau (Magia das Sete Chamas/Fogo)

**Seleção Visual:**
- Checkbox com ícone para cada grau
- Campo de data de conclusão ao lado de cada grau selecionado
- Indicador visual de graus obrigatórios

### **Sistema de Títulos (Graduação Automática)**
Baseado no número de graus concluídos:
- **1-20 graus:** Mago
- **21-28 graus:** Mago do Arco Íris Divino
- **29 graus:** Mestre Mago do Arco Íris Divino

**Card de Reconhecimento Especial (21+ graus):**
- Fundo branco com sombra arco-íris/dourada
- Mensagem: "Que o Divino Mistério do Arco Íris te abençoe"
- Exibir após seleção dos graus

### **Upload de Certificados**
- **Nomenclatura:** `CPF-GRAU1-GRAU2-GRAU3.pdf`
  - Exemplo: `12345678900-CHAMAS-PEDRAS-ERVAS.pdf`
- **Múltiplos graus por arquivo:** Permitido (sistema de tags visuais)
- **Formatos aceitos:** PDF, JPG, PNG
- **Tamanho máximo:** 30MB por arquivo
- **Segurança:** Bloquear executáveis (.exe, .bat, .sh, .js, .cmd, .app, .dmg)
- **Validação:** MIME type e extensão do arquivo

### **Upload de Documentos Obrigatórios**
- CPF/RG/Identidade Nacional (frente e verso se aplicável)
- Comprovante de endereço (até 3 meses)
- Foto 3x4 recente

### **Armazenamento no HostGator**
- **Estrutura:** `/inscricoes/[CPF]/`
  - `/inscricoes/12345678900/documentos/`
  - `/inscricoes/12345678900/certificados/`
  - `/inscricoes/12345678900/foto/`
- **Backup:** Configurar rotina automática

### **Pagamento**
- Integração preparada (estrutura pronta)
- Métodos: Cartão de crédito, PIX
- Gateway: A definir (pendente)

---

## 🔒 SEGURANÇA

### **Sistema de Login**
- Senha de preview: `colegio@preview` (apenas desenvolvimento)
- Produção: Sistema completo com autenticação

### **Validações de Upload**
- Validação de tipo MIME
- Validação de extensão de arquivo
- Bloqueio de scripts executáveis
- Limite de tamanho por arquivo
- Scan de vírus (a implementar)

---

## 💻 PADRÕES TÉCNICOS

### **Encoding**
- **UTF-8 obrigatório** em todos os arquivos
- Testar caracteres: São, José, Tradução, Símbolos, Círculos, Árvores

### **Responsividade**
Testar em 4 breakpoints obrigatórios:
- 320px (mobile pequeno)
- 768px (tablet)
- 1024px (desktop pequeno)
- 1440px (desktop grande)

### **Performance**
- Imagens otimizadas (WebP quando possível)
- CSS minificado em produção
- JavaScript minificado em produção
- Lazy loading de imagens

### **Tamanho de Repositório**
- Limite GitHub: 100MB
- Meta: < 95MB por release
- **NUNCA incluir:**
  - `node_modules/` (instalar no servidor)
  - `.next/` (compilar no servidor)
  - Arquivos de log
  - Arquivos temporários

---

## 🚀 DEPLOY E INFRAESTRUTURA

### **Ambientes**
- **Desenvolvimento:** Local (localhost:3000)
- **Preview:** Vercel (auto-deploy em push)
- **Produção:** HostGator (deploy manual)

### **Comandos de Deploy Local**
```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Rodar produção
npm start
```

### **Deploy no GitHub**
- Usar script: `deploy-seguro.ps1 -Version "vX.X.X"`
- Validar tamanho antes do push
- Nunca commitar credenciais ou dados sensíveis

---

## 📊 DECISÕES FUTURAS (A IMPLEMENTAR)

### **Sistema de Membros**
- Lista pública de membros afiliados
- Busca por localização (estado/cidade)
- Filtros por graus/especialidades

### **FAQ com Busca**
- Sistema de busca full-text
- Categorização de perguntas
- Admin para adicionar/editar FAQs

### **Blog**
- CMS simples ou integrado
- Sistema de categorias e tags
- Comentários (avaliar necessidade)

### **Backend Completo**
- Banco de dados (MySQL/PostgreSQL)
- API REST para formulários
- Dashboard administrativo
- Sistema de email automático

---

## ⚠️ AVISOS IMPORTANTES

### **NUNCA FAÇA SEM APROVAÇÃO:**
- ❌ Alterar fontes (especialmente Kaushan Script)
- ❌ Modificar paleta de cores oficial
- ❌ Mudar estrutura do header/footer
- ❌ Alterar requisitos do formulário de afiliação
- ❌ Remover campos obrigatórios
- ❌ Modificar lógica de validação sem avisar

### **SEMPRE CONSULTE ANTES:**
- ⚠️ Adicionar novas bibliotecas/dependências
- ⚠️ Mudar estrutura de pastas
- ⚠️ Alterar fluxo do formulário
- ⚠️ Modificar comportamento de uploads
- ⚠️ Implementar novas features não discutidas

---

**Última revisão:** 2025-10-15  
**Próxima revisão:** A cada release ou quando houver novas decisões

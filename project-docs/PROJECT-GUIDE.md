# GUIA DO PROJETO - COLÉGIO TRADIÇÃO DE MAGIA DIVINA

**Última atualização:** 2025-10-19 (Checkpoint #3)

---

## 🎯 SOBRE O PROJETO

Site institucional para o Colégio Tradição de Magia Divina.

**Instituição dedicada ao ensino e preservação dos conhecimentos da Magia Divina segundo os ensinamentos de Rubens Saraceni.**

**Objetivo:** Plataforma completa com:
- Sistema de afiliação paga (Mago Iniciador e Mago Iniciado)
- Área exclusiva para membros afiliados
- Gestão administrativa completa do colégio
- Consulta pública de membros ativos
- Sistema de blog institucional
- FAQ e conteúdo informativo

**Público-alvo:** 
- **Visitantes:** Pessoas interessadas em conhecer a Magia Divina
- **Candidatos a Afiliação:** Praticantes que desejam se afiliar ao colégio
- **Afiliados (Magos):** Membros pagantes com acesso exclusivo
  - Mago Iniciador (professor de magia): R$ 250/ano
  - Mago Iniciado (praticante autônomo): R$ 200/ano
- **Staff do Colégio:** Equipe que gerencia afiliações, certificados e conteúdo
- **Administrador Técnico:** Responsável pela gestão técnica e configurações do sistema

---

## 🛠️ TECNOLOGIAS USADAS

### Frontend:
- **Framework:** Next.js 14
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Deploy:** Vercel
- **Idioma:** Português do Brasil
- **Encoding:** UTF-8 (obrigatório em todos os arquivos)

### Backend/Banco de Dados:
- **Banco de Dados:** Supabase (PostgreSQL)
- **Autenticação:** Supabase Auth
- **Storage:** Supabase Storage (para arquivos/imagens/certificados)
- **API:** Supabase REST API

### Pagamentos:
- **Gateway:** Mercado Pago
- **Métodos:** Cartão de Crédito e PIX

### Integrações:
- **Maps:** Google Maps (busca por CEP)
- **CEP:** API ViaCEP
- **QR Code:** Geração automática no cadastro

### Desenvolvimento:
- **Versionamento:** Git + GitHub
- **Terminal:** PowerShell
- **Ambiente local:** Node.js + npm

---

## 📂 ESTRUTURA DE ARQUIVOS

```
C:\Users\thais\Documents\Projeto_website_colegio-tradicao-magia-divina 2\
│
├── /project-docs/          # Documentação do projeto
├── /backups/               # Versões funcionais
├── /outputs/               # Arquivos gerados pela IA
└── /colegio-tradicao/      # Código do site Next.js
    ├── /src/
    │   ├── /app/           # Páginas (App Router)
    │   ├── /components/    # Componentes reutilizáveis
    │   ├── /lib/           # Funções utilitárias
    │   │   └── supabase/   # Configuração e helpers Supabase
    │   ├── /types/         # Tipos TypeScript
    │   └── /middleware/    # Middleware (autenticação, etc)
    ├── /public/            # Assets estáticos
    └── package.json
```

---

## 🎨 PADRÕES DE DESIGN

### Paleta de Cores Oficial (NUNCA DESVIAR):

| Cor | HEX | Uso | RGB |
|-----|-----|-----|-----|
| Azul Marinho Escuro | `#1B223F` | Textos principais, rodapé | RGB(27, 34, 63) |
| Azul Escuro | `#26377F` | Links, hover, menu | RGB(38, 55, 128) |
| Roxo/Azul Médio | `#5A5AA4` | CTAs, botões | RGB(90, 90, 165) |
| Lilás Claro | `#C6C0E1` | Texto secundário | RGB(199, 192, 225) |
| Lavanda | `#DDCFE8` | Cards, blocos | RGB(221, 207, 231) |
| Lilás Quase Branco | `#ECE0F0` | Header, seções alternadas | RGB(236, 224, 239) |
| Branco | `#FFFFFF` | Fundo principal | RGB(255, 255, 255) |

### Aplicação UX das Cores:

| Elemento UI | Função | Cor HEX | Racional |
|-------------|--------|---------|----------|
| Fundo Principal (Body) | Base do site | `#FFFFFF` | Clareza e legibilidade máxima |
| Rodapé / Destaque | Seções importantes | `#1B223F` | Destaque escuro, impacto visual |
| Cards / Blocos | Agrupamento de conteúdo | `#DDCFE8` | Suave e elegante sobre branco |
| Header / Seções Alternadas | Fundo leve | `#ECE0F0` | Quebra monotonia do branco |
| Texto Principal / Títulos | Alto contraste | `#1B223F` | Máxima legibilidade |
| Botões CTA | Ação primária | `#5A5AA4` | Maior destaque visual |
| Links / Hover | Interação | `#26377F` | Distinto mas harmonioso |
| Texto Secundário | Rótulos, links footer | `#C6C0E1` | Suave, visível sobre escuro |

### Fontes Oficiais:
- **Kaushian Script** - Título do site "Colégio Tradição de Magia Divina"
- **Família Router** - Demais textos
  - Router Bold (títulos e destaques)
  - Router Normal (corpo de texto)
  - Router Thin (textos secundários)

### Espaçamentos padrão:
- Seguir escala do Tailwind CSS (4, 8, 12, 16, 24, 32, 48, 64px)
- Padding interno: múltiplos de 4px
- Margins entre seções: 48px, 64px, 96px

### Breakpoints responsivos (OBRIGATÓRIOS):
- **320px** - Mobile pequeno
- **768px** - Tablet
- **1024px** - Desktop
- **1440px** - Desktop large
- **TESTAR EM TODOS** antes de entregar

---

## ⚠️ REGRAS IMPORTANTES

### NUNCA MODIFICAR SEM APROVAÇÃO:
- Paleta de cores oficial (qualquer desvio precisa aprovação explícita)
- Fontes oficiais (Kaushian Script e Router)
- Estrutura de dados do banco (magos, contatos, graus)
- Fluxo de afiliação e pagamento
- Sistema de QR Code

### SEMPRE MANTER:
- **Encoding UTF-8** em todos os arquivos
- **Idioma Português do Brasil**
- Responsividade mobile-first
- TypeScript strict mode
- Padrões de nomenclatura estabelecidos
- Estrutura de componentes definida
- Paleta de cores oficial sem desvios
- Breakpoints obrigatórios: 320px, 768px, 1024px, 1440px

---

## 📝 CONVENÇÕES DE CÓDIGO

### Nomenclatura:
- **Componentes React:** PascalCase (ex: `Header.tsx`, `HeroSection.tsx`)
- **Funções:** camelCase (ex: `fetchData`, `handleSubmit`)
- **Constantes:** UPPER_SNAKE_CASE (ex: `API_URL`, `MAX_ITEMS`)
- **Arquivos de páginas:** kebab-case (ex: `sobre-nos.tsx`, `contato.tsx`)

### Comentários:
- Comentar lógica complexa
- Documentar props de componentes
- Explicar decisões não-óbvias

---

## 🔗 LINKS IMPORTANTES

- **Repositório GitHub:** [A ser criado]
- **Site em produção:** [A ser criado no Vercel]
- **Painel Supabase:** [A ser criado]
- **Mercado Pago:** [Conta a ser configurada]
- **Documentação Next.js:** https://nextjs.org/docs
- **Documentação Tailwind:** https://tailwindcss.com/docs
- **Documentação Supabase:** https://supabase.com/docs
- **Documentação Mercado Pago:** https://www.mercadopago.com.br/developers/pt
- **Google Maps API:** https://developers.google.com/maps
- **ViaCEP:** https://viacep.com.br/

---

## 📋 FUNCIONALIDADES PRINCIPAIS

### ÁREA PÚBLICA (Sem Login):

#### 1. Menu de Navegação (todas as páginas):
- Home
- Sobre o Colégio
- Rubens Saraceni
- A Magia Divina
- Consulta de Membros
- FAQ
- Blog
- Afilie-se
- **Botão Login** (destaque visual)

#### 2. Headers:
- **Home:** Header especial (logo grande + título estilizado "Colégio Tradição de Magia Divina")
- **Demais páginas:** Header padrão (logo menor + menu horizontal)

#### 3. Footer (todas as páginas):
- Fundo: `#1B223F` (Azul Marinho Escuro)
- Seções:
  - Sobre o Colégio Tradição de Magia Divina
  - Links Rápidos (Sobre, Rubens, Magia Divina, Consulta, FAQ, Afilie-se)
  - Contato (email, horário atendimento)
- Copyright

#### 4. Páginas de Conteúdo:
- **Home:**
  - Hero section (cabeçalho especial)
  - Últimos posts do blog
  - CTAs para afiliação
  - [Outras seções a definir]
  
- **Sobre o Colégio:** Texto + imagens
- **Rubens Saraceni:** Texto + imagens
- **A Magia Divina:** Texto + imagens

#### 5. Blog:
- Sistema completo de posts
- Últimos posts exibidos na Home
- Página individual para cada post
- **Staff pode criar/editar posts** (área administrativa)

#### 6. FAQ:
- **Busca de termos** (campo de pesquisa)
- Conteúdo FAQ organizado
- [Categorias/acordeon a definir]

#### 7. Consulta de Membros:
**Funcionalidades:**
- Exibe apenas afiliados com **anualidade paga em dia**
- Cada afiliado tem **QR Code único**
- QR Code leva direto para ficha do afiliado
- **Busca por CEP:**
  - Usuário insere CEP
  - Sistema encontra Mago Iniciador mais próximo
  - Exibe Google Maps + dados de contato

#### 8. Afilie-se (Formulário Complexo):

**Tipos de Afiliação:**
- **Mago Iniciador** (professor de magia): R$ 250/ano
- **Mago Iniciado** (praticante autônomo): R$ 200/ano

**Dados Obrigatórios:**
```typescript
// Dados do Mago
- Nome do Mago
- Tipo: Iniciador ou Iniciado
- Código (fornecido após aprovação pelo sistema offline)

// Dados de Contato
- Nome Completo
- CPF (Número de Identidade)
- Email
- Telefone Celular
- Telefone Fixo (opcional)
- CEP (com busca automática)
- Logradouro
- Número
- Complemento
- Bairro
- Cidade
- Estado
```

**Graus de Magia (29 possíveis):**
Para cada grau que possui:
- ☑️ Checkbox (selecionar)
- 📅 Data de conclusão
- 📄 Upload de certificado PDF

Lista dos 29 Graus:
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
12. Magia Sagrada das Sete Anjos
13. Magia Sagrada das Sete Luzes e Cores
14. Magia Sagrada das Sete Vórtices
15. Magia Sagrada das Sete Portais
16. Magia Sagrada das Sete Assopros
17. Magia Sagrada das Sete Giros
18. Magia Sagrada das Sete Vestes
19. Magia Sagrada das Sete Mantos
20. Magia Sagrada das Sete Gênios
21. Magia Sagrada dos Mentais
22. Magia Sagrada das Cruzes
23. Magia Sagrada dos Fatores
24. Magia Sagrada dos Dragões
25. Magia Sagrada dos Elementais
26. Magia Sagrada das Essências
27. Magia Sagrada das Diferenças
28. Magia Sagrada das Conchas
29. Magia Sagrada das Águas

**Upload de Documentos:**
- Foto do candidato
- Documento de identidade
- Certificado de cada grau selecionado
- Todos identificados com CPF + tipo de documento

**Pagamento:**
- Gateway: **Mercado Pago**
- Métodos: Cartão de Crédito ou PIX
- Valores:
  - Mago Iniciador: R$ 250,00
  - Mago Iniciado: R$ 200,00

**Fluxo de Afiliação:**
```
1. Candidato preenche formulário
2. Upload de documentos e certificados
3. Pagamento via Mercado Pago
4. Dados salvos no Supabase
5. Status: "Pendente de aprovação"
6. Staff acessa área administrativa
7. Revisa documentos
8. Aprova ou rejeita
9. Se aprovado: cadastra no sistema offline
10. Sistema offline gera "Código do Mago"
11. Staff insere código no site
12. QR Code gerado automaticamente
13. Afiliado ativo no sistema
14. Aparece em "Consulta de Membros"
```

---

### ÁREA LOGADA - STAFF DO COLÉGIO:

**Permissões:**
- Gerenciar pedidos de afiliação
- Aprovar/rejeitar afiliações
- Baixar documentos enviados
- Inserir código do mago (do sistema offline)
- Controlar exibição na Consulta Pública (ativar/desativar por anualidade)
- **Gerenciar Blog:**
  - Criar posts
  - Editar posts
  - Excluir posts
  - Publicar/despublicar
- Visualizar lista de todos afiliados

---

### ÁREA LOGADA - ADMINISTRADOR:

**Permissões Técnicas:**
- Acesso total ao sistema
- **Configurações editáveis (SEM CÓDIGO):**
  - Valor afiliação Mago Iniciador
  - Valor afiliação Mago Iniciado
  - [Outras configurações do sistema]
- Gerenciar usuários Staff
- Logs de atividades
- Backups

---

### ÁREA LOGADA - AFILIADOS:

**A ser detalhada posteriormente**
- Conteúdo exclusivo
- Certificados pessoais
- [Outras funcionalidades]

---

### FUNCIONALIDADES TÉCNICAS:

- ✅ Autenticação (Supabase Auth)
- ✅ Diferentes níveis de permissão (roles: afiliado, staff, admin)
- ✅ Upload de múltiplos arquivos (Supabase Storage)
- ✅ Geração automática de QR Code
- ✅ Integração Mercado Pago
- ✅ Busca por CEP (ViaCEP)
- ✅ Google Maps (localização de Magos Iniciadores)
- ✅ Sistema de Blog (CMS simples)
- ✅ Configurações editáveis por Admin (sem código)
- ✅ Responsividade completa (320px, 768px, 1024px, 1440px)
- ✅ Performance otimizada (WebP, lazy loading, minificação)
- ✅ **UX otimizado** (ver UX-GUIDELINES.md para detalhes completos)

---

## 🎨 EXPERIÊNCIA DO USUÁRIO (UX)

**PRIORIDADE MÁXIMA:** A experiência do usuário é fundamental em todo o projeto.

### Princípios Fundamentais:
- Interface intuitiva e sem fricção
- Processo de afiliação claro e fácil
- Tudo deve ser explicado
- Validações não agressivas
- Feedback visual elegante
- Otimização de espaço vertical (evitar scroll desnecessário)

### Documentação Detalhada:
📖 **Ver UX-GUIDELINES.md** para especificações completas de:
- Sistema de sombreamentos (5 níveis)
- Microinterações e transições
- Estados de componentes (hover, focus, erro, sucesso)
- Formulário de afiliação internacional
- Validações não agressivas
- Máscaras de entrada
- Campos com busca (searchable)
- Tooltips e ajuda contextual
- Responsividade otimizada
- Mensagens e notificações
- Acessibilidade WCAG 2.1 AA

### Destaques de UX:

**Sombreamentos Elegantes:**
- 5 níveis de elevação (shadow-sm até shadow-2xl)
- Aplicados em links, botões, cards, modais
- Transições suaves de 300ms

**Formulário Inteligente:**
- Multi-step com progresso visual
- Validação em tempo real não agressiva
- CEP automático (Brasil)
- Adaptativo por país (Brasil, Europa, América do Sul)
- Campos proporcionais ao conteúdo
- Agrupamento visual em seções
- Placeholders com exemplos reais

**Otimização Vertical:**
- Campos com largura proporcional ao conteúdo
- Agrupamento inteligente em linhas
- Seções visuais claras
- Espaçamentos otimizados
- **Objetivo:** Evitar scroll desnecessário

---

## 👥 EQUIPE

- **Proprietária:** Thais
- **Desenvolvimento:** Claude AI (assistente)
- **Manutenção futura:** [Desenvolvedor a ser definido]

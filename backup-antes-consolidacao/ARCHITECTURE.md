# 🏗️ ARCHITECTURE.md - Arquitetura do Sistema

**Atualizado:** Checkpoint #4 - 2025-10-19

---

## 🎯 VISÃO GERAL

Sistema web para o Colégio de Teurgia e Magia com arquitetura híbrida:
- **Frontend:** Next.js 14 + TypeScript + Tailwind (Vercel)
- **Autenticação:** Supabase Auth
- **Banco de Dados:** MySQL (Hostgator)
- **Storage:** Hostgator SFTP
- **Pagamentos:** Mercado Pago

---

## 🏢 ARQUITETURA HÍBRIDA

```
┌─────────────────────────────────────────────────────────┐
│                    USUÁRIOS                              │
│         (Web Browser / Mobile)                           │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  FRONTEND                                │
│            Next.js 14 + TypeScript                       │
│                  Vercel (CDN)                            │
│  /app/                                                   │
│    ├── page.tsx (Home)                                  │
│    ├── afilie-se/                                       │
│    │   └── page.tsx (Formulário 5 passos)              │
│    ├── membros/                                         │
│    ├── dashboard/                                       │
│    └── staff/                                           │
│                                                          │
│  /components/                                            │
│    ├── HeaderHome.tsx                                   │
│    ├── Header.tsx                                       │
│    ├── Footer.tsx                                       │
│    └── forms/                                           │
└──────────┬──────────────────────────────────────────────┘
           │
           ├──────────────────┬─────────────────────┬──────
           │                  │                     │
           ▼                  ▼                     ▼
    ┌──────────┐      ┌──────────────┐      ┌─────────────┐
    │ Supabase │      │    MySQL     │      │   Storage   │
    │   Auth   │      │  Hostgator   │      │  Hostgator  │
    │          │      │              │      │   (SFTP)    │
    │ Apenas:  │      │ TODOS os     │      │ TODOS os    │
    │ profiles │      │ dados do     │      │ arquivos    │
    │          │      │ negócio      │      │             │
    └──────────┘      └──────────────┘      └─────────────┘
```

---

## 📊 BANCO DE DADOS

### **SUPABASE (Apenas Auth)**

**Tabela:** `profiles`
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(50) NOT NULL, -- 'afiliado', 'staff', 'admin'
  status VARCHAR(50) NOT NULL, -- 'pendente', 'ativo', 'inativo'
  created_at TIMESTAMP DEFAULT NOW()
);

-- RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuários veem apenas seu próprio perfil"
  ON profiles FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Staff vê todos os perfis"
  ON profiles FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE id = auth.uid() AND role IN ('staff', 'admin')
    )
  );
```

---

### **MYSQL HOSTGATOR (Dados do Negócio)**

#### **1. Tabela: `magos`**
```sql
CREATE TABLE magos (
  id_mago INT AUTO_INCREMENT PRIMARY KEY,
  supabase_user_id VARCHAR(36) NOT NULL UNIQUE, -- UUID do Supabase
  nome_completo VARCHAR(255) NOT NULL,
  cpf VARCHAR(14) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  tipo_afiliacao ENUM('iniciador', 'iniciado') NOT NULL,
  valor_anualidade DECIMAL(10,2) NOT NULL,
  codigo_offline VARCHAR(50) UNIQUE, -- Ex: CTM-2025-001
  qrcode_path VARCHAR(255), -- Ex: /uploads/qrcodes/123.png
  status VARCHAR(50) NOT NULL DEFAULT 'pendente',
  data_afiliacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  data_aprovacao DATETIME,
  aprovado_por INT, -- id do staff
  observacoes TEXT,
  INDEX idx_cpf (cpf),
  INDEX idx_email (email),
  INDEX idx_status (status)
);
```

#### **2. Tabela: `contatos`**
```sql
CREATE TABLE contatos (
  id_contato INT AUTO_INCREMENT PRIMARY KEY,
  id_mago INT NOT NULL,
  telefone_celular VARCHAR(20) NOT NULL,
  telefone_fixo VARCHAR(20),
  cep VARCHAR(10),
  logradouro VARCHAR(255),
  numero VARCHAR(10),
  complemento VARCHAR(100),
  bairro VARCHAR(100),
  cidade VARCHAR(100),
  estado VARCHAR(2),
  pais VARCHAR(100) DEFAULT 'Brasil',
  FOREIGN KEY (id_mago) REFERENCES magos(id_mago) ON DELETE CASCADE
);
```

#### **3. Tabela: `graus_magia`**
```sql
CREATE TABLE graus_magia (
  id_grau INT AUTO_INCREMENT PRIMARY KEY,
  numero_grau INT NOT NULL UNIQUE,
  nome_grau VARCHAR(255) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE, -- Ex: 'chamas', 'pedras'
  descricao TEXT,
  INDEX idx_slug (slug)
);

-- Inserir os 29 graus
INSERT INTO graus_magia (numero_grau, nome_grau, slug) VALUES
(1, 'Magia Sagrada das Sete Chamas', 'chamas'),
(2, 'Magia Sagrada das Sete Pedras', 'pedras'),
(3, 'Magia Sagrada das Sete Ervas Sagradas', 'ervas'),
(4, 'Magia Sagrada das Sete Raios', 'raios'),
(5, 'Magia Sagrada das Sete Símbolos', 'simbolos'),
(6, 'Magia Sagrada das Sete Espadas', 'espadas'),
(7, 'Magia Sagrada das Sete Eixos', 'eixos'),
(8, 'Magia Sagrada das Sete Energias', 'energias'),
(9, 'Magia Sagrada das Sete Círculos', 'circulos'),
(10, 'Magia Sagrada das Sete Esferas', 'esferas'),
(11, 'Magia Sagrada das Sete Árvores', 'arvores'),
(12, 'Magia Sagrada das Sete Anjos', 'anjos'),
(13, 'Magia Sagrada das Sete Luzes e Cores', 'luzes_cores'),
(14, 'Magia Sagrada das Sete Vórtices', 'vortices'),
(15, 'Magia Sagrada das Sete Portais', 'portais'),
(16, 'Magia Sagrada das Sete Assopros', 'assopros'),
(17, 'Magia Sagrada das Sete Giros', 'giros'),
(18, 'Magia Sagrada das Sete Vestes', 'vestes'),
(19, 'Magia Sagrada das Sete Mantos', 'mantos'),
(20, 'Magia Sagrada das Sete Gênios', 'genios'),
(21, 'Magia Sagrada dos Mentais', 'mentais'),
(22, 'Magia Sagrada das Cruzes', 'cruzes'),
(23, 'Magia Sagrada dos Fatores', 'fatores'),
(24, 'Magia Sagrada dos Dragões', 'dragoes'),
(25, 'Magia Sagrada dos Elementais', 'elementais'),
(26, 'Magia Sagrada das Essências', 'essencias'),
(27, 'Magia Sagrada das Diferenças', 'diferencas'),
(28, 'Magia Sagrada das Conchas', 'conchas'),
(29, 'Magia Sagrada das Águas', 'aguas');
```

#### **4. Tabela: `magos_graus` (N:N)**
```sql
CREATE TABLE magos_graus (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_mago INT NOT NULL,
  id_grau INT NOT NULL,
  data_conclusao DATE NOT NULL,
  FOREIGN KEY (id_mago) REFERENCES magos(id_mago) ON DELETE CASCADE,
  FOREIGN KEY (id_grau) REFERENCES graus_magia(id_grau),
  UNIQUE KEY unique_mago_grau (id_mago, id_grau)
);
```

#### **5. Tabela: `documentos`**
```sql
CREATE TABLE documentos (
  id_documento INT AUTO_INCREMENT PRIMARY KEY,
  id_mago INT NOT NULL,
  tipo_documento ENUM('foto', 'cpf', 'comprovante', 'certificado') NOT NULL,
  nome_arquivo_original VARCHAR(255) NOT NULL,
  nome_arquivo_sistema VARCHAR(255) NOT NULL, -- Ex: 12378756499_chamas_pedras_ervas_e_outros.pdf
  caminho_arquivo VARCHAR(500) NOT NULL, -- Ex: /uploads/documentos/12378756499/
  extensao VARCHAR(10) NOT NULL,
  tamanho_bytes BIGINT NOT NULL,
  tamanho_original_bytes BIGINT, -- antes da compressão
  foi_comprimido BOOLEAN DEFAULT FALSE,
  graus_vinculados JSON, -- Ex: [1, 2, 3, 4, 5] (ids dos graus)
  data_upload DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_mago) REFERENCES magos(id_mago) ON DELETE CASCADE,
  INDEX idx_tipo (tipo_documento),
  INDEX idx_mago (id_mago)
);
```

#### **6. Tabela: `pagamentos`**
```sql
CREATE TABLE pagamentos (
  id_pagamento INT AUTO_INCREMENT PRIMARY KEY,
  id_mago INT NOT NULL,
  mercadopago_payment_id VARCHAR(255) UNIQUE,
  valor DECIMAL(10,2) NOT NULL,
  status ENUM('pendente', 'aprovado', 'rejeitado', 'cancelado') NOT NULL,
  metodo ENUM('credit_card', 'pix', 'boleto') NOT NULL,
  data_pagamento DATETIME,
  data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  metadata JSON, -- dados extras do MP
  FOREIGN KEY (id_mago) REFERENCES magos(id_mago) ON DELETE CASCADE,
  INDEX idx_status (status),
  INDEX idx_mp_id (mercadopago_payment_id)
);
```

#### **7. Tabela: `logs_aprovacao`**
```sql
CREATE TABLE logs_aprovacao (
  id_log INT AUTO_INCREMENT PRIMARY KEY,
  id_mago INT NOT NULL,
  acao ENUM('aprovado', 'rejeitado') NOT NULL,
  staff_id INT NOT NULL, -- quem aprovou/rejeitou
  codigo_offline VARCHAR(50), -- código gerado no sistema offline
  observacoes TEXT,
  data_acao DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_mago) REFERENCES magos(id_mago) ON DELETE CASCADE
);
```

---

## 📁 ESTRUTURA DE PASTAS (Hostgator SFTP)

```
/home/usuario/public_html/
├── uploads/
│   ├── documentos/
│   │   ├── 12378756499/             # Pasta por CPF
│   │   │   ├── 12378756499_foto.jpg
│   │   │   ├── 12378756499_cpf.pdf
│   │   │   ├── 12378756499_comprovante.pdf
│   │   │   ├── 12378756499_chamas_pedras_ervas_e_outros.pdf
│   │   │   └── 12378756499_enxofre_trevas.jpg
│   │   │
│   │   ├── 98765432100/
│   │   │   └── ...
│   │
│   └── qrcodes/
│       ├── 1.png    # QR Code do mago id=1
│       ├── 2.png
│       └── ...
```

---

## 🔐 SEGURANÇA

### **Autenticação**
- Supabase Auth (JWT tokens)
- Refresh tokens automáticos
- Email verification obrigatória

### **Autorização (RLS)**
```typescript
// Middleware Next.js
export async function middleware(request: NextRequest) {
  const supabase = createMiddlewareClient({ req: request });
  const { data: { session } } = await supabase.auth.getSession();
  
  // Rotas protegidas
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!session) {
      return NextResponse.redirect('/login');
    }
  }
  
  // Rotas de staff
  if (request.nextUrl.pathname.startsWith('/staff')) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', session.user.id)
      .single();
    
    if (profile?.role !== 'staff' && profile?.role !== 'admin') {
      return NextResponse.redirect('/dashboard');
    }
  }
  
  return NextResponse.next();
}
```

### **Upload Seguro**
```typescript
// API Route: /api/upload
export async function POST(request: Request) {
  // 1. Verificar autenticação
  const session = await getSession(request);
  if (!session) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // 2. Validar tipo de arquivo
  const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
  if (!allowedTypes.includes(file.type)) {
    return Response.json({ error: 'Tipo de arquivo não permitido' }, { status: 400 });
  }
  
  // 3. Validar tamanho (antes da compressão)
  const MAX_SIZE = 50 * 1024 * 1024; // 50 MB
  if (file.size > MAX_SIZE) {
    return Response.json({ error: 'Arquivo muito grande' }, { status: 400 });
  }
  
  // 4. Comprimir automaticamente
  const compressedFile = await compressFile(file);
  
  // 5. Upload via SFTP
  await uploadToHostgator(compressedFile, path);
  
  // 6. Salvar metadados no MySQL
  await saveDocumentMetadata({
    id_mago,
    tipo_documento,
    nome_arquivo_sistema,
    tamanho_bytes,
    foi_comprimido: true,
    graus_vinculados: grausIds
  });
  
  return Response.json({ success: true, filename });
}
```

---

## 📄 PÁGINAS DO SITE

### **1. Home (`/`)**
- **Componentes:** `HeaderHome`, `Footer`
- **Conteúdo:** Apresentação do colégio, missão, história
- **CTA:** Botão "Afilie-se"

### **2. Afilie-se (`/afilie-se`)**
- **Componentes:** `Header`, `FormularioAfiliacao`, `Footer`
- **Fluxo:** 5 passos (ver CHECKPOINT-SUMMARY.md)
- **Integrações:** Mercado Pago, ViaCEP, Hostgator SFTP

### **3. Membros (`/membros`)**
- **Acesso:** Público
- **Listagem:** Todos os magos aprovados (filtros por grau, nome)
- **Cards:** Nome, foto, graus, código CTM

### **4. Dashboard Afiliado (`/dashboard`)**
- **Acesso:** Apenas afiliados autenticados
- **Funcionalidades:**
  - Ver dados pessoais
  - Baixar carteira digital (QR Code)
  - Ver graus cadastrados
  - Atualizar dados de contato

### **5. Dashboard Staff (`/staff`)**
- **Acesso:** Apenas staff/admin
- **Funcionalidades:**
  - Listar afiliações pendentes
  - Visualizar documentos (preview inline)
  - Baixar arquivos individuais
  - Baixar ZIP completo
  - Aprovar/Rejeitar afiliação
  - Inserir código do sistema offline
  - Sistema gera QR Code automaticamente

---

## 🔄 FLUXO DE DADOS - AFILIAÇÃO

```
┌──────────┐
│ USUÁRIO  │
└────┬─────┘
     │
     ├─ Passo 1: Dados Pessoais
     │  → Frontend valida
     │  → Salva em state local
     │
     ├─ Passo 2: Graus de Magia
     │  → Frontend valida datas
     │  → Salva em state local
     │
     ├─ Passo 3: Upload Documentos
     │  → Frontend: comprime preview
     │  → POST /api/upload
     │  │  ├─ Backend: valida tipo/tamanho
     │  │  ├─ Backend: comprime (sharp/pdf-lib)
     │  │  ├─ Backend: upload SFTP Hostgator
     │  │  └─ Backend: salva metadados MySQL
     │  → Validação de cobertura (todos graus têm certificado)
     │
     ├─ Passo 4: Pagamento
     │  → POST /api/pagamento/criar
     │  │  └─ Cria preferência Mercado Pago
     │  → Usuário paga
     │  → Webhook MP: POST /api/pagamento/webhook
     │     ├─ Valida pagamento
     │     ├─ Cria usuário Supabase Auth
     │     ├─ Salva dados MySQL (magos, contatos, magos_graus, documentos)
     │     └─ Envia email confirmação
     │
     └─ Passo 5: Confirmação
        → Exibe mensagem de sucesso
        → Email com próximos passos

┌──────────┐
│  STAFF   │
└────┬─────┘
     │
     ├─ Acessa /staff
     │  → GET /api/staff/afiliados-pendentes
     │  → Lista todos com status='pendente'
     │
     ├─ Clica em "Ver Documentos"
     │  → GET /api/staff/documentos?id_mago=X
     │  │  └─ Retorna lista de arquivos + URLs
     │  → Preview inline (PDF.js, <img>)
     │
     ├─ Clica em "Baixar ZIP"
     │  → GET /api/staff/documentos/zip?id_mago=X
     │  │  ├─ Backend: busca todos arquivos do mago
     │  │  ├─ Backend: cria ZIP em memória (archiver)
     │  │  └─ Backend: retorna blob
     │  → Download automático
     │
     └─ Clica em "Aprovar"
        → POST /api/staff/aprovar
           ├─ Insere código offline (CTM-2025-001)
           ├─ Gera QR Code (qrcode lib)
           │  └─ Salva em /uploads/qrcodes/{id_mago}.png
           ├─ Atualiza status='ativo' (MySQL)
           ├─ Atualiza status='ativo' (Supabase profiles)
           ├─ Salva log (logs_aprovacao)
           └─ Envia email de boas-vindas
```

---

## 🛠️ TECNOLOGIAS

### **Frontend**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React Hook Form + Zod (validação)
- Supabase Client (autenticação)
- Axios (HTTP requests)

### **Backend (API Routes)**
- Next.js API Routes
- `mysql2` (conexão MySQL)
- `@supabase/supabase-js` (autenticação)
- `sharp` (compressão de imagens)
- `pdf-lib` (compressão de PDFs)
- `formidable` (parse de uploads)
- `ssh2-sftp-client` (upload SFTP)
- `mercadopago` (SDK)
- `qrcode` (geração de QR Codes)
- `archiver` (criação de ZIPs)
- `nodemailer` (envio de emails)

### **Hospedagem**
- Vercel (Frontend + API Routes) - **Gratuito**
- Hostgator (MySQL + Storage SFTP) - **Plano pago**

---

## 🔧 VARIÁVEIS DE AMBIENTE

```env
# Supabase (apenas Auth)
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx

# MySQL Hostgator
MYSQL_HOST=servidor.hostgator.com
MYSQL_PORT=3306
MYSQL_DATABASE=nome_do_banco
MYSQL_USER=usuario
MYSQL_PASSWORD=senha

# SFTP Hostgator
SFTP_HOST=ftp.dominio.com.br
SFTP_PORT=22
SFTP_USER=usuario
SFTP_PASSWORD=senha
SFTP_UPLOADS_PATH=/home/usuario/public_html/uploads

# Mercado Pago
MP_ACCESS_TOKEN=xxx
MP_PUBLIC_KEY=xxx

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=email@gmail.com
SMTP_PASSWORD=senha
EMAIL_FROM=contato@colegiodeteurgia.com.br

# URLs
NEXT_PUBLIC_SITE_URL=https://colegiodeteurgia.com.br
```

---

## 📋 CHECKLIST DE IMPLEMENTAÇÃO

### **Fase 1: Setup Inicial**
- [ ] Criar projeto Next.js 14
- [ ] Instalar dependências (ver package.json)
- [ ] Configurar Tailwind CSS
- [ ] Configurar TypeScript
- [ ] Criar estrutura de pastas

### **Fase 2: Autenticação**
- [ ] Criar projeto Supabase
- [ ] Configurar Supabase Auth
- [ ] Criar tabela `profiles`
- [ ] Implementar middleware de autenticação
- [ ] Criar páginas de login/registro

### **Fase 3: Banco de Dados MySQL**
- [ ] Criar banco no Hostgator
- [ ] Executar scripts SQL (7 tabelas)
- [ ] Inserir os 29 graus de magia
- [ ] Testar conexão
- [ ] Criar API helpers para queries

### **Fase 4: Página /afilie-se**
- [ ] Criar componente FormularioAfiliacao
- [ ] Implementar Passo 1 (dados pessoais)
- [ ] Implementar Passo 2 (graus de magia)
- [ ] Implementar Passo 3 (upload de documentos)
- [ ] Integrar compressão automática
- [ ] Implementar upload SFTP
- [ ] Implementar Passo 4 (pagamento MP)
- [ ] Implementar Passo 5 (confirmação)

### **Fase 5: Dashboard Staff**
- [ ] Criar rota /staff
- [ ] Listar afiliações pendentes
- [ ] Visualizar documentos (preview inline)
- [ ] Implementar download individual
- [ ] Implementar download ZIP
- [ ] Implementar aprovação
- [ ] Implementar geração de QR Code
- [ ] Enviar email de boas-vindas

### **Fase 6: Demais Páginas**
- [ ] Home (/)
- [ ] Membros (/membros)
- [ ] Dashboard Afiliado (/dashboard)
- [ ] Outras páginas

### **Fase 7: Testes e Deploy**
- [ ] Testes de upload
- [ ] Testes de compressão
- [ ] Testes de pagamento (sandbox MP)
- [ ] Testes de aprovação
- [ ] Deploy Vercel
- [ ] Configurar DNS

---

## 🎯 MÉTRICAS DE SUCESSO

- ✅ Upload de 50 MB comprimido para ~10 MB (80% redução)
- ✅ Tempo de upload < 30 segundos (arquivos de 20 MB)
- ✅ Taxa de conversão de pagamento > 90%
- ✅ Tempo de aprovação pelo staff < 5 minutos
- ✅ Zero erros de upload

---

**Última atualização:** Checkpoint #4 - 2025-10-19  
**Próxima revisão:** Após implementação da página /afilie-se

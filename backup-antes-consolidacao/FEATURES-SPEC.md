# 📋 FEATURES-SPEC.md - Especificações de Funcionalidades

**Atualizado:** Checkpoint #4 - 2025-10-19

---

## 🎯 VISÃO GERAL

Especificações técnicas detalhadas de todas as funcionalidades do site do Colégio de Teurgia e Magia, com foco especial na página /afilie-se e sistema de upload de documentos.

---

## 🔐 SISTEMA DE AUTENTICAÇÃO

### **Supabase Auth**

**Funcionalidades:**
- ✅ Registro com email + senha
- ✅ Login com email + senha
- ✅ Verificação de email obrigatória
- ✅ Recuperação de senha
- ✅ Atualização de senha
- ✅ Logout

**Roles:**
- `afiliado` - Magos afiliados
- `staff` - Equipe administrativa
- `admin` - Administradores do sistema

**Status:**
- `pendente` - Aguardando aprovação do staff
- `ativo` - Aprovado e ativo
- `inativo` - Desativado

**Tabela Supabase:**
```sql
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  email VARCHAR(255) NOT NULL UNIQUE,
  role VARCHAR(50) NOT NULL DEFAULT 'afiliado',
  status VARCHAR(50) NOT NULL DEFAULT 'pendente',
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## 📝 PÁGINA /AFILIE-SE

### **ESTRUTURA GERAL**

**5 Passos:**
1. Seleção do tipo de afiliação
2. Dados pessoais, contato e endereço
3. Graus de magia
4. Upload de documentos
5. Pagamento e confirmação

---

### **PASSO 0: SELEÇÃO DO TIPO**

**Opções:**
- **Mago Iniciador (Professor):** R$ 250,00/ano
- **Mago Iniciado (Praticante):** R$ 200,00/ano

**Interface:**
```tsx
<div className="flex gap-4">
  <Card 
    title="Mago Iniciador"
    subtitle="Professor"
    price="R$ 250,00/ano"
    selected={tipo === 'iniciador'}
    onClick={() => setTipo('iniciador')}
  />
  <Card 
    title="Mago Iniciado"
    subtitle="Praticante"
    price="R$ 200,00/ano"
    selected={tipo === 'iniciado'}
    onClick={() => setTipo('iniciado')}
  />
</div>
```

**Mensagem após seleção:**
```
📄 Tenha em mãos os seguintes documentos:
- Foto pessoal (JPG/PNG)
- CPF (PDF ou foto)
- Comprovante de endereço (PDF)
- Certificados dos graus de magia que possui (PDF ou foto)
  (pode ser 1 arquivo com todos ou arquivos separados)
```

---

### **PASSO 1: DADOS PESSOAIS**

**Campos obrigatórios:**
- Nome completo (min: 3, max: 255)
- CPF (validação com dígito verificador)
- Email (validação RFC 5322)
- Telefone celular (formato brasileiro)
- CEP (validação + busca automática)
- Logradouro
- Número
- Bairro
- Cidade
- Estado (UF)
- País

**Campos opcionais:**
- Telefone fixo
- Complemento

**Validações:**

```typescript
const dadosPessoaisSchema = z.object({
  nome_completo: z.string()
    .min(3, 'Nome deve ter pelo menos 3 caracteres')
    .max(255, 'Nome muito longo'),
  
  cpf: z.string()
    .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
    .refine(validarCPF, 'CPF inválido'),
  
  email: z.string()
    .email('Email inválido')
    .toLowerCase(),
  
  telefone_celular: z.string()
    .regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone inválido'),
  
  cep: z.string()
    .regex(/^\d{5}-\d{3}$/, 'CEP inválido'),
  
  // ... demais campos
});
```

**Busca CEP (ViaCEP):**
```typescript
async function buscarCEP(cep: string) {
  const cepLimpo = cep.replace(/\D/g, '');
  const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
  const data = await response.json();
  
  if (!data.erro) {
    return {
      logradouro: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf
    };
  }
  
  throw new Error('CEP não encontrado');
}
```

**UX:**
- Validação em tempo real (onBlur)
- Feedback visual não agressivo
- Mensagens de erro claras
- CEP automático preenche campos
- Máscaras de entrada (CPF, telefone, CEP)

---

### **PASSO 2: GRAUS DE MAGIA**

**Interface:**

```tsx
<div className="graus-container">
  <div className="header">
    <button onClick={selecionarTodos}>Selecionar todos</button>
    <button onClick={desmarcarTodos}>Desmarcar todos</button>
    <span className="contador">{selecionados.length} de 29</span>
  </div>
  
  <div className="graus-lista">
    {graus.map(grau => (
      <div key={grau.id} className="grau-item">
        <label>
          <input 
            type="checkbox"
            checked={selecionados.includes(grau.id)}
            onChange={() => toggleGrau(grau.id)}
          />
          <span>{grau.numero}. {grau.nome}</span>
        </label>
        
        {selecionados.includes(grau.id) && (
          <input
            type="date"
            placeholder="Data de conclusão"
            value={datasConclusao[grau.id] || ''}
            onChange={(e) => setDataConclusao(grau.id, e.target.value)}
            required
          />
        )}
      </div>
    ))}
  </div>
</div>
```

**29 Graus de Magia:**

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

**Comportamento:**
- Checkbox marca/desmarca grau
- Data de conclusão aparece **apenas** quando grau está marcado
- Data de conclusão é **obrigatória** para graus selecionados
- Botões "Selecionar todos" / "Desmarcar todos"
- Contador visual de graus selecionados
- Não permite avançar se grau selecionado sem data

**Validação:**
```typescript
const grausSchema = z.object({
  graus_selecionados: z.array(z.number()).min(0, 'Selecione pelo menos 0 graus'),
  datas_conclusao: z.record(
    z.string(), // id do grau
    z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Data inválida')
  ).refine(
    (datas) => {
      // Verificar se todos os graus selecionados têm data
      return grausSelecionados.every(id => datas[id]);
    },
    'Todos os graus selecionados devem ter data de conclusão'
  )
});
```

---

### **PASSO 3: UPLOAD DE DOCUMENTOS**

**Documentos obrigatórios:**
1. Foto pessoal (JPG/PNG)
2. CPF (PDF/JPG/PNG)
3. Comprovante de endereço (PDF/JPG/PNG)
4. Certificados dos graus (PDF/JPG/PNG)

**Formatos aceitos:**
- Imagens: `.jpg`, `.jpeg`, `.png`
- Documentos: `.pdf`

**Validação MIME Types:**
```typescript
const allowedTypes = [
  'image/jpeg',
  'image/png',
  'application/pdf'
];
```

**Tamanho máximo:**
- Antes da compressão: **50 MB** (hard limit)
- Após compressão: ~10 MB (automático)

---

#### **NOMENCLATURA DE ARQUIVOS**

**Formato:** `{CPF}_{identificador}.{extensão}`

**Tipos de documentos:**
- Foto: `{CPF}_foto.{ext}`
- CPF: `{CPF}_cpf.{ext}`
- Comprovante: `{CPF}_comprovante.{ext}`
- Certificados: `{CPF}_{grau1}_{grau2}_{grau3}_e_outros.{ext}`

**Exemplos:**
```
12378756499_foto.jpg
12378756499_cpf.pdf
12378756499_comprovante.pdf
12378756499_chamas_pedras_ervas_e_outros.pdf
12378756499_raios_simbolos.jpg
```

**Regras de nomenclatura de certificados:**
- Se 1 grau: `{CPF}_{grau}.{ext}`
- Se 2 graus: `{CPF}_{grau1}_{grau2}.{ext}`
- Se 3 graus: `{CPF}_{grau1}_{grau2}_{grau3}.{ext}`
- Se 4+ graus: `{CPF}_{grau1}_{grau2}_{grau3}_e_outros.{ext}`

**Slugs dos graus:**
```typescript
const grausSlugs = {
  1: 'chamas',
  2: 'pedras',
  3: 'ervas',
  4: 'enxofre',
  5: 'trevas',
  6: 'ritos',
  // ... até 29
};
```

---

#### **INTERFACE DE UPLOAD**

**Upload individual (foto, CPF, comprovante):**
```tsx
<div className="upload-single">
  <label>
    📸 Foto Pessoal
    <input
      type="file"
      accept="image/jpeg,image/png"
      onChange={handleUploadFoto}
    />
  </label>
  
  {arquivos.foto && (
    <div className="arquivo-enviado">
      <img src={preview} alt="Foto" />
      <span>{arquivos.foto.name}</span>
      <span>{formatBytes(arquivos.foto.size)}</span>
      <button onClick={() => removerArquivo('foto')}>✕</button>
    </div>
  )}
</div>
```

**Upload múltiplo (certificados):**
```tsx
<div className="upload-certificados">
  <p>📜 Certificados dos Graus</p>
  <p className="helper">
    Você pode enviar 1 arquivo com todos os certificados 
    OU arquivos separados por grau
  </p>
  
  <input
    type="file"
    accept="application/pdf,image/jpeg,image/png"
    multiple
    onChange={handleUploadCertificados}
  />
  
  {certificados.map(arquivo => (
    <div key={arquivo.id} className="certificado-item">
      <div className="arquivo-info">
        <span className="icon">📄</span>
        <span className="nome">{arquivo.name}</span>
        <span className="tamanho">{formatBytes(arquivo.size)}</span>
        <button onClick={() => removerCertificado(arquivo.id)}>✕</button>
      </div>
      
      <div className="graus-vinculados">
        <p>Marque os graus contidos neste arquivo:</p>
        <div className="checkboxes">
          {grausSelecionados.map(grau => (
            <label key={grau.id}>
              <input
                type="checkbox"
                checked={arquivo.graus.includes(grau.id)}
                onChange={() => toggleGrauArquivo(arquivo.id, grau.id)}
              />
              {grau.nome}
            </label>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
```

---

#### **VALIDAÇÃO DE COBERTURA**

**Lógica:**
```typescript
function validarCobertura(grausSelecionados: number[], certificados: Certificado[]) {
  const grausComCertificado = new Set<number>();
  
  certificados.forEach(cert => {
    cert.graus.forEach(grau => grausComCertificado.add(grau));
  });
  
  const grausPendentes = grausSelecionados.filter(
    grau => !grausComCertificado.has(grau)
  );
  
  return {
    completo: grausPendentes.length === 0,
    grausPendentes,
    grausCobertos: Array.from(grausComCertificado)
  };
}
```

**Feedback visual:**
```tsx
<div className="status-cobertura">
  <h4>Status dos Certificados:</h4>
  
  {grausSelecionados.map(grau => {
    const coberto = grausComCertificado.has(grau.id);
    
    return (
      <div key={grau.id} className={coberto ? 'coberto' : 'pendente'}>
        <span className="icon">{coberto ? '✓' : '⚠️'}</span>
        <span className="nome">{grau.nome}</span>
        <span className="status">
          {coberto ? 'Certificado enviado' : 'Sem certificado'}
        </span>
      </div>
    );
  })}
  
  {validacao.completo ? (
    <p className="sucesso">✓ Todos os graus têm certificado</p>
  ) : (
    <p className="erro">
      ⚠️ {validacao.grausPendentes.length} grau(s) sem certificado
    </p>
  )}
</div>
```

**Regra:**
- Só permite avançar para o pagamento se **todos** os graus selecionados tiverem pelo menos 1 certificado vinculado

---

#### **COMPRESSÃO AUTOMÁTICA**

**Backend (API Route):**
```typescript
// /api/upload/comprimir

import sharp from 'sharp';
import { PDFDocument } from 'pdf-lib';

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get('file') as File;
  const buffer = Buffer.from(await file.arrayBuffer());
  
  let compressedBuffer: Buffer;
  let foiComprimido = false;
  
  // Imagens
  if (file.type.startsWith('image/')) {
    if (file.size > 5 * 1024 * 1024) { // > 5 MB
      compressedBuffer = await sharp(buffer)
        .resize(1920, undefined, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .jpeg({ quality: 85 })
        .toBuffer();
      
      foiComprimido = true;
    } else {
      compressedBuffer = buffer;
    }
  }
  
  // PDFs
  else if (file.type === 'application/pdf') {
    if (file.size > 5 * 1024 * 1024) { // > 5 MB
      const pdfDoc = await PDFDocument.load(buffer);
      const compressedBytes = await pdfDoc.save({
        useObjectStreams: false,
        addDefaultPage: false,
        objectsPerTick: 50
      });
      
      compressedBuffer = Buffer.from(compressedBytes);
      foiComprimido = true;
    } else {
      compressedBuffer = buffer;
    }
  }
  
  return Response.json({
    tamanhoOriginal: file.size,
    tamanhoFinal: compressedBuffer.length,
    foiComprimido,
    reducao: ((file.size - compressedBuffer.length) / file.size * 100).toFixed(1) + '%'
  });
}
```

**Bibliotecas:**
- `sharp` - Compressão de imagens (gratuita)
- `pdf-lib` - Manipulação de PDFs (gratuita)

**Vantagens:**
- ✅ Redução de 50-80% no tamanho
- ✅ Transparente para o usuário
- ✅ Sem limite rígido de tamanho
- ✅ Sem custo adicional

---

#### **UPLOAD PARA HOSTGATOR**

**SFTP Upload:**
```typescript
// /api/upload/sftp

import Client from 'ssh2-sftp-client';

const sftp = new Client();

await sftp.connect({
  host: process.env.SFTP_HOST,
  port: parseInt(process.env.SFTP_PORT || '22'),
  username: process.env.SFTP_USER,
  password: process.env.SFTP_PASSWORD
});

const cpf = dadosPessoais.cpf.replace(/\D/g, '');
const remotePath = `/home/usuario/public_html/uploads/documentos/${cpf}/${nomeArquivo}`;

// Criar pasta se não existir
await sftp.mkdir(`/home/usuario/public_html/uploads/documentos/${cpf}`, true);

// Upload do arquivo
await sftp.put(compressedBuffer, remotePath);

await sftp.end();
```

---

#### **TABELA DOCUMENTOS (MySQL)**

```sql
CREATE TABLE documentos (
  id_documento INT AUTO_INCREMENT PRIMARY KEY,
  id_mago INT NOT NULL,
  tipo_documento ENUM('foto', 'cpf', 'comprovante', 'certificado') NOT NULL,
  nome_arquivo_original VARCHAR(255) NOT NULL,
  nome_arquivo_sistema VARCHAR(255) NOT NULL,
  caminho_arquivo VARCHAR(500) NOT NULL,
  extensao VARCHAR(10) NOT NULL,
  tamanho_bytes BIGINT NOT NULL,
  tamanho_original_bytes BIGINT,
  foi_comprimido BOOLEAN DEFAULT FALSE,
  graus_vinculados JSON, -- Ex: [1, 2, 3, 4, 5]
  data_upload DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_mago) REFERENCES magos(id_mago) ON DELETE CASCADE
);
```

**Exemplo de registro:**
```json
{
  "id_documento": 1,
  "id_mago": 42,
  "tipo_documento": "certificado",
  "nome_arquivo_original": "certificados_2024.pdf",
  "nome_arquivo_sistema": "12378756499_chamas_pedras_ervas_e_outros.pdf",
  "caminho_arquivo": "/uploads/documentos/12378756499/",
  "extensao": "pdf",
  "tamanho_bytes": 2485760,
  "tamanho_original_bytes": 8934528,
  "foi_comprimido": true,
  "graus_vinculados": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  "data_upload": "2025-10-19 14:30:00"
}
```

---

### **PASSO 4: PAGAMENTO (MERCADO PAGO)**

**Integração Mercado Pago SDK:**

```typescript
// /api/pagamento/criar

import { MercadoPagoConfig, Payment } from 'mercadopago';

const client = new MercadoPagoConfig({ 
  accessToken: process.env.MP_ACCESS_TOKEN 
});

const payment = new Payment(client);

const body = {
  transaction_amount: valor, // 250.00 ou 200.00
  description: `Afiliação - ${tipo} - ${nomeCompleto}`,
  payment_method_id: metodo, // 'pix' ou 'credit_card'
  payer: {
    email: email,
    identification: {
      type: 'CPF',
      number: cpf
    }
  },
  metadata: {
    id_mago_temp: tempId,
    tipo_afiliacao: tipo
  }
};

const response = await payment.create({ body });

return Response.json({
  preferenceId: response.id,
  qrCode: response.point_of_interaction?.transaction_data?.qr_code,
  qrCodeBase64: response.point_of_interaction?.transaction_data?.qr_code_base64
});
```

**Webhook:**
```typescript
// /api/pagamento/webhook

export async function POST(request: Request) {
  const body = await request.json();
  
  if (body.type === 'payment') {
    const paymentId = body.data.id;
    
    // Consultar pagamento
    const payment = await payment.get({ id: paymentId });
    
    if (payment.status === 'approved') {
      const metadata = payment.metadata;
      
      // 1. Criar usuário Supabase Auth
      const { data: authUser } = await supabase.auth.admin.createUser({
        email: payment.payer.email,
        password: generateRandomPassword(),
        email_confirm: true
      });
      
      // 2. Criar profile no Supabase
      await supabase.from('profiles').insert({
        id: authUser.user.id,
        email: payment.payer.email,
        role: 'afiliado',
        status: 'pendente'
      });
      
      // 3. Salvar dados no MySQL
      await mysql.query(`
        INSERT INTO magos (supabase_user_id, nome_completo, cpf, email, tipo_afiliacao, valor_anualidade, status)
        VALUES (?, ?, ?, ?, ?, ?, 'pendente')
      `, [authUser.user.id, metadata.nome, metadata.cpf, payment.payer.email, metadata.tipo, payment.transaction_amount]);
      
      // 4. Salvar pagamento
      await mysql.query(`
        INSERT INTO pagamentos (id_mago, mercadopago_payment_id, valor, status, metodo, data_pagamento)
        VALUES (?, ?, ?, 'aprovado', ?, NOW())
      `, [magoId, paymentId, payment.transaction_amount, payment.payment_method_id]);
      
      // 5. Enviar email de confirmação
      await enviarEmailConfirmacao(payment.payer.email, metadata.nome);
    }
  }
  
  return Response.json({ received: true });
}
```

---

### **PASSO 5: CONFIRMAÇÃO**

**Tela de sucesso:**
```tsx
<div className="confirmacao">
  <div className="icone-sucesso">✓</div>
  <h1>Afiliação solicitada com sucesso!</h1>
  
  <p>Seu pagamento foi confirmado e seus documentos foram recebidos.</p>
  
  <div className="proximos-passos">
    <h3>📧 Em breve você receberá um email com:</h3>
    <ul>
      <li>Link para acessar seu perfil</li>
      <li>Próximos passos</li>
      <li>Informações sobre aprovação</li>
    </ul>
  </div>
  
  <div className="prazo">
    <p>⏳ Prazo de aprovação: até 5 dias úteis</p>
  </div>
  
  <div className="beneficios">
    <h3>Assim que sua afiliação for aprovada pelo Colégio, você poderá:</h3>
    <ul>
      <li>Acessar sua área de membro</li>
      <li>Fazer download da sua carteira digital com QR Code</li>
      <li>Ver seu perfil em /membros</li>
    </ul>
  </div>
  
  <p className="agradecimento">
    Obrigado por se afiliar ao Colégio de Teurgia e Magia!
  </p>
  
  <button onClick={() => router.push('/')}>Voltar para Home</button>
</div>
```

---

## 🛡️ DASHBOARD STAFF

### **Listagem de Afiliações Pendentes**

**API Route:**
```typescript
// /api/staff/afiliados-pendentes

export async function GET(request: Request) {
  const session = await getSession(request);
  
  // Verificar se é staff/admin
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', session.user.id)
    .single();
  
  if (profile?.role !== 'staff' && profile?.role !== 'admin') {
    return Response.json({ error: 'Unauthorized' }, { status: 403 });
  }
  
  // Buscar afiliações pendentes
  const [rows] = await mysql.query(`
    SELECT 
      m.id_mago,
      m.nome_completo,
      m.cpf,
      m.email,
      m.tipo_afiliacao,
      m.valor_anualidade,
      m.data_afiliacao,
      COUNT(DISTINCT mg.id_grau) as total_graus
    FROM magos m
    LEFT JOIN magos_graus mg ON m.id_mago = mg.id_mago
    WHERE m.status = 'pendente'
    GROUP BY m.id_mago
    ORDER BY m.data_afiliacao DESC
  `);
  
  return Response.json({ afiliados: rows });
}
```

**Interface:**
```tsx
<div className="dashboard-staff">
  <h1>Afiliações Pendentes</h1>
  
  {afiliados.map(afiliado => (
    <div key={afiliado.id_mago} className="afiliado-card">
      <div className="info">
        <h3>{afiliado.nome_completo}</h3>
        <p>CPF: {formatarCPF(afiliado.cpf)}</p>
        <p>Email: {afiliado.email}</p>
        <p>Tipo: {afiliado.tipo_afiliacao === 'iniciador' ? 'Mago Iniciador' : 'Mago Iniciado'}</p>
        <p>Valor: R$ {afiliado.valor_anualidade.toFixed(2)}</p>
        <p>Data: {formatarData(afiliado.data_afiliacao)}</p>
        <p>Graus: {afiliado.total_graus} certificados</p>
      </div>
      
      <div className="acoes">
        <button onClick={() => verDocumentos(afiliado.id_mago)}>
          Ver Documentos
        </button>
        <button onClick={() => aprovar(afiliado.id_mago)} className="btn-success">
          ✓ Aprovar
        </button>
        <button onClick={() => rejeitar(afiliado.id_mago)} className="btn-danger">
          ✕ Rejeitar
        </button>
      </div>
    </div>
  ))}
</div>
```

---

### **Visualização de Documentos**

**API Route:**
```typescript
// /api/staff/documentos

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id_mago = searchParams.get('id_mago');
  
  // Buscar documentos
  const [rows] = await mysql.query(`
    SELECT * FROM documentos
    WHERE id_mago = ?
    ORDER BY tipo_documento, id_documento
  `, [id_mago]);
  
  // Gerar URLs assinadas (se necessário)
  const documentosComURL = rows.map(doc => ({
    ...doc,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/uploads/documentos/${doc.caminho_arquivo}${doc.nome_arquivo_sistema}`
  }));
  
  return Response.json({ documentos: documentosComURL });
}
```

**Interface com Preview:**
```tsx
<div className="documentos-viewer">
  <h2>Documentos de {mago.nome_completo}</h2>
  
  {/* Foto */}
  <div className="documento-section">
    <h3>📸 Foto Pessoal</h3>
    <img src={documentos.foto.url} alt="Foto" className="preview-foto" />
    <button onClick={() => baixarArquivo(documentos.foto.url)}>
      ⬇ Baixar
    </button>
  </div>
  
  {/* CPF */}
  <div className="documento-section">
    <h3>🆔 CPF</h3>
    {documentos.cpf.extensao === 'pdf' ? (
      <iframe src={documentos.cpf.url} className="preview-pdf" />
    ) : (
      <img src={documentos.cpf.url} alt="CPF" className="preview-img" />
    )}
    <button onClick={() => baixarArquivo(documentos.cpf.url)}>
      ⬇ Baixar
    </button>
  </div>
  
  {/* Comprovante */}
  <div className="documento-section">
    <h3>🏠 Comprovante de Endereço</h3>
    {documentos.comprovante.extensao === 'pdf' ? (
      <iframe src={documentos.comprovante.url} className="preview-pdf" />
    ) : (
      <img src={documentos.comprovante.url} alt="Comprovante" className="preview-img" />
    )}
    <button onClick={() => baixarArquivo(documentos.comprovante.url)}>
      ⬇ Baixar
    </button>
  </div>
  
  {/* Certificados */}
  <div className="documento-section">
    <h3>📜 Certificados ({certificados.length} arquivo{certificados.length > 1 ? 's' : ''})</h3>
    
    {certificados.map(cert => (
      <div key={cert.id_documento} className="certificado-item">
        <div className="arquivo-info">
          <span className="icon">📄</span>
          <span className="nome">{cert.nome_arquivo_sistema}</span>
          <span className="tamanho">{formatBytes(cert.tamanho_bytes)}</span>
        </div>
        
        <div className="graus-vinculados">
          <p>Graus contidos neste arquivo:</p>
          <ul>
            {JSON.parse(cert.graus_vinculados).map(grauId => (
              <li key={grauId}>{graus.find(g => g.id === grauId)?.nome}</li>
            ))}
          </ul>
        </div>
        
        <div className="preview">
          {cert.extensao === 'pdf' ? (
            <iframe src={cert.url} className="preview-pdf" />
          ) : (
            <img src={cert.url} alt="Certificado" className="preview-img" />
          )}
        </div>
        
        <button onClick={() => baixarArquivo(cert.url)}>
          ⬇ Baixar
        </button>
      </div>
    ))}
  </div>
  
  {/* Baixar todos (ZIP) */}
  <button 
    onClick={() => baixarTodosZIP(id_mago)}
    className="btn-primary btn-large"
  >
    📦 Baixar TODOS os documentos (ZIP)
  </button>
  
  {/* Lista de graus declarados */}
  <div className="graus-declarados">
    <h3>✅ Graus Declarados ({graus.length})</h3>
    <ul>
      {graus.map(grau => (
        <li key={grau.id}>
          {grau.numero}. {grau.nome} - {formatarData(grau.data_conclusao)}
        </li>
      ))}
    </ul>
  </div>
</div>
```

---

### **Download ZIP**

**API Route:**
```typescript
// /api/staff/documentos/zip

import archiver from 'archiver';
import { PassThrough } from 'stream';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id_mago = searchParams.get('id_mago');
  
  // Buscar documentos
  const [documentos] = await mysql.query(`
    SELECT * FROM documentos WHERE id_mago = ?
  `, [id_mago]);
  
  // Buscar dados do mago
  const [magos] = await mysql.query(`
    SELECT nome_completo, cpf FROM magos WHERE id_mago = ?
  `, [id_mago]);
  
  const mago = magos[0];
  
  // Criar stream
  const passThrough = new PassThrough();
  const archive = archiver('zip', { zlib: { level: 9 } });
  
  archive.pipe(passThrough);
  
  // Adicionar cada arquivo ao ZIP
  for (const doc of documentos) {
    const caminhoCompleto = `${process.env.SFTP_UPLOADS_PATH}${doc.caminho_arquivo}${doc.nome_arquivo_sistema}`;
    
    // Baixar arquivo do SFTP
    const buffer = await sftp.get(caminhoCompleto);
    
    // Adicionar ao ZIP
    archive.append(buffer, { name: doc.nome_arquivo_sistema });
  }
  
  await archive.finalize();
  
  // Retornar como stream
  return new Response(passThrough as any, {
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="documentos_${mago.nome_completo.replace(/\s/g, '_')}_${mago.cpf}.zip"`
    }
  });
}
```

---

### **Aprovação de Afiliação**

**API Route:**
```typescript
// /api/staff/aprovar

import QRCode from 'qrcode';

export async function POST(request: Request) {
  const { id_mago, codigo_offline, observacoes } = await request.json();
  const session = await getSession(request);
  
  // 1. Buscar dados do mago
  const [magos] = await mysql.query(`
    SELECT * FROM magos WHERE id_mago = ?
  `, [id_mago]);
  
  const mago = magos[0];
  
  // 2. Gerar QR Code
  const qrcodeData = JSON.stringify({
    id: mago.id_mago,
    codigo: codigo_offline,
    nome: mago.nome_completo,
    cpf: mago.cpf,
    tipo: mago.tipo_afiliacao
  });
  
  const qrcodeBuffer = await QRCode.toBuffer(qrcodeData, {
    width: 500,
    margin: 2
  });
  
  // 3. Salvar QR Code no servidor
  const qrcodePath = `/uploads/qrcodes/${id_mago}.png`;
  await sftp.put(qrcodeBuffer, `${process.env.SFTP_UPLOADS_PATH}${qrcodePath}`);
  
  // 4. Atualizar mago no MySQL
  await mysql.query(`
    UPDATE magos
    SET 
      status = 'ativo',
      codigo_offline = ?,
      qrcode_path = ?,
      data_aprovacao = NOW(),
      aprovado_por = ?,
      observacoes = ?
    WHERE id_mago = ?
  `, [codigo_offline, qrcodePath, session.user.id, observacoes, id_mago]);
  
  // 5. Atualizar status no Supabase
  await supabase
    .from('profiles')
    .update({ status: 'ativo' })
    .eq('id', mago.supabase_user_id);
  
  // 6. Salvar log
  await mysql.query(`
    INSERT INTO logs_aprovacao (id_mago, acao, staff_id, codigo_offline, observacoes)
    VALUES (?, 'aprovado', ?, ?, ?)
  `, [id_mago, session.user.id, codigo_offline, observacoes]);
  
  // 7. Enviar email de boas-vindas
  await enviarEmailBoasVindas(mago.email, {
    nome: mago.nome_completo,
    codigo: codigo_offline,
    loginUrl: `${process.env.NEXT_PUBLIC_SITE_URL}/login`
  });
  
  return Response.json({ success: true });
}
```

---

## 📊 PRÓXIMAS FUNCIONALIDADES

- Dashboard do Afiliado (/dashboard)
- Página de Membros (/membros)
- Sistema de busca e filtros
- Exportação de relatórios
- Histórico de pagamentos
- Renovação de afiliação

---

**Última atualização:** Checkpoint #4 - 2025-10-19  
**Próxima revisão:** Após implementação

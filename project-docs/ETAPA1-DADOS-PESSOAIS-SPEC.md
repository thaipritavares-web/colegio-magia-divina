# 📋 ETAPA 1 - DADOS PESSOAIS - ESPECIFICAÇÃO COMPLETA

**Documento:** Especificação técnica e UX da Etapa 1 do formulário de afiliação  
**Criado:** 2025-10-24  
**Status:** 🔄 Em Implementação  

---

## 🎯 VISÃO GERAL

Primeira etapa do processo de afiliação, onde o candidato informa:
- Dados pessoais básicos
- Informações de contato
- Endereço residencial
- **[APENAS INICIADOR]** Endereço profissional (onde ministra Magia Divina)

---

## 🎨 INTERFACE - COMPONENTES PRINCIPAIS

### **1. BARRA DE PROGRESSO DAS ETAPAS**

**Posicionamento:** Logo abaixo do H1 "Dados Pessoais"

**Design:** Linha horizontal com 6 passos identificados por ícones

**Comportamento:**
- Etapa atual: **destacada** (cor #5A5AA4 - Roxo Médio)
- Etapas futuras: **cinza suave** (#C6C0E1 - Lilás Claro)
- Etapas concluídas: **verde suave** (#A8E6CF) + ícone de check (✓)

**Estrutura:**
```tsx
<div className="progress-bar">
  {/* Etapa 1 - Dados Pessoais */}
  <div className="step active">
    <div className="step-icon">👤</div>
    <div className="step-label">Dados Pessoais</div>
  </div>
  
  {/* Etapa 2 - Graus de Magia */}
  <div className="step">
    <div className="step-icon">⭐</div>
    <div className="step-label">Graus de Magia</div>
  </div>
  
  {/* Etapa 3 - Documentos */}
  <div className="step">
    <div className="step-icon">📄</div>
    <div className="step-label">Documentos</div>
  </div>
  
  {/* Etapa 4 - Foto */}
  <div className="step">
    <div className="step-icon">📸</div>
    <div className="step-label">Foto</div>
  </div>
  
  {/* Etapa 5 - Revisão */}
  <div className="step">
    <div className="step-icon">✓</div>
    <div className="step-label">Revisão</div>
  </div>
  
  {/* Etapa 6 - Pagamento */}
  <div className="step">
    <div className="step-icon">💳</div>
    <div className="step-label">Pagamento</div>
  </div>
</div>
```

**Estados visuais:**
```css
/* Etapa futura */
.step {
  opacity: 0.5;
  color: #C6C0E1;
}

/* Etapa atual */
.step.active {
  opacity: 1;
  color: #5A5AA4;
  font-weight: bold;
  border-bottom: 3px solid #5A5AA4;
}

/* Etapa concluída */
.step.completed {
  opacity: 1;
  color: #2E7D32; /* Verde */
}

.step.completed .step-icon::before {
  content: '✓';
  position: absolute;
  top: -5px;
  right: -5px;
  background: #A8E6CF;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
}
```

**Responsividade:**
- Desktop (>768px): Todas as etapas visíveis em linha
- Mobile (<768px): Apenas etapa atual + contador "1/6"

---

### **2. FORMULÁRIO - OTIMIZAÇÃO DE ESPAÇO**

**Problema identificado:** Campos ocupando mais espaço do que o necessário

**Solução:** Dimensionamento inteligente baseado no conteúdo esperado

#### **Regras de Dimensionamento:**

| Campo | Conteúdo Esperado | Largura Desktop | Largura Mobile |
|-------|-------------------|-----------------|----------------|
| Nome Completo | ~40-60 caracteres | 60% (não 100%) | 100% |
| E-mail | ~25-40 caracteres | 50% | 100% |
| Telefone Celular | 15 caracteres fixos | 30% | 48% |
| Telefone Fixo | 14 caracteres fixos | 30% | 48% |
| CPF/Documento | 14 caracteres fixos | 40% | 100% |
| País | SELECT | 40% | 100% |
| CEP | 9 caracteres fixos | 30% + botão | 70% + botão |
| Logradouro | ~30-50 caracteres | 65% | 100% |
| Número | ~5 caracteres | 15% | 100% |
| Bairro | ~20 caracteres | 40% | 100% |
| Complemento | ~20 caracteres | 40% | 100% |
| Estado | SELECT | 48% | 100% |
| Cidade | INPUT/SELECT | 48% | 100% |

#### **Espaçamento Vertical:**

**Atual (problema):** `space-y-6` (1.5rem = 24px)  
**Novo:** `space-y-4` (1rem = 16px)

**Padding interno dos campos:**  
**Atual:** `py-2` (0.5rem = 8px)  
**Novo:** `py-1.5` (0.375rem = 6px)

**Margem inferior dos labels:**  
**Atual:** `mb-2` (0.5rem = 8px)  
**Novo:** `mb-1` (0.25rem = 4px)

#### **Largura do Container:**

**Atual:** `max-w-4xl` (896px)  
**Novo:** `max-w-5xl` (1024px)

**Objetivo:** Eliminar barra de rolagem em telas de desktop (1920x1080, 1366x768)

---

### **3. BUSCA AUTOMÁTICA DE CEP**

**Comportamento atual:** Requer clique no botão "🔍 Buscar"

**Novo comportamento:** Busca automática ao sair do campo

#### **Triggers:**
- `onBlur` do campo CEP
- Após 8 dígitos serem digitados (máscara: 00000-000)
- Tecla TAB
- Clique fora do campo

#### **Indicadores Visuais:**

**Durante busca (loading):**
```tsx
<div className="cep-status loading">
  <svg className="animate-spin" width="20" height="20">
    <circle cx="10" cy="10" r="8" stroke="#5A5AA4" strokeWidth="2" fill="none" />
  </svg>
  <span>Buscando CEP...</span>
</div>
```

**Sucesso:**
```tsx
<div className="cep-status success">
  <svg width="20" height="20">
    <circle cx="10" cy="10" r="10" fill="#A8E6CF" />
    <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" fill="none" />
  </svg>
  <span className="text-green-600">CEP encontrado ✓</span>
</div>
```

**Falha:**
```tsx
<div className="cep-status error">
  <svg width="20" height="20">
    <circle cx="10" cy="10" r="10" fill="#FFCDD2" />
    <path d="M7 7l6 6M13 7l-6 6" stroke="#C62828" strokeWidth="2" />
  </svg>
  <span className="text-red-600">
    CEP não encontrado. Preencha manualmente os campos abaixo.
  </span>
</div>
```

**Remoção do botão:** O botão "🔍 Buscar" deve ser **removido** (busca automática)

#### **Lógica de Preenchimento:**

```typescript
async function buscarCEP(cep: string) {
  if (cep.replace(/\D/g, '').length !== 8) return;
  
  setCepLoading(true);
  setCepError(null);
  setCepSuccess(false);

  try {
    const response = await fetch(
      `https://viacep.com.br/ws/${cep.replace(/\D/g, '')}/json/`
    );
    const data = await response.json();

    if (data.erro) {
      setCepError('CEP não encontrado. Preencha manualmente.');
      setAddressMode('manual');
      // Habilitar campos para edição
      setFieldsReadonly(false);
    } else {
      // Preencher campos
      setFormData(prev => ({
        ...prev,
        logradouro: data.logradouro || '',
        bairro: data.bairro || '',
        cidade: data.localidade || '',
        estado: data.uf || ''
      }));
      
      setCepSuccess(true);
      setAddressMode('auto');
      // Manter campos readonly exceto Número e Complemento
      setFieldsReadonly(true);
    }
  } catch (error) {
    setCepError('Erro ao buscar CEP. Verifique sua conexão.');
    setAddressMode('manual');
    setFieldsReadonly(false);
  } finally {
    setCepLoading(false);
  }
}

// Trigger no campo CEP
<input
  type="text"
  value={formData.cep}
  onChange={(e) => handleInputChange('cep', e.target.value)}
  onBlur={(e) => {
    if (e.target.value.replace(/\D/g, '').length === 8) {
      buscarCEP(e.target.value);
    }
  }}
  maxLength={9}
  placeholder="00000-000"
  className="..."
/>
```

---

### **4. ENDEREÇO PROFISSIONAL (APENAS MAGO INICIADOR)**

**Contexto:** Magos Iniciadores precisam informar onde ministram aulas

**Lógica Condicional:**

```typescript
const isMagoIniciador = selectedType === 'iniciador';
const [enderecoMesmoProfissional, setEnderecoMesmoProfissional] = useState<boolean | null>(null);
```

#### **Fluxo:**

**1. Após preencher endereço residencial, mostrar checkbox:**

```tsx
{isMagoIniciador && (
  <div className="checkbox-endereco-profissional">
    <label className="flex items-center gap-3 p-4 border border-[#C6C0E1] rounded hover:bg-[#ECE0F0] cursor-pointer">
      <input
        type="checkbox"
        checked={enderecoMesmoProfissional === true}
        onChange={(e) => setEnderecoMesmoProfissional(e.target.checked)}
        className="w-5 h-5"
      />
      <span className="text-[#1B223F] font-medium">
        Este endereço é onde você ministra Magia Divina?
      </span>
    </label>
  </div>
)}
```

**2a. Se marcar SIM (✓):**
- Esconder campos adicionais
- Copiar dados do endereço residencial para profissional no estado
- Permitir avançar para próxima etapa

**2b. Se marcar NÃO:**
- Mostrar nova seção de endereço profissional
- Campos idênticos ao endereço residencial
- Mesma lógica de Brasil (ViaCEP) vs Internacional

```tsx
{isMagoIniciador && enderecoMesmoProfissional === false && (
  <div className="endereco-profissional-section">
    <div className="section-header">
      <div className="icon">🏫</div>
      <div>
        <h3 className="text-lg font-bold text-[#1B223F]">
          Endereço Profissional
        </h3>
        <p className="text-sm text-[#26377F]">
          Preencha aqui o endereço que deseja deixar visível para alunos que procuram magos iniciadores no colégio
        </p>
      </div>
    </div>

    {/* CAMPOS IDÊNTICOS AO ENDEREÇO RESIDENCIAL */}
    <div className="space-y-4 mt-4">
      {/* País */}
      <div>
        <label>País *</label>
        <select
          value={formData.enderecoProfissional.pais}
          onChange={(e) => handleInputChangeProfissional('pais', e.target.value)}
          // ... mesma lógica
        >
          {paises.map(p => (
            <option key={p.code} value={p.code}>{p.name}</option>
          ))}
        </select>
      </div>

      {/* CEP com busca automática */}
      {formData.enderecoProfissional.pais === 'BR' ? (
        <div>
          <label>CEP *</label>
          <input
            type="text"
            value={formData.enderecoProfissional.cep}
            onBlur={(e) => buscarCEPProfissional(e.target.value)}
            // ... mesma lógica
          />
        </div>
      ) : (
        <div>
          <label>Código Postal / ZIP *</label>
          <input type="text" />
        </div>
      )}

      {/* Logradouro + Número */}
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          <label>Logradouro *</label>
          <input
            type="text"
            value={formData.enderecoProfissional.logradouro}
            readOnly={addressModeProfissional === 'auto'}
            // ...
          />
        </div>
        <div>
          <label>Número *</label>
          <input type="text" />
        </div>
      </div>

      {/* Bairro */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Bairro *</label>
          <input
            type="text"
            value={formData.enderecoProfissional.bairro}
            readOnly={addressModeProfissional === 'auto'}
            // ...
          />
        </div>
      </div>

      {/* Complemento */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Complemento</label>
          <input type="text" />
        </div>
      </div>

      {/* Estado + Cidade */}
      {formData.enderecoProfissional.pais === 'BR' ? (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Estado *</label>
            <select
              disabled={addressModeProfissional === 'auto'}
              // ...
            >
              {estadosBR.map(e => (
                <option key={e.uf} value={e.uf}>{e.nome}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Cidade *</label>
            <input
              type="text"
              readOnly={addressModeProfissional === 'auto'}
              // ...
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Estado/Província *</label>
            <input type="text" />
          </div>
          <div>
            <label>Cidade *</label>
            <input type="text" />
          </div>
        </div>
      )}
    </div>
  </div>
)}
```

**Validação:**
- Se checkbox não foi marcada → erro (obrigatório responder)
- Se marcou NÃO → validar todos os campos profissionais

---

## 📐 ESTRUTURA DE DADOS

### **Estado do Formulário:**

```typescript
interface EnderecoData {
  pais: string;
  cep: string;
  logradouro: string;
  numero: string;
  bairro: string;
  complemento: string;
  estado: string;
  cidade: string;
}

interface FormDataEtapa1 {
  // Dados Pessoais
  nomeCompleto: string;
  email: string;
  telCelular: string;
  telefoneFixo: string;
  numeroIdentidade: string; // CPF ou Passaporte
  
  // Endereço Residencial
  enderecoResidencial: EnderecoData;
  
  // [APENAS INICIADOR] Endereço Profissional
  enderecoMesmoProfissional?: boolean | null;
  enderecoProfissional?: EnderecoData;
}
```

### **Estados de Controle:**

```typescript
const [selectedType, setSelectedType] = useState<'iniciador' | 'iniciado' | null>(null);
const [formData, setFormData] = useState<FormDataEtapa1>({
  nomeCompleto: '',
  email: '',
  telCelular: '',
  telefoneFixo: '',
  numeroIdentidade: '',
  enderecoResidencial: {
    pais: 'BR',
    cep: '',
    logradouro: '',
    numero: '',
    bairro: '',
    complemento: '',
    estado: '',
    cidade: ''
  },
  ...(selectedType === 'iniciador' && {
    enderecoMesmoProfissional: null,
    enderecoProfissional: {
      pais: 'BR',
      cep: '',
      logradouro: '',
      numero: '',
      bairro: '',
      complemento: '',
      estado: '',
      cidade: ''
    }
  })
});

// Controle CEP Residencial
const [cepLoading, setCepLoading] = useState(false);
const [cepError, setCepError] = useState<string | null>(null);
const [cepSuccess, setCepSuccess] = useState(false);
const [addressMode, setAddressMode] = useState<'auto' | 'manual'>('auto');

// Controle CEP Profissional (apenas Iniciador)
const [cepLoadingProfissional, setCepLoadingProfissional] = useState(false);
const [cepErrorProfissional, setCepErrorProfissional] = useState<string | null>(null);
const [cepSuccessProfissional, setCepSuccessProfissional] = useState(false);
const [addressModeProfissional, setAddressModeProfissional] = useState<'auto' | 'manual'>('auto');
```

---

## ✅ VALIDAÇÃO

### **Campos Obrigatórios:**

**Todos os usuários:**
- ✅ Nome Completo (mín: 3 caracteres)
- ✅ E-mail (formato válido)
- ✅ Telefone Celular (formato brasileiro ou internacional)
- ✅ CPF/Documento de Identidade
- ✅ País
- ✅ CEP/Código Postal
- ✅ Logradouro
- ✅ Número
- ✅ Bairro
- ✅ Estado
- ✅ Cidade

**Apenas Mago Iniciador:**
- ✅ Resposta ao checkbox "Este endereço é onde você ministra Magia Divina?"
- ✅ **Se marcou NÃO:** Todos os campos do endereço profissional

### **Validações Específicas:**

```typescript
// CPF brasileiro
const validarCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/\D/g, '');
  if (cpf.length !== 11) return false;
  // Lógica de validação de dígito verificador
  // ...
  return true;
};

// E-mail
const validarEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Telefone celular brasileiro
const validarTelefoneBR = (tel: string): boolean => {
  const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
  return regex.test(tel);
};

// CEP brasileiro
const validarCEP = (cep: string): boolean => {
  const regex = /^\d{5}-?\d{3}$/;
  return regex.test(cep);
};
```

### **Validação de Submit:**

```typescript
const validarEtapa1 = (): boolean => {
  const erros: string[] = [];

  // Validar dados pessoais
  if (!formData.nomeCompleto || formData.nomeCompleto.length < 3) {
    erros.push('Nome completo inválido');
  }
  
  if (!validarEmail(formData.email)) {
    erros.push('E-mail inválido');
  }
  
  if (formData.enderecoResidencial.pais === 'BR' && !validarCPF(formData.numeroIdentidade)) {
    erros.push('CPF inválido');
  }
  
  // Validar endereço residencial
  if (!formData.enderecoResidencial.logradouro) {
    erros.push('Logradouro é obrigatório');
  }
  
  if (!formData.enderecoResidencial.numero) {
    erros.push('Número é obrigatório');
  }
  
  // Validar endereço profissional (apenas Iniciador)
  if (selectedType === 'iniciador') {
    if (formData.enderecoMesmoProfissional === null) {
      erros.push('Responda se o endereço residencial é o mesmo profissional');
    }
    
    if (formData.enderecoMesmoProfissional === false) {
      if (!formData.enderecoProfissional?.logradouro) {
        erros.push('Endereço profissional: Logradouro é obrigatório');
      }
      // ... validar todos os campos profissionais
    }
  }

  if (erros.length > 0) {
    setErrosValidacao(erros);
    return false;
  }

  return true;
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validarEtapa1()) {
    // Mostrar erros
    return;
  }
  
  // Salvar no estado global ou localStorage
  saveEtapa1(formData);
  
  // Avançar para Etapa 2
  router.push('/afilie-se/etapa-2');
};
```

---

## 🎨 PROPOSTA DE ESTÉTICA - BARRA DE PROGRESSO

### **Opção 1: Minimalista com Linha Conectora**

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  ●━━━━━○━━━━━○━━━━━○━━━━━○━━━━━○                               │
│  Dados  Graus  Docs  Foto  Rev  Pag                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

● = Etapa atual (roxo #5A5AA4)
✓ = Etapa concluída (verde #A8E6CF)
○ = Etapa futura (cinza #C6C0E1)
━ = Linha conectora (mesma cor do próximo passo)
```

**Código:**
```tsx
<div className="flex items-center justify-between max-w-4xl mx-auto">
  {steps.map((step, index) => (
    <React.Fragment key={step.id}>
      {/* Círculo com ícone */}
      <div className={`
        flex flex-col items-center relative
        ${index === currentStep ? 'text-[#5A5AA4]' : ''}
        ${index < currentStep ? 'text-green-600' : ''}
        ${index > currentStep ? 'text-[#C6C0E1]' : ''}
      `}>
        <div className={`
          w-12 h-12 rounded-full flex items-center justify-center text-xl
          ${index === currentStep ? 'bg-[#5A5AA4] text-white' : ''}
          ${index < currentStep ? 'bg-green-500 text-white' : ''}
          ${index > currentStep ? 'bg-[#ECE0F0] text-[#C6C0E1]' : ''}
        `}>
          {index < currentStep ? '✓' : step.icon}
        </div>
        <span className="text-xs mt-2 font-medium">{step.label}</span>
      </div>
      
      {/* Linha conectora */}
      {index < steps.length - 1 && (
        <div className={`
          flex-1 h-0.5 mx-2
          ${index < currentStep ? 'bg-green-500' : 'bg-[#ECE0F0]'}
        `} />
      )}
    </React.Fragment>
  ))}
</div>
```

---

### **Opção 2: Cards Compactos**

```
┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐
│  👤  │  │  ⭐  │  │  📄  │  │  📸  │  │  ✓   │  │  💳  │
│Dados │  │Graus │  │ Docs │  │ Foto │  │ Rev  │  │ Pag  │
└──────┘  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘
  ATUAL    PRÓXIMO   PRÓXIMO   PRÓXIMO   PRÓXIMO   PRÓXIMO
```

**Código:**
```tsx
<div className="grid grid-cols-6 gap-2 max-w-4xl mx-auto">
  {steps.map((step, index) => (
    <div key={step.id} className={`
      border-2 rounded-lg p-3 text-center transition-all
      ${index === currentStep 
        ? 'border-[#5A5AA4] bg-[#DDCFE8] shadow-md scale-105' 
        : ''}
      ${index < currentStep 
        ? 'border-green-500 bg-green-50' 
        : ''}
      ${index > currentStep 
        ? 'border-[#ECE0F0] bg-white opacity-60' 
        : ''}
    `}>
      <div className="text-2xl mb-1">
        {index < currentStep ? '✓' : step.icon}
      </div>
      <div className="text-xs font-medium">
        {step.label}
      </div>
    </div>
  ))}
</div>
```

---

### **Opção 3: Numeração + Progresso**

```
Etapa 1 de 6  [████████░░░░░░░░░░░░] 17%

1. Dados Pessoais ← VOCÊ ESTÁ AQUI
2. Graus de Magia
3. Documentos
4. Foto Pessoal
5. Revisão Final
6. Pagamento
```

**Código:**
```tsx
<div className="max-w-4xl mx-auto">
  {/* Barra de progresso */}
  <div className="mb-4">
    <div className="flex justify-between text-sm text-[#26377F] mb-2">
      <span>Etapa {currentStep + 1} de {steps.length}</span>
      <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
    </div>
    <div className="w-full bg-[#ECE0F0] rounded-full h-2">
      <div 
        className="bg-[#5A5AA4] h-2 rounded-full transition-all"
        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
      />
    </div>
  </div>
  
  {/* Lista de etapas */}
  <div className="space-y-1">
    {steps.map((step, index) => (
      <div key={step.id} className={`
        flex items-center gap-3 p-2 rounded
        ${index === currentStep ? 'bg-[#DDCFE8] font-bold' : ''}
        ${index < currentStep ? 'text-green-600' : ''}
        ${index > currentStep ? 'text-[#C6C0E1]' : ''}
      `}>
        <span className="text-lg">
          {index < currentStep ? '✓' : `${index + 1}.`}
        </span>
        <span>{step.label}</span>
        {index === currentStep && (
          <span className="ml-auto text-sm">← VOCÊ ESTÁ AQUI</span>
        )}
      </div>
    ))}
  </div>
</div>
```

---

## 🚀 IMPLEMENTAÇÃO

### **Arquivos a Modificar:**

```
/app/afilie-se/page.tsx
  └─ Componente principal
  
/components/StepProgress.tsx (CRIAR)
  └─ Barra de progresso reutilizável
  
/lib/validators.ts (CRIAR)
  └─ Funções de validação (CPF, email, telefone, etc.)
  
/lib/viacep.ts (CRIAR)
  └─ Funções de busca CEP
```

### **Prioridades:**

1. ✅ **[P0]** Barra de progresso das etapas
2. ✅ **[P0]** Otimização de espaço dos campos
3. ✅ **[P0]** Busca automática de CEP
4. ✅ **[P0]** Endereço profissional para Iniciador
5. ⏳ **[P1]** Validações em tempo real
6. ⏳ **[P1]** Máscaras de entrada
7. ⏳ **[P2]** Salvamento automático (localStorage)

---

## 📝 DECISÕES TÉCNICAS

### **1. Ordem dos Campos de Endereço**

**Decisão:** Bairro deve ficar próximo de Logradouro e Número

**Ordem final:**
1. País
2. CEP/Código Postal
3. Logradouro + Número (mesma linha)
4. Bairro
5. Complemento
6. Estado + Cidade

**Racional:** Fluxo natural de preenchimento do endereço

---

### **2. Busca Automática vs Botão**

**Decisão:** Busca automática ao sair do campo

**Racional:**
- ✅ Menos cliques (melhor UX)
- ✅ Feedback visual imediato
- ✅ Padrão moderno de formulários
- ❌ Evita necessidade de clicar em botão adicional

---

### **3. Endereço Profissional Condicional**

**Decisão:** Checkbox obrigatório para Iniciador

**Racional:**
- ✅ Clareza: usuário decide explicitamente
- ✅ Evita duplicação desnecessária de dados
- ✅ Permite endereço profissional diferente quando necessário

---

## 📊 MÉTRICAS DE SUCESSO

- ⏱️ **Tempo médio de preenchimento:** < 3 minutos
- 📉 **Taxa de abandono:** < 15%
- ✅ **Taxa de conclusão:** > 85%
- 🐛 **Erros de validação:** < 2 por usuário
- 📱 **Compatibilidade mobile:** 100%

---

**Próxima revisão:** Após implementação e testes  
**Responsável:** Thais (dev) + Claude (suporte técnico)

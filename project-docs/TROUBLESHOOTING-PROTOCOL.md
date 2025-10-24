# 🔬 PROTOCOLO OBRIGATÓRIO DE TROUBLESHOOTING

## ⚠️ REGRA CRÍTICA
**NUNCA implemente soluções antes de completar TODAS as 5 fases abaixo.**
**NUNCA tente uma solução e veja "se funciona".**
**SEMPRE complete a análise ANTES de agir.**

---

## 📋 METODOLOGIA CIENTÍFICA (5 FASES)

### **FASE 1: LEVANTAR TODAS AS HIPÓTESES**
Liste **NO MÍNIMO 5 hipóteses** possíveis para o erro.

**Template:**
```markdown
## 🔍 HIPÓTESES POSSÍVEIS

□ H1: [Hipótese sobre configuração]
□ H2: [Hipótese sobre versões/dependências]
□ H3: [Hipótese sobre encoding/sintaxe]
□ H4: [Hipótese sobre cache/build]
□ H5: [Hipótese sobre ambiente/processos]
□ H6: [Hipótese adicional se necessário]
```

**IMPORTANTE:** Não pule esta fase. Mesmo que "pareça óbvio", liste todas.

---

### **FASE 2: INVESTIGAR TODAS (sem implementar nada)**
Para cada hipótese, **VERIFICAR** sem fazer mudanças.

**Template:**
```markdown
## 🔎 INVESTIGAÇÃO

### H1: [Nome da hipótese]
- Verificação: [comando/ação para checar]
- Resultado: [o que foi encontrado]
- Status: ✅ OK | ❌ PROBLEMA | ⚠️ SUSPEITO

### H2: [Nome da hipótese]
- Verificação: [comando/ação para checar]
- Resultado: [o que foi encontrado]
- Status: ✅ OK | ❌ PROBLEMA | ⚠️ SUSPEITO

[... repetir para todas as hipóteses]
```

**Comandos de verificação comuns:**
- Versões: `cat package.json | grep "nome-pacote"`
- Configs: `cat arquivo-config.js`
- Encoding: `file arquivo.txt`
- Processos: `Get-Process | Where-Object { $_.ProcessName -like "*node*" }`
- Cache: `Test-Path .next` (PowerShell)

---

### **FASE 3: RANQUEAR POR PROBABILIDADE**
Ordene as hipóteses da **MAIS provável** para a **MENOS provável**.

**Template:**
```markdown
## 📊 RANKING DE PROBABILIDADE

1. **H[X] - [Nome]** 
   - Probabilidade: ALTÍSSIMA | ALTA | MÉDIA | BAIXA
   - Razão: [por que é a mais provável]
   - Evidências: [fatos que sustentam]

2. **H[Y] - [Nome]**
   - Probabilidade: ALTA | MÉDIA | BAIXA
   - Razão: [explicação]

3. **H[Z] - [Nome]**
   - Probabilidade: MÉDIA | BAIXA
   - Razão: [explicação]

[... continuar por ordem de probabilidade]
```

**Critérios de probabilidade:**
- **ALTÍSSIMA (90-100%):** Evidência direta do erro, causa clássica conhecida
- **ALTA (70-89%):** Múltiplas evidências, padrão comum
- **MÉDIA (40-69%):** Possível, mas precisa mais evidências
- **BAIXA (0-39%):** Improvável, mas não impossível

---

### **FASE 4: DIAGNOSTICAR CAUSA RAIZ**
Apresente um diagnóstico completo ANTES de propor solução.

**Template:**
```markdown
## 🎯 DIAGNÓSTICO FINAL

**CAUSA RAIZ IDENTIFICADA:** [H[X] - Nome da hipótese]

**CONFIANÇA:** [%] (baseado no ranking)

**EVIDÊNCIAS CONCLUSIVAS:**
1. [Evidência 1 - fato verificado]
2. [Evidência 2 - fato verificado]
3. [Evidência 3 - fato verificado]

**DESCARTADAS:**
- H[Y]: [por que foi descartada]
- H[Z]: [por que foi descartada]

**POR QUE ESTA É A CAUSA:**
[Explicação lógica conectando o erro às evidências]
```

---

### **FASE 5: PROPOR SOLUÇÃO (apenas agora!)**
Somente após Fases 1-4, proponha a solução.

**Template:**
```markdown
## ✅ SOLUÇÃO PROPOSTA

### Ação Primária:
```bash
# Comando ou código exato
[solução para a causa raiz]
```

### Ações Secundárias (se necessário):
```bash
# Se houver outras hipóteses com probabilidade MÉDIA
[soluções alternativas]
```

### Validação:
- [ ] Comando para testar se funcionou
- [ ] Resultado esperado

**Implementar agora ou prefere executar manualmente?**
```

---

## 🚫 ANTI-PADRÕES PROIBIDOS

### **NUNCA faça:**
❌ "Acho que é X, vamos tentar reinstalar"
❌ "Pode ser cache, vou limpar"
❌ "Vou testar essa solução e vemos se funciona"
❌ Implementar solução sem completar Fases 1-4
❌ Pular direto para "reinstalar tudo"

### **SEMPRE faça:**
✅ Liste todas as hipóteses
✅ Investigue todas antes de agir
✅ Ranqueie por probabilidade
✅ Apresente diagnóstico completo
✅ Proponha solução UMA vez (a certa)

---

## 🎯 CHECKLIST DE VALIDAÇÃO

Antes de apresentar qualquer solução, confirme:

- [ ] Listei NO MÍNIMO 5 hipóteses?
- [ ] Investiguei TODAS as hipóteses?
- [ ] Ranqueei por probabilidade?
- [ ] Apresentei diagnóstico completo?
- [ ] Identifiquei causa raiz com evidências?
- [ ] Propus solução APENAS APÓS análise completa?
- [ ] NÃO tentei nenhuma solução antes de completar 1-4?

**Se algum item está ❌, PARE e complete a análise.**

---

## 📌 LEMBRETE CRÍTICO

Este protocolo existe porque:
1. ✅ Economiza tempo (1 solução vs 3+ tentativas)
2. ✅ Aumenta confiança (diagnóstico completo)
3. ✅ Evita frustração (não fica tentando aleatoriamente)
4. ✅ Documenta o raciocínio (para casos futuros)
5. ✅ Profissionalismo técnico (método científico)

**Toda vez que um erro for reportado, abra este arquivo e siga à risca.**

---

## 📚 EXEMPLO COMPLETO (Caso Real: PostCSS)

### **Erro Reportado:**
```
Module parse failed: Unexpected character '@' (1:0)
> @tailwind base;
```

### **FASE 1: HIPÓTESES**
```
□ H1: PostCSS não está instalado
□ H2: postcss.config.js corrompido/inexistente
□ H3: globals.css com encoding errado
□ H4: Versão do PostCSS incompatível com Tailwind
□ H5: Cache .next corrompido
□ H6: node_modules corrompidos
□ H7: Processos Node.js travando arquivos
```

### **FASE 2: INVESTIGAÇÃO**
```
H1: PostCSS instalado?
- Verificação: cat package.json | grep postcss
- Resultado: "postcss": "^8.5.6"
- Status: ✅ Instalado

H2: Config existe e está correto?
- Verificação: cat postcss.config.js
- Resultado: Syntax válida, plugins corretos
- Status: ✅ OK

H3: Encoding do CSS?
- Verificação: file app/globals.css
- Resultado: UTF-8
- Status: ✅ OK

H4: Compatibilidade de versões?
- Verificação: package.json
- Resultado: PostCSS 8.5.6 (dez/2021) + Tailwind 3.4.18 (out/2024)
- Status: ❌ INCOMPATÍVEL (gap de 3 anos)

H5: Cache corrompido?
- Verificação: .next existe?
- Resultado: Sim, pode estar desatualizado
- Status: ⚠️ POSSÍVEL (mas H4 é mais provável)
```

### **FASE 3: RANKING**
```
1. H4 - Incompatibilidade de versão (ALTÍSSIMA - 95%)
2. H5 - Cache corrompido (MÉDIA - 30%)
3. H6 - node_modules corrompidos (BAIXA - 20%)
4. H7 - Processos travados (BAIXA - 15%)
```

### **FASE 4: DIAGNÓSTICO**
```
CAUSA RAIZ: H4 - Incompatibilidade PostCSS/Tailwind
CONFIANÇA: 95%

EVIDÊNCIAS:
1. PostCSS 8.5.6 é de dezembro/2021
2. Tailwind 3.4.18 é de outubro/2024
3. Erro ocorre na linha exata do @tailwind
4. Configurações sintaticamente corretas
```

### **FASE 5: SOLUÇÃO**
```powershell
npm install postcss@latest --save-dev
```

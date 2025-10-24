# DECISIONS - REGISTRO DE DECISÕES TÉCNICAS

**Última atualização:** 24/10/2025 - v3.2.0

---

## ✅ DECISÃO #030: Barra de Progresso do Formulário de Afiliação
**Data:** 24/10/2025  
**Tipo:** UX/Design  
**Status:** ✅ Aprovado  
**Versão:** v3.2.0

### **Contexto:**
Necessidade de implementar uma barra de progresso visual no formulário multi-step de afiliação (5 etapas), que seja:
- Elegante e moderna
- Ocupe pouco espaço vertical (importante para evitar scroll)
- Clara e intuitiva
- Responsiva para mobile

### **Opções Avaliadas:**

**Opção 1 - Minimalista com Linha Conectora:**
- Círculos conectados por linha horizontal
- Etapa atual: círculo grande, roxo (#5A5AA4), pulsante
- Etapas concluídas: círculo médio, verde (#4CAF50), com ✓
- Etapas futuras: círculo pequeno, vazado, cinza (#C6C0E1)
- Espaço vertical: ~60px

**Opção 2 - Cards Compactos:**
- Cards individuais para cada etapa
- Etapa atual: borda grossa, escala 110%, indicador "▼ AQUI"
- Espaço vertical: ~100px
- Menos adequado para mobile

**Opção 3 - Barra Horizontal com Lista:**
- Barra de progresso com percentual no topo
- Lista vertical de todas as etapas
- Espaço vertical: ~200px
- Mais tradicional

### **Decisão:**
✅ **APROVADO: Opção 1 - Minimalista com Linha Conectora**

### **Justificativa:**
- Melhor custo-benefício entre espaço vertical e elegância visual
- Visual moderno e clean alinhado com identidade do projeto
- Ocupa menos espaço (crítico para evitar scroll excessivo)
- Animação sutil (pulse) destaca etapa atual sem ser intrusiva
- Totalmente responsivo (mobile mostra etapa atual + contador)
- Fácil implementação e manutenção

### **Especificações Técnicas:**

**Estrutura de 5 Etapas:**
1. 👤 **Dados** - Dados Pessoais
2. 🎓 **Graus** - Graus de Magia (ícone alterado de ⭐ para 🎓 para remeter a certificado)
3. 📄 **Docs** - Upload de Documentos
4. ✓ **Revisão** - Revisão Final
5. 💳 **Pagamento** - Mercado Pago

**Estados Visuais:**

*Etapa Atual:*
```css
width: 56px;
height: 56px;
background: #5A5AA4;
animation: pulse 2s infinite;
box-shadow: 0 4px 12px rgba(90, 90, 164, 0.4);
label: font-weight: 700, color: #5A5AA4;
```

*Etapa Concluída:*
```css
width: 48px;
height: 48px;
background: #4CAF50;
box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
icon: ✓ branco;
label: color: #4CAF50;
```

*Etapa Futura:*
```css
width: 44px;
height: 44px;
background: transparent;
border: 2px solid #C6C0E1;
opacity: 0.6;
label: color: #C6C0E1;
```

**Linhas Conectoras:**
- Concluída: `background: #4CAF50`
- Ativa: `background: linear-gradient(to right, #5A5AA4 50%, #ECE0F0 50%)`
- Futura: `background: #ECE0F0`

### **Alteração de Ícone:**
- **Original:** ⭐ (estrela)
- **Alterado para:** 🎓 (capelo/certificado)
- **Motivo:** Remeter diretamente a certificados e graus acadêmicos, mais adequado ao contexto de formação em Magia Divina

### **Responsividade:**
- **Desktop (>768px):** Todas as 5 etapas visíveis
- **Mobile (<768px):** Apenas etapa atual + contador "Etapa X de 5"

### **Mockup Aprovado:**
Arquivo: `/outputs/proposta1-barra-progresso.html` (versão final com ícone 🎓)

### **Impacto:**
- Etapa 1 (Dados Pessoais): Implementar barra no topo
- Etapa 2 (Graus): Implementar barra no topo
- Etapa 3 (Documentos): Implementar barra no topo
- Etapa 4 (Revisão): Implementar barra no topo
- Etapa 5 (Pagamento): Redirecionar para Mercado Pago

### **Próximos Passos:**
1. Implementar barra de progresso em todas as etapas do formulário
2. Testar animações e transições
3. Validar responsividade em 320px, 768px, 1024px, 1440px
4. Implementar correções da Etapa 1 (campos, espaçamentos, CEP automático)

---

## 📋 RESUMO DAS DECISÕES RECENTES

| # | Decisão | Tipo | Data | Status |
|---|---------|------|------|--------|
| 030 | Barra de progresso formulário | UX/Design | 24/10/2025 | ✅ |
| 029 | Correções Etapa 1 - Dados Pessoais | UX | 24/10/2025 | 🔄 |
| 028 | Cards de seleção de afiliação | UX/Design | 24/10/2025 | ✅ |
| 027 | Indicador visual de página ativa | UX | 24/10/2025 | ✅ |
| - | Cores do Footer (textos brancos) | Design | 24/10/2025 | ✅ |
| - | Hierarquia de cores tipográfica | Design | 23/10/2025 | 🔄 |
| - | Sistema de fontes unificado | Técnico | 23/10/2025 | 🔄 |

**Legenda:**
- ✅ Implementado
- 🔄 Aguardando implementação
- ⏳ Pendente

---

## 🎯 PRÓXIMOS PASSOS

**Checkpoint #11 (Previsto):**
1. Implementar barra de progresso (Decisão #030)
2. Implementar correções da Etapa 1 (Decisão #029)
3. Testar em todos os breakpoints (320px, 768px, 1024px, 1440px)
4. Validar contraste e acessibilidade
5. Implementar correções pendentes do Checkpoint #7
6. Sistema de sombras (Checkpoint #8)

---

**Última Revisão:** 24/10/2025 - v3.2.0  
**Próxima Revisão:** Após implementação das Decisões #029 e #030

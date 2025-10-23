# 📋 MAPEAMENTO COMPLETO DOS 29 GRAUS DE MAGIA DIVINA

**Data de Criação:** 2025-10-19  
**Última Atualização:** 2025-10-19  
**Status:** ✅ Lista Oficial Corrigida

---

## 🎯 TABELA COMPLETA

| Nº | Nome Completo | Slug | Uso em Código |
|----|---------------|------|---------------|
| 1 | Magia Sagrada das Sete Chamas | `chamas` | `graus[1]` ou `graus.chamas` |
| 2 | Magia Sagrada das Sete Pedras | `pedras` | `graus[2]` ou `graus.pedras` |
| 3 | Magia Sagrada das Sete Ervas Sagradas | `ervas` | `graus[3]` ou `graus.ervas` |
| 4 | Magia Sagrada das Sete Raios | `raios` | `graus[4]` ou `graus.raios` |
| 5 | Magia Sagrada das Sete Símbolos | `simbolos` | `graus[5]` ou `graus.simbolos` |
| 6 | Magia Sagrada das Sete Espadas | `espadas` | `graus[6]` ou `graus.espadas` |
| 7 | Magia Sagrada das Sete Eixos | `eixos` | `graus[7]` ou `graus.eixos` |
| 8 | Magia Sagrada das Sete Energias | `energias` | `graus[8]` ou `graus.energias` |
| 9 | Magia Sagrada das Sete Círculos | `circulos` | `graus[9]` ou `graus.circulos` |
| 10 | Magia Sagrada das Sete Esferas | `esferas` | `graus[10]` ou `graus.esferas` |
| 11 | Magia Sagrada das Sete Árvores | `arvores` | `graus[11]` ou `graus.arvores` |
| 12 | Magia Sagrada das Sete Anjos | `anjos` | `graus[12]` ou `graus.anjos` |
| 13 | Magia Sagrada das Sete Luzes e Cores | `luzes_cores` | `graus[13]` ou `graus.luzes_cores` |
| 14 | Magia Sagrada das Sete Vórtices | `vortices` | `graus[14]` ou `graus.vortices` |
| 15 | Magia Sagrada das Sete Portais | `portais` | `graus[15]` ou `graus.portais` |
| 16 | Magia Sagrada das Sete Assopros | `assopros` | `graus[16]` ou `graus.assopros` |
| 17 | Magia Sagrada das Sete Giros | `giros` | `graus[17]` ou `graus.giros` |
| 18 | Magia Sagrada das Sete Vestes | `vestes` | `graus[18]` ou `graus.vestes` |
| 19 | Magia Sagrada das Sete Mantos | `mantos` | `graus[19]` ou `graus.mantos` |
| 20 | Magia Sagrada das Sete Gênios | `genios` | `graus[20]` ou `graus.genios` |
| 21 | Magia Sagrada dos Mentais | `mentais` | `graus[21]` ou `graus.mentais` |
| 22 | Magia Sagrada das Cruzes | `cruzes` | `graus[22]` ou `graus.cruzes` |
| 23 | Magia Sagrada dos Fatores | `fatores` | `graus[23]` ou `graus.fatores` |
| 24 | Magia Sagrada dos Dragões | `dragoes` | `graus[24]` ou `graus.dragoes` |
| 25 | Magia Sagrada dos Elementais | `elementais` | `graus[25]` ou `graus.elementais` |
| 26 | Magia Sagrada das Essências | `essencias` | `graus[26]` ou `graus.essencias` |
| 27 | Magia Sagrada das Diferenças | `diferencas` | `graus[27]` ou `graus.diferencas` |
| 28 | Magia Sagrada das Conchas | `conchas` | `graus[28]` ou `graus.conchas` |
| 29 | Magia Sagrada das Águas | `aguas` | `graus[29]` ou `graus.aguas` |

---

## 💻 IMPLEMENTAÇÃO EM TYPESCRIPT

### Enum de Graus

```typescript
export enum GrauMagia {
  CHAMAS = 1,
  PEDRAS = 2,
  ERVAS = 3,
  RAIOS = 4,
  SIMBOLOS = 5,
  ESPADAS = 6,
  EIXOS = 7,
  ENERGIAS = 8,
  CIRCULOS = 9,
  ESFERAS = 10,
  ARVORES = 11,
  ANJOS = 12,
  LUZES_CORES = 13,
  VORTICES = 14,
  PORTAIS = 15,
  ASSOPROS = 16,
  GIROS = 17,
  VESTES = 18,
  MANTOS = 19,
  GENIOS = 20,
  MENTAIS = 21,
  CRUZES = 22,
  FATORES = 23,
  DRAGOES = 24,
  ELEMENTAIS = 25,
  ESSENCIAS = 26,
  DIFERENCAS = 27,
  CONCHAS = 28,
  AGUAS = 29
}
```

### Objeto de Mapeamento

```typescript
export const GRAUS_MAGIA = {
  1: { nome: 'Magia Sagrada das Sete Chamas', slug: 'chamas' },
  2: { nome: 'Magia Sagrada das Sete Pedras', slug: 'pedras' },
  3: { nome: 'Magia Sagrada das Sete Ervas Sagradas', slug: 'ervas' },
  4: { nome: 'Magia Sagrada das Sete Raios', slug: 'raios' },
  5: { nome: 'Magia Sagrada das Sete Símbolos', slug: 'simbolos' },
  6: { nome: 'Magia Sagrada das Sete Espadas', slug: 'espadas' },
  7: { nome: 'Magia Sagrada das Sete Eixos', slug: 'eixos' },
  8: { nome: 'Magia Sagrada das Sete Energias', slug: 'energias' },
  9: { nome: 'Magia Sagrada das Sete Círculos', slug: 'circulos' },
  10: { nome: 'Magia Sagrada das Sete Esferas', slug: 'esferas' },
  11: { nome: 'Magia Sagrada das Sete Árvores', slug: 'arvores' },
  12: { nome: 'Magia Sagrada das Sete Anjos', slug: 'anjos' },
  13: { nome: 'Magia Sagrada das Sete Luzes e Cores', slug: 'luzes_cores' },
  14: { nome: 'Magia Sagrada das Sete Vórtices', slug: 'vortices' },
  15: { nome: 'Magia Sagrada das Sete Portais', slug: 'portais' },
  16: { nome: 'Magia Sagrada das Sete Assopros', slug: 'assopros' },
  17: { nome: 'Magia Sagrada das Sete Giros', slug: 'giros' },
  18: { nome: 'Magia Sagrada das Sete Vestes', slug: 'vestes' },
  19: { nome: 'Magia Sagrada das Sete Mantos', slug: 'mantos' },
  20: { nome: 'Magia Sagrada das Sete Gênios', slug: 'genios' },
  21: { nome: 'Magia Sagrada dos Mentais', slug: 'mentais' },
  22: { nome: 'Magia Sagrada das Cruzes', slug: 'cruzes' },
  23: { nome: 'Magia Sagrada dos Fatores', slug: 'fatores' },
  24: { nome: 'Magia Sagrada dos Dragões', slug: 'dragoes' },
  25: { nome: 'Magia Sagrada dos Elementais', slug: 'elementais' },
  26: { nome: 'Magia Sagrada das Essências', slug: 'essencias' },
  27: { nome: 'Magia Sagrada das Diferenças', slug: 'diferencas' },
  28: { nome: 'Magia Sagrada das Conchas', slug: 'conchas' },
  29: { nome: 'Magia Sagrada das Águas', slug: 'aguas' }
} as const;
```

### Type-safe Array

```typescript
export const GRAUS_ARRAY = [
  { id: 1, nome: 'Magia Sagrada das Sete Chamas', slug: 'chamas' },
  { id: 2, nome: 'Magia Sagrada das Sete Pedras', slug: 'pedras' },
  { id: 3, nome: 'Magia Sagrada das Sete Ervas Sagradas', slug: 'ervas' },
  { id: 4, nome: 'Magia Sagrada das Sete Raios', slug: 'raios' },
  { id: 5, nome: 'Magia Sagrada das Sete Símbolos', slug: 'simbolos' },
  { id: 6, nome: 'Magia Sagrada das Sete Espadas', slug: 'espadas' },
  { id: 7, nome: 'Magia Sagrada das Sete Eixos', slug: 'eixos' },
  { id: 8, nome: 'Magia Sagrada das Sete Energias', slug: 'energias' },
  { id: 9, nome: 'Magia Sagrada das Sete Círculos', slug: 'circulos' },
  { id: 10, nome: 'Magia Sagrada das Sete Esferas', slug: 'esferas' },
  { id: 11, nome: 'Magia Sagrada das Sete Árvores', slug: 'arvores' },
  { id: 12, nome: 'Magia Sagrada das Sete Anjos', slug: 'anjos' },
  { id: 13, nome: 'Magia Sagrada das Sete Luzes e Cores', slug: 'luzes_cores' },
  { id: 14, nome: 'Magia Sagrada das Sete Vórtices', slug: 'vortices' },
  { id: 15, nome: 'Magia Sagrada das Sete Portais', slug: 'portais' },
  { id: 16, nome: 'Magia Sagrada das Sete Assopros', slug: 'assopros' },
  { id: 17, nome: 'Magia Sagrada das Sete Giros', slug: 'giros' },
  { id: 18, nome: 'Magia Sagrada das Sete Vestes', slug: 'vestes' },
  { id: 19, nome: 'Magia Sagrada das Sete Mantos', slug: 'mantos' },
  { id: 20, nome: 'Magia Sagrada das Sete Gênios', slug: 'genios' },
  { id: 21, nome: 'Magia Sagrada dos Mentais', slug: 'mentais' },
  { id: 22, nome: 'Magia Sagrada das Cruzes', slug: 'cruzes' },
  { id: 23, nome: 'Magia Sagrada dos Fatores', slug: 'fatores' },
  { id: 24, nome: 'Magia Sagrada dos Dragões', slug: 'dragoes' },
  { id: 25, nome: 'Magia Sagrada dos Elementais', slug: 'elementais' },
  { id: 26, nome: 'Magia Sagrada das Essências', slug: 'essencias' },
  { id: 27, nome: 'Magia Sagrada das Diferenças', slug: 'diferencas' },
  { id: 28, nome: 'Magia Sagrada das Conchas', slug: 'conchas' },
  { id: 29, nome: 'Magia Sagrada das Águas', slug: 'aguas' }
] as const;
```

---

## 🗄️ SCRIPT SQL PARA MYSQL

```sql
-- Inserir os 29 graus de magia na tabela
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

---

## 📝 EXEMPLOS DE USO

### Nomenclatura de Arquivos de Certificados

**Formato:** `{CPF}_{slug1}_{slug2}_{slug3}_e_outros.{ext}`

**Exemplos válidos:**
```
12378756499_chamas.pdf                          (1 grau)
12378756499_chamas_pedras.jpg                   (2 graus)
12378756499_chamas_pedras_ervas.pdf             (3 graus)
12378756499_chamas_pedras_ervas_e_outros.pdf    (4+ graus)
12378756499_raios_simbolos_espadas_e_outros.jpg (4+ graus)
12378756499_anjos.pdf                           (1 grau)
12378756499_elementais_essencias_diferencas.pdf (3 graus)
```

### Busca por Nome

```typescript
// Buscar grau por nome
const grauPorNome = GRAUS_ARRAY.find(
  g => g.nome === 'Magia Sagrada das Sete Chamas'
);
// Retorna: { id: 1, nome: '...', slug: 'chamas' }
```

### Busca por Slug

```typescript
// Buscar grau por slug
const grauPorSlug = GRAUS_ARRAY.find(
  g => g.slug === 'chamas'
);
// Retorna: { id: 1, nome: '...', slug: 'chamas' }
```

### Busca por ID

```typescript
// Buscar grau por ID
const grauPorId = GRAUS_MAGIA[1];
// Retorna: { nome: 'Magia Sagrada das Sete Chamas', slug: 'chamas' }
```

---

## ⚠️ NOTAS IMPORTANTES

1. **Encoding UTF-8 obrigatório** - Acentuação correta em todos os arquivos
2. **Slugs sem acentos** - Para compatibilidade com sistemas de arquivos
3. **IDs de 1 a 29** - Nunca usar 0 ou valores acima de 29
4. **Ordem fixa** - A numeração NÃO deve ser alterada
5. **Lista oficial** - Esta é a lista correta fornecida pela proprietária

---

## ✅ CHECKLIST DE VALIDAÇÃO

Ao trabalhar com graus de magia, sempre verificar:

- [ ] Usando a lista correta (29 graus)
- [ ] IDs de 1 a 29
- [ ] Slugs sem acentuação
- [ ] Nomes completos com acentuação UTF-8
- [ ] Nomenclatura de arquivos seguindo padrão
- [ ] Banco de dados sincronizado com esta lista

---

**Última revisão:** 2025-10-19  
**Arquivo de referência:** Este documento é a fonte oficial para todos os graus de magia

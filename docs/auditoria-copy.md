# Auditoria de copy — vancod.com.br

**Diagnóstico:** Situação B. A voz já existe e é boa: frases curtas, português de gente, zero "soluções inovadoras". O problema não é o tom, é a arquitetura da informação e três promessas que o site faz e não cumpre. A copy mais forte do site está nas páginas de produto e no CTA final da Home ("Conte o que a sua equipe enfrenta hoje"). A mais fraca está nos títulos das seções de prova social e na primeira linha da Home, que não diz o que a empresa vende.

Escopo auditado: Home, Adegas, Restaurantes, Eventos, Sobre, Contato, Suporte, componentes de prova social, nav/footer, metatags. Termos e Privacidade ficaram fora (texto jurídico, não copy de conversão).

---

## 1. Não mexer

Estas linhas estão certas. Qualquer reescrita aqui é troca de sinal por ruído.

- `Home.tsx:227-231` — "Quer conversar sobre a operação da sua empresa? / Conte o que a sua equipe enfrenta hoje e veja se podemos ajudar." O melhor par de linhas do site: convida sem pressão e não promete nada que não dá para provar.
- `adega.tsx:11` — "Atenda filas com rapidez no balcão, lance combos com dedução automática de insumos, organize o controle de fiado e continue vendendo normalmente mesmo se a internet oscilar." Concreto, específico, verificável.
- `adega.tsx:76` — a lista de impressoras (Bematech, Elgin, Epson, Daruma) responde a objeção real. Manter.
- `transparency-section.tsx:16` — "Transparência faz parte do produto."
- `contato.tsx:86` — "Um processo claro e sem pressão para você avaliar a tecnologia com segurança."
- `layout.tsx:13,19,25` — as três descrições do menu "Soluções". São curtas, concretas e dizem o que cada produto faz melhor do que as próprias headlines das páginas.
- `testimonials-section.tsx:65` — "não publicamos relatos sem prévia autorização". A política está certa; o título acima dela é que está errado (ver 2.2).
- A decisão de não inventar clientes, números ou depoimentos. Está mantida em todo o documento.

---

## 2. P0 — o que quebra confiança ou esconde o produto

### 2.1 WhatsApp prometido em cinco lugares, ausente do site

`config.ts:56` tem `whatsappNumber: ''`. Com isso, `getWhatsAppUrl()` devolve `/contato` e todo bloco de WhatsApp fica escondido atrás de `hasWhatsApp` (`contato.tsx:144`, `suporte.tsx:58`). O botão flutuante existe, mas cada link cai no formulário (`floating-whatsapp.tsx:73,103`).

Enquanto isso, a copy promete o canal:

- `Home.tsx:27` — "Suporte por e-mail e WhatsApp"
- `Home.tsx:53` — "via e-mail e WhatsApp"
- `suporte.tsx:98` — "plantão para atendimentos emergenciais"

Para o público do site (adega, restaurante, evento), WhatsApp é o canal padrão de compra no Brasil. Ou o número entra, ou a promessa sai de todos os lugares. Não existe meio-termo.

**Correção:** preencher `whatsappNumber` em `config.ts` no formato `5511999999999`. Se ainda não houver número comercial, trocar as três ocorrências por "por e-mail" e esconder o botão flutuante até existir.

### 2.2 Três seções seguidas prometem prova social e entregam desculpa

O problema não é não ter clientes. É o site anunciar "Resultados na prática" e, no card logo abaixo, dizer que ainda não tem resultados.

| Arquivo | Título promete | Corpo entrega |
|---|---|---|
| `clients-section.tsx:17-19` | "Empresas que escolhem a Vancod para sua operação" | ":67 Estamos construindo nosso ecossistema junto aos primeiros negócios parceiros." |
| `cases-section.tsx:17-21` | "Resultados na prática" + "Veja como a tecnologia pode simplificar processos" | ":79 Seu negócio pode ser nosso próximo case." |
| `testimonials-section.tsx:18` | "O que nossos clientes dizem" | ":62 Os primeiros clientes da Vancod estão ajudando a construir..." |

Três blocos consecutivos dizendo "ainda não temos" vendem fragilidade. Quem chega de anúncio ou Google lê isso como empresa sem operação.

**Correção:** derrubar as três seções e publicar uma só (`Home.tsx:202-204`), com este texto:

> **Primeiros parceiros**
> ## Ainda são poucos clientes. Cada implantação é feita por quem escreve o código.
> A Vancod está começando, e preferimos dizer isso a inventar logos. Quem entra agora participa da implantação junto com a equipe: o fluxo é ajustado ao seu balcão, à sua cozinha ou ao seu evento, e não o contrário.
> [Agendar demonstração]

A afirmação "por quem escreve o código" já está sustentada em `sobre.tsx:195`. Nenhum dado novo é inventado.

**Se preferir manter as três seções**, o mínimo é alinhar título e corpo, sem prometer depoimento:

- `clients-section.tsx:17` → "Com quem estamos trabalhando agora"
- `cases-section.tsx:17` → "Como uma implantação funciona na prática" (e trocar o card por um exemplo de fluxo, não por um case)
- `testimonials-section.tsx:18` → "Por que ainda não publicamos depoimentos"

### 2.3 A Home vende a categoria e esconde o produto

O menu "Soluções" no desktop (`layout.tsx:68-91`) e no mobile (`:132`) lista os três produtos com descrição. Isso está certo e não precisa mudar.

O problema está na Home: o bloco de serviços (`Home.tsx:142-157`) chama a segunda coluna de "Soluções para segmentos" (`:20`) e nunca escreve "Balcão Pro", "Vancod Restaurantes" nem "Olhare". Os três cards também não são links. Quem lê a Home inteira, rolando, termina sem saber que existem três produtos com nome, página e demonstração própria.

**Correção:** trocar o card genérico por três cards nomeados, cada um linkando para a página do produto e reaproveitando as descrições já escritas em `layout.tsx:13,19,25`:

- **Balcão Pro** — "PDV com operação offline-first, controle de fiado e desmembramento de combos." → `/adegas`
- **Vancod Restaurantes** — "KDS para cozinha, comanda digital de mesas e integração de pedidos." → `/restaurantes`
- **Olhare** — "Mural de fotos e recados em tempo real na TV via QR Code sem instalação." → `/olhare`

### 2.4 Canonical aponta para páginas que não existem

`product-layout.tsx:73`:

```tsx
canonicalUrl={`https://vancod.com.br/${(name.split(' ')[1] || name).toLowerCase()}`}
```

- "Balcão Pro Adegas" → `https://vancod.com.br/pro` (404)
- "Vancod Restaurantes" → `/restaurantes` (certo por acidente)
- "Olhare Fotos & Eventos" → `https://vancod.com.br/fotos` (404)

Canonical errado faz o Google indexar uma URL que não existe em vez da real.

**Correção mínima:** adicionar `path` às props do `ProductLayout` e passar `"/adegas"`, `"/restaurantes"`, `"/olhare"` de cada página.

### 2.5 Os ativos de persuasão estão prontos e nunca foram publicados

`RoiCalculator`, `ComparisonTable`, `InteractiveSystemSimulator` e `VideoDemoPlayer` são exportados e não são importados em lugar nenhum (`grep` em `src/` confirma: só `FloatingWhatsApp` e `TransparencySection` são montados). São ~800 linhas de interface — inclusive uma calculadora de ROI e uma tabela comparativa, exatamente o que substituiria a prova social que o site não tem.

**Correção:** decidir por componente. Calculadora de ROI e tabela comparativa entram na Home ou nas páginas de segmento. O que não tiver data para publicar sai do repositório em vez de continuar meio pronto. `CustomCursor` não é copy e não tem função comercial: remover.

Ao publicar a tabela comparativa (`comparison-table.tsx`), a coluna "Sistemas Tradicionais" faz afirmações sobre concorrentes ("cobranças adicionais por cada máquina", "tickets de papel"). Manter no genérico e sem marca, como está hoje — citar produto ou empresa transforma comparação em risco jurídico. A calculadora já traz o aviso certo em `roi-calculator.tsx:162` ("Estimativa baseada nos dados informados"): manter.

---

## 3. P1 — copy que perde venda

### Home

**3.1 H1 genérico — `Home.tsx:93`**
"Construímos software para empresas que precisam operar melhor." Passa no teste de troca: qualquer software house assina. Não diz o que a empresa vende, para quem, nem por que importa. Quem chega do Google não sabe se é agência, consultoria ou SaaS.

Opções, todas construídas com fatos que o site já afirma:

- **A** — "Sistemas prontos para adegas, restaurantes e eventos." *Rationale:* nomeia categoria e público em nove palavras, e é o que o site realmente entrega. Melhor para busca orgânica.
- **B** — "Um sistema para cada operação: balcão, salão e evento." *Rationale:* pinta a cena (três lugares concretos em vez de "empresas"). Mais memorável, menos indexável.
- **C** — manter a atual e corrigir só o subhead. *Rationale:* se a marca já estiver sendo lembrada por essa frase em anúncio ou apresentação, trocar custa mais do que ganha.

Recomendo A. O subhead faz o trabalho que a headline não faz:

> Três produtos para operações específicas, com implantação acompanhada. Desenvolvimento sob medida quando o seu processo não cabe em nenhum deles.

**3.2 Subhead faz três trabalhos — `Home.tsx:102`**
"Empresa de tecnologia" repete o que o H1 deveria dizer; a lista de segmentos se sobrepõe ao bloco de serviços; "implantação acompanhada e suporte próximo" é a terceira ideia. Duas frases cabem aqui, três não. Correção acima.

**3.3 "três frentes, cada uma contratada separadamente" — `Home.tsx:138`**
A terceira "frente" é "Implantação e suporte" (`:25`), que não é produto vendável à parte. A frase cria uma expectativa que a página não cumpre.

> Atuamos em duas frentes: produtos prontos por segmento e software sob medida. As duas incluem implantação acompanhada.

**3.4 Nome do produto muda em cada lugar**

| Onde | Como aparece |
|---|---|
| `adega.tsx:7` | Balcão Pro Adegas |
| `adega.tsx:27,64` | Balcão Pro |
| `contato.tsx:260` | Balcão Pro Adegas (PDV Offline & Fiado) |
| `floating-whatsapp.tsx:55` | Balcão Pro Adegas |
| `eventos.tsx:7` | Olhare Fotos & Eventos |
| `eventos.tsx:27` | Olhare |
| `contato.tsx:262` | Olhare Fotos (Mural TV via QR Code) |
| `floating-whatsapp.tsx:65` | Olhare Fotos & Eventos |

Escolher um nome por produto e usar em todos os lugares: **Balcão Pro**, **Vancod Restaurantes**, **Olhare**. O descritor longo vai só no título da página e no `<title>`. O padrão já existe e está certo em `suporte.tsx:21` e `contato.tsx:60` ("Balcão Pro, Vancod Restaurantes e Olhare") — é só replicá-lo.

**3.5 "Sem comissão sobre vendas" está enterrado — `Home.tsx:56`**
É o diferencial mais forte contra qualquer concorrente de PDV, e está na quarta pergunta do FAQ, no fim da página. Aparece em quatro lugares com quatro formulações (`Home.tsx:57`, `contato.tsx:111`, `product-layout.tsx:138`, `why-vancod.tsx:22`). Subir para o subhead da Home e para o primeiro bloco de cada página de segmento, com uma formulação única:

> Assinatura mensal. Sem comissão sobre o seu faturamento.

**3.6 Quatro rótulos de CTA para o mesmo destino**

| Rótulo | Onde |
|---|---|
| Falar com a equipe | `Home.tsx:115,238` |
| Agendar demonstração | `layout.tsx:105,149`, `product-layout.tsx:120,270`, `sobre.tsx:225`, `suporte.tsx:86`, fallbacks |
| Conhecer a Vancod | `testimonials-section.tsx:71` |
| Fale Conosco | `layout.tsx:146`, footer, `floating-whatsapp.tsx:145` |

Todos levam a `/contato`. Padronizar em **Agendar demonstração** (o mais específico, já majoritário) e reservar "Fale conosco" para links de nav/footer. Sob o botão principal da Home, uma linha de microcopy reduz o custo percebido do clique: "Sem compromisso." — e só isso, porque prazo de resposta é promessa que precisa ser cumprida (ver 6.1).

### Páginas de segmento — o H1 está no lugar errado

Nos três casos, o H1 é uma lista de funcionalidades e o parágrafo é a copy boa.

| Arquivo | H1 atual (feature) | Sugestão de H1 | Sub (o atual vira sub, sem reescrever) |
|---|---|---|---|
| `adega.tsx:10` | PDV ágil, controle de fiado e estoque organizado para adegas e distribuidoras. | O caixa da adega não para quando a internet cai. | PDV ágil, controle de fiado e estoque organizado para adegas e distribuidoras. |
| `restaurantes.tsx:10` | Comanda eletrônica, telas KDS para cozinha e integração de pedidos. | Salão, cozinha e delivery na mesma tela. | Comanda eletrônica, telas KDS para cozinha e integração de pedidos. |
| `eventos.tsx:10` | Mural de fotos e recados ao vivo na TV do evento via QR Code. | As fotos dos convidados na TV, sem ninguém baixar aplicativo. | Mural de fotos e recados ao vivo na TV do evento via QR Code. |

É troca de posição, não de conteúdo: nenhuma afirmação nova, nenhuma promessa a verificar. A headline passa a ser uma cena que o dono do negócio reconhece; a lista de features continua na página, onde ela é útil.

**3.7 Buzzwords que sobraram** (`product-layout.tsx`)
- `:89` "{name} • Solução Especializada" → "Solução Especializada" não significa nada. Trocar por um atributo verificável: "Para adegas e distribuidoras" / "Para salão e cozinha" / "Para eventos".
- `:37` "reduzir atritos" → "evitar erro manual" (o que já está na frase ao lado).
- `:39` "curva de aprendizado rápida" → "a equipe aprende em um turno" — **só se for verdade** (ver 6.1).
- `:45` "Suporte técnico humanizado" → "Atendimento direto com quem desenvolveu o sistema" (sustentado por `sobre.tsx:195`).
- `sobre.tsx:52` "ferramentas acessíveis e robustas" → "acessíveis" é ambíguo (preço ou usabilidade?) e "robustas" é buzzword. "Ferramentas com preço de assinatura e engenharia própria."

**3.8 "offline-first" aparece cinco vezes** (`adega.tsx:23,32`, `restaurantes.tsx:23`, `sobre.tsx:169`, `why-vancod.tsx:12`). É o diferencial mais forte do produto e a frase mais repetida do site. Escolher uma formulação canônica — **"o caixa funciona sem internet"** — e usá-la igual em todos os lugares; deixar o termo técnico uma vez só, na página de tecnologia do Sobre.

### Sobre

**3.9 H1 genérico — `sobre.tsx:35`**
"Desenvolvemos softwares que atendem à realidade do seu negócio." Diz menos que o H1 da Home e usa "realidade do seu negócio" como enchimento. Esta página responde outra pergunta: quem é a empresa. Sugestão:

> Uma empresa pequena fazendo software para empresas pequenas.

**3.10 "Durante anos acompanhamos empresários..." — `sobre.tsx:88`**
É uma afirmação sobre o tempo de existência da empresa, e o site não diz em nenhum lugar quando ela foi fundada. Ver 6.2.

**3.11 "CNPJ sob consulta comercial" — `sobre.tsx:141` e `transparency-section.tsx:73`**
Um campo rotulado "Cadastro Fiscal" que diz "sob consulta" lê como empresa sem CNPJ. Para vender para PME, CNPJ é sinal de confiança: ou aparece, ou o campo não existe.

### Contato

**3.12 "E-mail corporativo *" — `contato.tsx:225`**
Exclui quem usa Gmail, que é a maioria do público-alvo. Trocar por "E-mail *".

**3.13 O sujeito da frase muda no meio da sequência — `contato.tsx:92-111`**

| Passo | Título |
|---|---|
| 1 | Você apresenta sua operação |
| 2 | Você vê o produto funcionando |
| 3 | **Avaliamos** a solução adequada |
| 4 | Você decide com clareza |

Alinhar em "você": "3. Definimos o que você precisa" — e trocar "Você decide com clareza" por "Você decide sem pressão" (a clareza é o resultado, não a ação).

**3.14 "Sem pressão comercial, com contratos transparentes e sem comissão sobre suas vendas" — `contato.tsx:111`**
Terceira formulação do mesmo diferencial (ver 3.5). Usar a frase única.

### Suporte

**3.15 "plantão para atendimentos emergenciais" — `suporte.tsx:98`**
É um compromisso de nível de serviço, não uma frase de marketing. Se não existe plantão de verdade, é a promessa mais fácil de quebrar do site (ver 6.1).

---

## 4. P2 — polimento

- `Home.tsx:178` — "Como trabalhamos." com ponto final, enquanto todos os outros H2 não têm ("Perguntas Frequentes", "Por que escolher a Vancod?"). Remover o ponto.
- `Home.tsx:217` — "Esclarecimentos sobre a empresa, a implantação e o suporte." "Esclarecimentos" é palavra de documento. "Dúvidas sobre a empresa, a implantação e o suporte."
- `clients-section.tsx:16` — "Comunidade & Parceiros" usa "&" sem espaço; o resto do site usa "e".
- `sobre.tsx:19` — `<title>` "Sobre a Vancod Tecnologia • Nossa História e Propósito" tem 60+ caracteres e um bullet. O Google corta em ~60 e "Propósito" não é buscado por ninguém.
- `adega.tsx:76` — "padrão (Bematech, Elgin, Epson, Daruma, entre outras)" está ótimo; o mesmo nível de especificidade falta nas outras duas FAQs.
- `floating-whatsapp.tsx:49` — "Escolha o segmento de interesse para conversar com nossa equipe:" é instrução de interface escrita como frase de marketing. "Por segmento:" basta.
- `generic.tsx:19` — página 404 diz "Esta página está em processo de atualização ou não foi localizada." Trocar por "Esta página não existe." e listar os três produtos ali: é a única tela do site onde o visitante está perdido e precisa de rota.

---

## 5. Meta e SEO

| Página | Atual (renderizado) | Sugestão |
|---|---|---|
| Home (`Home.tsx:78`) | Software sob medida e soluções para empresas \| Vancod | Sistemas para adegas, restaurantes e eventos \| Vancod |
| Home `<description>` (`:79`) | A Vancod é uma empresa de tecnologia que desenvolve software sob medida e soluções para adegas, restaurantes, eventos e outros negócios. | Balcão Pro para adegas, Vancod Restaurantes para salão e cozinha, Olhare para eventos. Software sob medida com implantação acompanhada. |
| Adegas | Balcão Pro Adegas \| Vancod | Balcão Pro: PDV e fiado para adegas \| Vancod |
| Restaurantes | Vancod Restaurantes \| Vancod | Vancod Restaurantes: comanda, KDS e delivery \| Vancod |
| Eventos | Olhare Fotos & Eventos \| Vancod | Olhare: mural de fotos por QR Code para eventos \| Vancod |
| Sobre (`sobre.tsx:19`) | Sobre a Vancod Tecnologia • Nossa História e Propósito \| Vancod | Sobre a Vancod Tecnologia |

O sufixo " | Vancod" já é aplicado automaticamente em `seo.tsx:19`, então não é preciso repeti-lo nas strings — o problema das páginas de produto é a ausência do descritor, não da marca. `ProductLayout` usa `title={name}` (`product-layout.tsx:70`): passar `title` como prop separada resolve os três de uma vez.

---

## 6. O que não dá para escrever hoje (e o que liberaria)

Estas são as alegações que a auditoria **não** recomenda publicar sem a evidência ao lado.

**6.1 Prazos e níveis de serviço**
"Respondemos em até 1 dia útil", "a equipe aprende em um turno", "plantão emergencial", "suporte 24h".
*Libera com:* uma frase do dono confirmando que o compromisso existe e é cumprido. Prazo publicado vira obrigação contratual na prática.

**6.2 Tempo de existência**
"Durante anos acompanhamos empresários" (`sobre.tsx:88`).
*Libera com:* data de fundação real. Se a empresa tem menos de dois anos, o caminho é o oposto: assumir a juventude como vantagem (ver 2.2) em vez de sugerir tradição.

**6.3 Preço**
Nenhuma página diz quanto custa nem qual é o modelo além de "assinatura" no FAQ. Para PME brasileira, "quanto custa" é a primeira objeção e a causa mais comum de abandono antes do formulário.
*Libera com:* uma faixa ("a partir de R$ X/mês") ou uma política ("o valor depende do número de caixas e do módulo"). Qualquer uma das duas é melhor que a ausência.

**6.4 Resultados e números**
Nenhuma métrica de cliente aparece no site, e está certo.
*Libera com:* um único case com número medido antes e depois ("fila do balcão caiu de X para Y minutos"). Um caso com número vale mais que três depoimentos sem.

**6.5 Nomes de clientes**
*Libera com:* autorização escrita de cada um. A política em `testimonials-section.tsx:65` já está correta — mantê-la.

---

## 7. Ordem de execução

1. **Hoje, 30 min:** WhatsApp (2.1), canonical (2.4), "E-mail corporativo" (3.12), CNPJ (3.11).
2. **Esta semana:** colapsar a prova social (2.2), nomear os três produtos na Home (2.3), H1 + subhead da Home (3.1, 3.2).
3. **Próxima:** inverter H1/sub nas três páginas de segmento (seção "Páginas de segmento"), unificar nome dos produtos (3.4), subir "sem comissão" (3.5), unificar CTA (3.6).
4. **Depois:** decidir o destino dos componentes não publicados (2.5), metatags (5), polimento (4).

Cada item é independente. Nada aqui depende de contratar alguém, de esperar cliente novo ou de inventar dado.

---

## 8. Status da execução

**Aplicado:**

- 2.2 prova social colapsada em uma seção na Home; `clients-section.tsx`, `cases-section.tsx` e `testimonials-section.tsx` removidos.
- 2.3 os três produtos nomeados na Home, com link para cada página.
- 2.4 canonical corrigido: `ProductLayout` agora recebe `path` e monta a URL a partir dele.
- 3.1 / 3.2 H1 e subhead da Home reescritos; linha "Assinatura mensal, sem comissão sobre o seu faturamento" na primeira dobra.
- 3.3 "três frentes, contratada separadamente" substituído.
- 3.6 CTA unificado em "Agendar demonstração" na Home; H1 das três páginas de segmento trocado pela frase-benefício.
- 3.7 / 3.8 badge "Solução Especializada", "Suporte humanizado", "Esclarecimentos", "ferramentas acessíveis e robustas" e as duas repetições de "offline-first" corrigidos.
- 3.9 / 3.10 H1 do Sobre e "Durante anos"; 3.11 CNPJ removido das duas telas; 3.12 / 3.13 / 3.14 contato; 3.15 plantão removido.
- 4.2 / 4.3 / 4.5 / 4.6 polimento; 5 metatags; 404 passa a listar os três produtos.

**Pendente:**

- **2.1 WhatsApp** — falta o número comercial para preencher `config.ts:56`. Até lá a copy promete um canal que o site não abre.
- **2.5 componentes não publicados** — decisão de produto, não de copy.
- **6.3 preço** — falta a faixa de valor.
- `ProductLayout` ainda tem defaults mortos (`sectionTitle`, `workflowSteps`, `ctaTitle` etc.): as três páginas sobrescrevem todos, então as frases fracas que sobraram ali nunca aparecem na tela.

**Bloqueio de verificação:** `npm run build` e `npm run lint` não rodam neste checkout porque `tsconfig.json` faz `extends` de `../tsconfig.base.json`, que não existe aqui (e `../packages/vancod-ui` também não). A verificação das mudanças foi feita com bundle esbuild direto de `src/main.tsx`, que passa sem erro.

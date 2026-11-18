# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dono de adega, distribuidora de bebidas, restaurante ou organizador de eventos, de pequeno e médio porte, no Brasil. Ele decide a compra sozinho, costuma conversar pelo WhatsApp e avalia se o sistema aguenta a rotina real: fila no balcão, cozinha cheia, festa acontecendo.

## Product Purpose

Site institucional da Vancod Tecnologia. Ele precisa fazer o dono do negócio entender o que a Vancod vende e agendar uma demonstração ou uma conversa. Sucesso é um contato qualificado pelo formulário (`/contato`) ou, quando houver número, pelo WhatsApp.

## Positioning

A Vancod tem duas frentes de mesmo peso:

- **Produtos prontos por segmento:** Balcão Pro Adegas (`/adegas`), Vancod Restaurantes (`/restaurantes`) e Olhare Fotos & Eventos (`/olhare`).
- **Software sob medida:** sistemas desenvolvidos a partir do processo da empresa.

O que a diferencia: empresa pequena, e a implantação é feita por quem escreve o código. É assinatura mensal, sem comissão sobre o faturamento. O Balcão Pro funciona offline-first, ou seja, continua vendendo se a internet cair.

## Operating Context

- O visitante chega por anúncio, Google ou indicação, quase sempre pelo celular.
- Ele compara a Vancod com sistemas genéricos de PDV e de gestão de restaurante.
- Antes de contratar: apresentação da operação, demonstração, avaliação e decisão sem pressão (veja `src/pages/contato.tsx`).
- Depois de contratar: implantação guiada, treinamento da equipe e suporte por e-mail.

## Capabilities and Constraints

- **Balcão Pro:** PDV offline-first, combos com dedução de insumos, controle de fiado com limite por cliente e compatibilidade com impressoras Bematech, Elgin, Epson e Daruma.
- **Vancod Restaurantes:** comanda de salão, telas KDS para a cozinha e integração de pedidos de delivery.
- **Olhare:** mural de fotos e recados ao vivo na TV, com envio por QR Code, sem instalar aplicativo e com moderação.
- **Situação real:** parte dos produtos já roda com clientes, e outra parte está em piloto ou em desenvolvimento. Ainda não está registrado qual produto está em qual situação; confirmar antes de afirmar "em uso" para um produto específico.
- **WhatsApp:** `whatsappNumber` ainda está vazio em `src/lib/config.ts`. Não prometer atendimento por WhatsApp até existir número.
- **Dados da empresa:** razão social e CNPJ ainda não foram definidos (`config.ts`).

## Brand Commitments

- **Nome:** Vancod Tecnologia, com o logo em `public/assets/vancod-logo.webp`. Para fundo escuro, usar a marca em `public/assets/vancod-marca-dark.png`.
- **Voz:** frases curtas, português do dia a dia, nada de "soluções inovadoras". Convida sem pressionar e não promete o que não consegue provar. As linhas de referência estão em `docs/auditoria-copy.md`, seção "Não mexer".
- **Honestidade:** a empresa diz que está começando em vez de inventar logos.

## Evidence on Hand

- **Telas dos produtos (mockups, não capturas do sistema real):** `public/assets/adega-pdv.png`, `restaurantes-kds.png`, `olhare-mural.png`, `commerce-dashboard.png` e as variantes `*-br.png`. A `adega-pdv.png` tem somas erradas, por isso a Home usa só o recorte `adega-pdv-recorte.jpg`. Trocar por capturas reais quando houver.
- **Fotos de ambiente geradas:** `foto-adega.jpg`, `foto-restaurante.jpg`, `foto-eventos.jpg`, `foto-equipe.jpg` e `hero-bg.jpg`. São ilustrativas, não fotos de clientes.
- **Ausentes, e não podem ser inventados:** depoimentos, logos de clientes, cases, números de resultado, preços.

## Product Principles

1. **Dizer o que vende na primeira linha:** sistema para adega, restaurante ou evento, e sob medida.
2. **Toda promessa precisa de lastro no produto ou no processo.** Sem prova, a frase sai.
3. **Falar com o dono que está no balcão,** não com um comprador de TI.
4. **Um caminho claro para conversar:** agendar demonstração é sempre a ação principal.
5. **Assumir o tamanho da empresa como vantagem:** atendimento próximo, feito por quem constrói.

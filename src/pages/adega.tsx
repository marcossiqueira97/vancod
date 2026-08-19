import { ProductLayout } from '../components/product-layout';
import { Box, BarChart, Users, Receipt, WifiOff, Scale, Layers } from 'lucide-react';

export default function Adega() {
  return (
    <ProductLayout
      name="Balcão Pro Adegas"
      subdomain="adegas.vancod.com.br"
      primaryColor="text-slate-300"
      tagline="PDV ágil, controle de fiado e estoque organizado para adegas e distribuidoras."
      description="Atenda filas com rapidez no balcão, lance combos com dedução automática de insumos, organize o controle de fiado e continue vendendo normalmente mesmo se a internet oscilar."
      screenshots={['/assets/adega-br.png', '/assets/adega-pdv.png']}
      sectionTitle="Projetado para a rotina prática do seu balcão."
      sectionSubtitle="Evite filas desnecessárias e desorganização de cadernos. Registre vendas com agilidade, envie faturas no WhatsApp e acompanhe suas entradas diárias."
      workflowTitle={<>Fluxo de atendimento ágil <br />para horários de pico.</>}
      workflowSubtitle="Interface limpa com poucos cliques para que sua equipe atenda rápido e sem confusão."
      workflowSteps={[
        { step: 1, title: 'Leitura ou Seleção de Combo', desc: 'Ao bipar ou selecionar uma bebida/combo, o sistema deduz automaticamente os insumos correspondentes no estoque.' },
        { step: 2, title: 'Forma de Pagamento ou Fiado', desc: 'Receba via Pix, Cartão ou lance no fiado do cliente com limite pré-estabelecido.' },
        { step: 3, title: 'Emissão e Conclusão', desc: 'Abertura de gaveta e impressão rápida de comprovante com atualização instantânea de caixa.' }
      ]}
      workflowBullets={[
        'Operação offline-first: o caixa não para caso a internet caia',
        'Controle organizado de clientes no fiado com extrato no WhatsApp',
        'Compatível com impressoras térmicas e leitores de código de barras USB'
      ]}
      ctaTitle="Deseja ver o Balcão Pro funcionando?"
      ctaSubtitle="Agende uma demonstração prática e veja como o sistema se adapta à rotina da sua adega ou distribuidora."
      features={[
        {
          icon: <WifiOff />,
          title: "Operação Offline-First",
          desc: "Se a internet do estabelecimento oscilar ou cair, seu caixa continua registrando compras e imprimindo normalmente sem travar a fila."
        },
        {
          icon: <Layers />,
          title: "Dedução Automática de Combos",
          desc: "Cadastre combos (ex: Destilado + Energéticos + Gelo) e o sistema deduz cada insumo unitário no estoque sem necessidade de baixa manual."
        },
        {
          icon: <Users />,
          title: "Gestão Digital de Fiado",
          desc: "Defina limites de crédito por cliente, consulte históricos de compras e gere extratos organizados para envio direto pelo WhatsApp."
        },
        {
          icon: <Receipt />,
          title: "Fechamento e Conferência de Caixa",
          desc: "Acompanhe entradas por modalidade (Pix, Dinheiro, Cartão) e identifique divergências com relatórios claros por turno."
        },
        {
          icon: <Scale />,
          title: "Controle de Vasilhames Retornáveis",
          desc: "Monitore a entrada e saída de cascos e garrafas retornáveis para evitar prejuízos com embalagens perdidas."
        },
        {
          icon: <BarChart />,
          title: "Relatórios de Vendas e Giro",
          desc: "Visualize as bebidas mais vendidas, horários de maior movimento e produtos que precisam de reposição de estoque."
        }
      ]}
      faqItems={[
        {
          question: "O sistema funciona sem internet?",
          answer: "Sim. O Balcão Pro possui arquitetura offline-first instalada localmente no computador. Caso a conexão de internet caia, o caixa segue registrando compras e imprimindo comprovantes normalmente."
        },
        {
          question: "Como funciona a venda de combos?",
          answer: "Você pode criar composições prévias (por exemplo, 1 garrafa de whisky + 4 energéticos + 1 pacote de gelo). Ao vender o combo, o estoque de cada um desses três itens é atualizado automaticamente."
        },
        {
          question: "Como é feito o controle de fiado?",
          answer: "O sistema permite cadastrar o cliente, estipular um limite de crédito e registrar as compras na conta dele. É possível gerar um extrato detalhado para acompanhamento e envio no WhatsApp."
        },
        {
          question: "Quais impressoras e leitores são compatíveis?",
          answer: "É compatível com qualquer leitor de código de barras USB comum e impressoras térmicas padrão (Bematech, Elgin, Epson, Daruma, entre outras)."
        }
      ]}
    />
  );
}

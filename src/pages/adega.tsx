import { ProductLayout } from '../components/product-layout';
import { Box, BarChart, Truck, Users, Receipt, WifiOff, ShieldCheck, Scale, Layers, MessageSquare } from 'lucide-react';

export default function Adega() {
  return (
    <ProductLayout
      name="Balcão Pro Adegas"
      subdomain="adegas.vancod.com.br"
      primaryColor="text-slate-300"
      tagline="O sistema feito sob medida para quem vende bebida e não quer perder tempo nem dinheiro."
      description="Atenda filas rapidamente na sexta-feira à noite, lance combos sem erro de estoque, controle o fiado sem caderninho e continue vendendo normalmente mesmo se a internet da sua rua cair."
      screenshots={['/assets/adega-br.png', '/assets/adega-pdv.png']}
      sectionTitle="Feito para a correria real do seu balcão."
      sectionSubtitle="Esqueça sistemas lentos que travam no horário de pico. Passe vendas em segundos, receba no fiado pelo WhatsApp e saiba exatamente quanto lucrou no dia."
      workflowTitle={<>Atenda a fila da sexta <br/>sem enrolação.</>}
      workflowSubtitle="Passagem de venda ultrarrápida para o seu cliente pegar a bebida gelada e ir embora satisfeito."
      workflowSteps={[
        { step: 1, title: 'Bipou o Combo', desc: 'Bipou a garrafa, o sistema já dá baixa no combo, nos energéticos e no gelo sozinho.' },
        { step: 2, title: 'Pix, Cartão ou Fiado', desc: 'Receba na hora ou registre no fiado com limite de crédito e fatura direto no WhatsApp.' },
        { step: 3, title: 'Gaveta Aberta & Recibo', desc: 'A gaveta de dinheiro abre automaticamente e a nota sai sem nenhuma travamento.' }
      ]}
      workflowBullets={[
        'Nunca para de vender: funciona normal no caixa mesmo sem internet',
        'Fim do caderninho: controle de fiado organizado com cobrança no WhatsApp',
        'Lucro real na tela: saiba exatamente quanto ganhou em cada bebida e combo'
      ]}
      ctaTitle="Pronto para faturar mais e organizar sua adega?"
      ctaSubtitle="Fale com nosso time e veja como o Balcão Pro deixa a sua operação rápida e lucrativa desde o primeiro dia."
      features={[
        {
          icon: <WifiOff />,
          title: "Caixa que Nunca Para (Mesmo sem Internet)",
          desc: "Se o Wi-Fi cair no meio do movimento da noite, seu caixa continua passando vendas, abrindo a gaveta e imprimindo sem travar."
        },
        {
          icon: <Layers />,
          title: "Combos Automáticos (Whisky + Energético + Gelo)",
          desc: "Venda o combo fechado e o sistema dá baixa automática nas garrafas e latas individuais no estoque sem você ter que calcular nada."
        },
        {
          icon: <Users />,
          title: "Fim do Caderninho de Fiado",
          desc: "Coloque limite de valor para cada cliente, saiba quem tá devendo e envie o extrato com a conta pronta direto para o WhatsApp dele."
        },
        {
          icon: <Receipt />,
          title: "Fechamento de Caixa sem Furo",
          desc: "Saiba exatamente quanto entrou no Pix, Cartão e Dinheiro no final do turno. O sistema te mostra se sobrou ou faltou centavo."
        },
        {
          icon: <Scale />,
          title: "Controle de Vasilhames & Cascos",
          desc: "Acompanhe as garrafas retornáveis de cerveja e litrão para não perder dinheiro com embalagem sumindo na distribuidora."
        },
        {
          icon: <BarChart />,
          title: "Relatório de Lucro Real por Bebida",
          desc: "Descubra quais bebidas colocam mais dinheiro no seu bolso, veja o lucro exato do dia e a hora certa de comprar do fornecedor."
        }
      ]}
      faqItems={[
        {
          question: "O sistema funciona se a internet da adega cair?",
          answer: "Funciona 100%! O Balcão Pro fica instalado no seu computador. Mesmo se a rua inteira ficar sem internet, seu caixa continua vendendo, abrindo a gaveta de dinheiro e imprimindo comprovante normalmente."
        },
        {
          question: "Como funciona a venda de combos (ex: Whisky + Red Bull)?",
          answer: "Você bipa o combo e o preço sai fechado na hora. O sistema cuida de tirar 1 garrafa de whisky, 4 energéticos e 1 saco de gelo do seu estoque sozinho."
        },
        {
          question: "Como o sistema me ajuda a cobrar quem compra no fiado?",
          answer: "Você marca a venda no nome do cliente. O sistema guarda a dívida, não deixa passar do limite que você escolheu e gera um link de cobrança pronto para mandar no WhatsApp dele."
        },
        {
          question: "Funciona com leitor de código de barras e impressora térmica?",
          answer: "Sim! Funciona com qualquer leitor USB de código de barras, impressora de cupom (Bematech, Elgin, Daruma) e balança de gelo/petisco."
        }
      ]}
    />
  );
}

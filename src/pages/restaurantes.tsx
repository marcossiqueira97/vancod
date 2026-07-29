import { ProductLayout } from '../components/product-layout';
import { Utensils, QrCode, MonitorPlay, CreditCard, ChefHat, Laptop, Pizza, ShoppingBag, Truck, Smartphone } from 'lucide-react';

export default function Restaurantes() {
  return (
    <ProductLayout
      name="Vancod Restaurantes"
      subdomain="restaurantes.vancod.com.br"
      primaryColor="text-slate-300"
      tagline="O sistema para restaurante que acaba com a confusão da cozinha e acelera o atendimento."
      description="Da comanda do garçom na mesa ao pedido do iFood, sua cozinha recebe tudo organizado em telas digitais sem papéis sumindo e sem atrasos no prato."
      screenshots={['/assets/restaurantes-br.png', '/assets/restaurantes-kds.png']}
      sectionTitle="Sua cozinha e seu salão rodando em perfeita sintonia."
      sectionSubtitle="Chega de impressoras travando, comandas de papel rasgadas e erros no iFood. Acelere o giro das mesas e atenda mais clientes por noite."
      workflowTitle={<>Do pedido à mesa <br/>em tempo recorde.</>}
      workflowSubtitle="Um fluxo simples que elimina atrasos e gritaria na cozinha durante os horários de pico."
      workflowSteps={[
        { step: 1, title: 'Garçom ou iFood', desc: 'O garçom lança o pedido pelo celular ou o iFood entra direto sem precisar digitar nada.' },
        { step: 2, title: 'Cozinha na Tela', desc: 'Cada setor (Cozinha, Bar, Forno) recebe o pedido na tela com aviso de tempo de preparo.' },
        { step: 3, title: 'Prato Quente na Mesa', desc: 'Prato pronto avisado na hora, conta dividida sem erro e mesa liberada rápido.' }
      ]}
      workflowBullets={[
        'Caixa que continua vendendo e imprimindo mesmo se a internet oscilar',
        'Módulo especialista para pizzarias com meio-a-meio e bordas recheadas',
        'Integração oficial direta com o iFood para você não ter trabalho manual'
      ]}
      ctaTitle="Pronto para acabar com a confusão no seu restaurante?"
      ctaSubtitle="Conheça o Vancod Restaurantes e veja como organizar sua cozinha e aumentar seu faturamento."
      features={[
        {
          icon: <Laptop />,
          title: "Caixa e Cozinha que Não Param (Nuvem + Computador)",
          desc: "Instale o sistema no computador do restaurante para ter a garantia de que seu caixa e sua cozinha vão continuar funcionando normalmente mesmo em quedas de internet."
        },
        {
          icon: <Utensils />,
          title: "Atendimento Rápido de Mesas & Comandas",
          desc: "Atenda clientes no celular ou tablet, divida a conta por pessoa sem complicação e veja no mapa quais mesas estão livres ou ocupadas."
        },
        {
          icon: <MonitorPlay />,
          title: "Telas Digitais na Cozinha (Adeus Papelzinho Sumido)",
          desc: "Substitua papel de comanda por telas modernas no bar e na cozinha. Sua equipe sabe exatamente o que preparar e qual prato tá atrasado."
        },
        {
          icon: <Pizza />,
          title: "Especialista em Pizzarias (Meio-a-Meio e Bordas)",
          desc: "Monte pizzas com até 4 sabores, escolha bordas recheadas e adicionais facilmente, com cálculo automático do preço correto."
        },
        {
          icon: <ShoppingBag />,
          title: "iFood Direto no Caixa (Sem Digitar Nada)",
          desc: "Os pedidos do iFood entram sozinhos no seu sistema e vão direto para a produção na cozinha sem que ninguém precise redigitar."
        },
        {
          icon: <Truck />,
          title: "Controle de Delivery & Motoboys",
          desc: "Organize as entregas próprias, saiba qual motoboy levou o pedido e acompanhe a taxa de entrega de cada um sem surpresas no fim da noite."
        }
      ]}
      faqItems={[
        {
          question: "O sistema continua funcionando se o Wi-Fi do restaurante cair?",
          answer: "Sim! Com o aplicativo instalado no seu computador Windows, o caixa e as impressoras da cozinha continuam vendendo e emitindo pedidos normalmente sem depender da internet."
        },
        {
          question: "Como funciona para pizzarias com sabores meio-a-meio?",
          answer: "O sistema tem um módulo feito para pizzarias que aceita até 4 sabores por pizza, adiciona bordas recheadas e calcula o valor automático pelo sabor mais caro ou pela média."
        },
        {
          question: "Preciso digitar os pedidos que chegam do iFood?",
          answer: "Não! Os pedidos caem direto no caixa e já aparecem na tela da cozinha ou impressora automaticamente, economizando tempo e evitando erros."
        },
        {
          question: "Posso usar telas de TV ou tablet na cozinha no lugar de impressoras?",
          answer: "Pode sim! As telas KDS mostram os pedidos organizados por ordem de chegada com timers de cor que avisam se o prato tá demorando."
        }
      ]}
    />
  );
}

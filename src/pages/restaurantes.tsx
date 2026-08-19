import { ProductLayout } from '../components/product-layout';
import { Utensils, MonitorPlay, ChefHat, Laptop, Pizza, ShoppingBag, Truck } from 'lucide-react';

export default function Restaurantes() {
  return (
    <ProductLayout
      name="Vancod Restaurantes"
      subdomain="restaurantes.vancod.com.br"
      primaryColor="text-slate-300"
      tagline="Comanda eletrônica, telas KDS para cozinha e integração de pedidos."
      description="Do lançamento do garçom no salão ao pedido que entra pelo delivery, sua cozinha recebe tudo de forma organizada em telas digitais, reduzindo atrasos e falhas de comunicação."
      screenshots={['/assets/restaurantes-br.png', '/assets/restaurantes-kds.png']}
      sectionTitle="Comunicação integrada entre salão, caixa e cozinha."
      sectionSubtitle="Elimine comandas de papel ilegíveis e erros na transmissão de pedidos. Acompanhe o tempo de preparo de cada praça e agilize o atendimento aos clientes."
      workflowTitle={<>Fluxo organizado <br />do pedido à entrega.</>}
      workflowSubtitle="Processo padronizado que traz clareza para garçons, cozinheiros e caixas durante os períodos de maior movimento."
      workflowSteps={[
        { step: 1, title: 'Lançamento no Salão ou Delivery', desc: 'O garçom lança o pedido pelo celular/tablet ou o pedido de delivery é recebido no sistema.' },
        { step: 2, title: 'Exibição nas Telas KDS', desc: 'Cada setor (Cozinha, Bar, Forno) visualiza os itens correspondentes com indicador de tempo de preparo.' },
        { step: 3, title: 'Finalização e Fechamento', desc: 'Prato marcado como pronto, conta dividida por pessoa ou consumo e mesa liberada com rapidez.' }
      ]}
      workflowBullets={[
        'Módulo de PDV com operação offline-first para não travar o caixa',
        'Módulo para pizzarias com suporte a frações (meio-a-meio) e bordas',
        'Divisão automática de contas por cliente ou valor igualitário'
      ]}
      ctaTitle="Deseja ver o Vancod Restaurantes na prática?"
      ctaSubtitle="Agende uma demonstração com nossa equipe e conheça as ferramentas de gestão de mesas, KDS e delivery."
      features={[
        {
          icon: <Laptop />,
          title: "Caixa com Funcionamento Local",
          desc: "O módulo de frente de caixa permite registrar fechamentos de contas e emitir comprovantes mesmo em momentos de oscilação de rede."
        },
        {
          icon: <Utensils />,
          title: "Gestão de Mesas e Comandas",
          desc: "Acompanhe mesas livres, ocupadas ou em fechamento com mapa visual, divisão de conta e controle de consumo por garçom."
        },
        {
          icon: <MonitorPlay />,
          title: "Telas KDS na Cozinha",
          desc: "Substitua tickets de papel por telas digitais organizadas por ordem de chegada com alertas visuais de tempo de preparo."
        },
        {
          icon: <Pizza />,
          title: "Módulo Especializado para Pizzarias",
          desc: "Cadastre pizzas com múltiplos sabores (meio-a-meio), tamanhos, massas, bordas recheadas e adicionais com cálculo automático."
        },
        {
          icon: <ShoppingBag />,
          title: "Centralização de Pedidos de Delivery",
          desc: "Receba pedidos próprios ou de plataformas em um único painel e envie diretamente para a fila de produção da cozinha."
        },
        {
          icon: <Truck />,
          title: "Controle de Entregas e Motoboys",
          desc: "Organize pedidos despachados, vincule entregadores e acompanhe taxas de entrega e fechamento de turnos sem confusão."
        }
      ]}
      faqItems={[
        {
          question: "O sistema de caixa funciona em caso de queda de internet?",
          answer: "Sim. O módulo de caixa pode operar de forma local no computador, permitindo continuar registrando recebimentos e imprimindo comprovantes de pagamento."
        },
        {
          question: "Como funciona para pizzarias que vendem pizzas de dois ou mais sabores?",
          answer: "O sistema possui regras próprias para pizzarias, permitindo dividir a pizza em frações (ex: 2 ou 4 sabores), escolher bordas recheadas e calcular o preço com base no sabor de maior valor ou na média configurada."
        },
        {
          question: "Posso utilizar telas de TV ou tablets na cozinha?",
          answer: "Sim. A interface KDS pode ser acessada em Smart TVs, monitores conectados ou tablets posicionados nas bancadas de preparo."
        },
        {
          question: "Como é feita a divisão de contas de mesas?",
          answer: "O sistema calcula a divisão da conta de forma automática, seja por valor igual entre o número de pessoas ou por itens consumidos individualmente."
        }
      ]}
    />
  );
}

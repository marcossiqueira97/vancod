import { ProductLayout } from '../components/product-layout';
import { QrCode, Tv, ShieldCheck, Download, Camera, Heart, BookOpen, Sparkles } from 'lucide-react';

export default function Eventos() {
  return (
    <ProductLayout
      name="Olhare"
      subdomain="olhare.vancod.com.br"
      primaryColor="text-slate-300"
      tagline="A plataforma que transforma as fotos dos convidados na maior atração da sua festa."
      description="Seus convidados tiram fotos pelo celular, escaneiam o QR Code na mesa e veem suas memórias e recados aparecerem ao vivo no telão da festa em segundos."
      screenshots={['/assets/olhare-br.png', '/assets/olhare-mural.png']}
      sectionTitle="Sua festa viva em cada canto do salão."
      sectionSubtitle="O fotógrafo oficial tira as fotos tradicionais. O Olhare captura os momentos mais espontâneos, divertidos e emocionantes de quem você ama."
      workflowTitle={<>Sem baixar aplicativo. <br/>Sem complicação.</>}
      workflowSubtitle="Até a vovó consegue participar em segundos sem precisar cadastrar nada."
      workflowSteps={[
        { step: 1, title: 'Aponte o Celular', desc: 'Totens elegantes espalhados pelas mesas da festa chamam a atenção dos convidados.' },
        { step: 2, title: 'Envie a Foto ou Recado', desc: 'Sem baixar app, o convidado tira a foto ou grava um recado carinhoso direto pelo navegador.' },
        { step: 3, title: 'Ao Vivo na TV da Festa', desc: 'A foto aprovada entra com animação no telão ou TV, fazendo todo mundo sorrir.' }
      ]}
      workflowBullets={[
        '100% no navegador do celular, zero download de aplicativo',
        'Moderação total em tempo real para aprovar o que vai pro telão',
        'Baixe todas as fotos em alta qualidade ao terminar o evento'
      ]}
      ctaTitle="Quer tornar o seu evento inesquecível?"
      ctaSubtitle="Crie a galeria do seu evento agora e surpreenda seus convidados com a transmissão ao vivo."
      features={[
        {
          icon: <QrCode />,
          title: "Envio por QR Code (Zero Instalação)",
          desc: "O convidado só precisa apontar a câmera do celular para o cartão na mesa e já pode enviar fotos e vídeos direto pelo navegador."
        },
        {
          icon: <Tv />,
          title: "Transmissão de Fotos ao Vivo na TV / Telão",
          desc: "As fotos enviadas aparecem no telão ou Smart TV da festa em alta definição, criando um momento de interação constante."
        },
        {
          icon: <ShieldCheck />,
          title: "Painel de Moderação (Você Escolhe o que Aparece)",
          desc: "Você ou a equipe do cerimonial aprovam as fotos na tela do celular antes que elas apareçam na TV da festa."
        },
        {
          icon: <Camera />,
          title: "Desafios Fotográficos Divertidos",
          desc: "Crie missões animadas para os convidados ('Foto com os noivos', 'Foto fazendo brinde', 'Foto na pista de dança')."
        },
        {
          icon: <Heart />,
          title: "Mural de Recados Espontâneos",
          desc: "Guarde palavras de carinho, votos e felicitações que acompanham as fotos de cada amigo e familiar."
        },
        {
          icon: <BookOpen />,
          title: "Livro de Memórias & Download Completo",
          desc: "Ao final da festa, baixe todas as fotos em alta resolução em 1 clique e gere um lindo álbum diagramado em PDF para imprimir."
        }
      ]}
      faqItems={[
        {
          question: "Os convidados precisam baixar algum aplicativo no celular?",
          answer: "Não precisa baixar nada! O Olhare roda direto pelo navegador de qualquer celular (iPhone ou Android). É só escanear o QR Code da mesa e usar."
        },
        {
          question: "E se alguém mandar uma foto imprópria ou brincadeira sem graça?",
          answer: "Você tem controle total! Todas as fotos passam primeiro pelo painel de moderação no celular do cerimonial ou anfitrião, que decide o que vai pro telão."
        },
        {
          question: "Como coloco as fotos para passar na TV ou no telão do salão?",
          answer: "O Olhare gera um link especial de TV que você abre na Smart TV do salão ou no notebook conectado ao telão por cabo HDMI."
        },
        {
          question: "Como recebo as fotos todas depois que a festa acabar?",
          answer: "Você pode baixar a pasta compactada com todas as fotos e vídeos em altíssima qualidade com apenas um clique no seu painel."
        }
      ]}
    />
  );
}

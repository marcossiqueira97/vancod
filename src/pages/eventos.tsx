import { ProductLayout } from '../components/product-layout';
import { QrCode, Tv, ShieldCheck, Download, Camera, Heart, BookOpen } from 'lucide-react';

export default function Eventos() {
  return (
    <ProductLayout
      name="Olhare Fotos & Eventos"
      subdomain="olhare.vancod.com.br"
      primaryColor="text-slate-300"
      tagline="Mural de fotos e recados ao vivo na TV do evento via QR Code."
      description="Seus convidados escaneiam o QR Code na mesa pelo celular, enviam fotos e mensagens que passam por moderação prévia e aparecem ao vivo na TV ou telão da festa."
      screenshots={['/assets/olhare-br.png', '/assets/olhare-mural.png']}
      sectionTitle="Interação espontânea e memórias registradas."
      sectionSubtitle="Enquanto o fotógrafo oficial cuida dos registros formais, o Olhare reúne os momentos espontâneos e descontraídos capturados pelas pessoas que você convidou."
      workflowTitle={<>Acesso direto no navegador, <br />sem baixar aplicativo.</>}
      workflowSubtitle="Experiência simples pensada para que qualquer convidado participe em poucos segundos."
      workflowSteps={[
        { step: 1, title: 'QR Code na Mesa', desc: 'O convidado aponta a câmera do celular para o cartão na mesa do evento.' },
        { step: 2, title: 'Envio de Foto ou Recado', desc: 'Diretamente pelo navegador, ele seleciona uma foto ou escreve uma mensagem de carinho.' },
        { step: 3, title: 'Moderação & Exibição na TV', desc: 'A foto aprovada no painel de moderação é transmitida na Smart TV ou telão do salão.' }
      ]}
      workflowBullets={[
        '100% web: não exige que o convidado baixe apps nas lojas',
        'Painel de moderação para aprovar ou rejeitar mídias antes da exibição',
        'Download completo da galeria em alta resolução ao término do evento'
      ]}
      ctaTitle="Deseja conhecer o Olhare para o seu evento?"
      ctaSubtitle="Agende uma demonstração e veja como funciona o mural de transmissão ao vivo e a moderação de fotos."
      features={[
        {
          icon: <QrCode />,
          title: "Envio por QR Code (Sem App)",
          desc: "Basta escanear o QR Code com a câmera do celular. O convidado acessa a galeria do evento pelo navegador em segundos."
        },
        {
          icon: <Tv />,
          title: "Transmissão em Smart TVs e Telões",
          desc: "O mural de fotos é exibido de forma fluida em telas conectadas por navegador ou cabo de vídeo no salão do evento."
        },
        {
          icon: <ShieldCheck />,
          title: "Painel de Moderação em Tempo Real",
          desc: "Controle total sobre o que é exibido: organizadores ou cerimonialistas aprovam as fotos pelo celular antes de irem para a TV."
        },
        {
          icon: <Heart />,
          title: "Mural de Recados e Votos",
          desc: "Convidados podem anexar mensagens de carinho, votos aos noivos ou felicitações que acompanham as fotos na tela."
        },
        {
          icon: <Camera />,
          title: "Missões e Desafios de Fotos",
          desc: "Crie sugestões divertidas para incentivar os convidados a fotografarem momentos específicos da celebração."
        },
        {
          icon: <Download />,
          title: "Download Completo da Galeria",
          desc: "Ao final da festa, os anfitriões podem baixar todos os arquivos originais em alta resolução com um único clique."
        }
      ]}
      faqItems={[
        {
          question: "Os convidados precisam instalar algum aplicativo?",
          answer: "Não. O Olhare funciona 100% no navegador de qualquer smartphone (iOS e Android). O convidado só precisa apontar a câmera para o QR Code."
        },
        {
          question: "Como garantir que fotos inadequadas não apareçam no telão?",
          answer: "O sistema possui um painel de moderação exclusivo. Todas as fotos enviadas ficam retidas até que um responsável (anfitrião ou cerimonial) clique em aprovar."
        },
        {
          question: "Como é feita a conexão na TV ou telão?",
          answer: "Basta abrir o link do mural no navegador da Smart TV ou em um notebook conectado ao telão por cabo HDMI."
        },
        {
          question: "As fotos originais ficam salvas em alta qualidade?",
          answer: "Sim. Ao término do evento, os organizadores têm acesso a uma pasta com todas as fotos e mensagens enviadas pelos convidados para download."
        }
      ]}
    />
  );
}

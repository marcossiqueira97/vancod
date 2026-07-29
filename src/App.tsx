import { Layout } from './components/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/home';
import Adega from './pages/adega';
import Restaurantes from './pages/restaurantes';
import Commerce from './pages/commerce';
import Eventos from './pages/eventos';
import Sobre from './pages/sobre';
import Termos from './pages/termos';
import Privacidade from './pages/privacidade';
import Contato from './pages/contato';
import Suporte from './pages/suporte';
import GenericPage from './pages/generic';
import ScrollToTop from './components/scroll-to-top';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adega" element={<Adega />} />
            <Route path="/adegas" element={<Adega />} />
            <Route path="/restaurantes" element={<Restaurantes />} />
            <Route path="/commerce" element={<Commerce />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/olhare" element={<Eventos />} />
            
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/termos" element={<Termos />} />
            <Route path="/privacidade" element={<Privacidade />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="*" element={<GenericPage title="Página não encontrada" />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}

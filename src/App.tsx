import { Layout } from './components/layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Termos from './pages/termos';
import Privacidade from './pages/privacidade';
import Contato from './pages/contato';
import Suporte from './pages/suporte';
import GenericPage from './pages/generic';
import ScrollToTop from './components/scroll-to-top';
import { AnalyticsTracker } from './components/analytics-tracker';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnalyticsTracker />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            
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

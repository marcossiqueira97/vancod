import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Wifi, 
  WifiOff, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  ChefHat, 
  ShoppingBag, 
  QrCode, 
  Tv, 
  Heart, 
  MessageSquare, 
  ArrowRight,
  RotateCcw,
  Smartphone,
  Layers,
  Send,
  Plus
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function InteractiveSystemSimulator() {
  const [activeTab, setActiveTab] = useState<'adega' | 'restaurante' | 'olhare'>('adega');

  // Adega Simulation State
  const [isOffline, setIsOffline] = useState(false);
  const [adegaCart, setAdegaCart] = useState([
    { id: 1, name: 'Combo Whisky Red Label + 4 Red Bull + Gelo', price: 149.90, qty: 1 }
  ]);
  const [adegaSuccess, setAdegaSuccess] = useState<string | null>(null);

  // Restaurante Simulation State
  const [kdsOrders, setKdsOrders] = useState([
    { id: '#4820', table: 'Mesa 04', item: 'Pizza Grande Meio Calabresa / Meio 4 Queijos', time: '04 min', status: 'preparando', origin: 'Salão' },
    { id: '#4821', table: 'iFood #9182', item: '2x Smash Burger Bacon + Batata Rústica', time: '08 min', status: 'pronto', origin: 'iFood' },
  ]);
  const [kdsMessage, setKdsMessage] = useState<string | null>(null);

  // Olhare Simulation State
  const [muralPhotos, setMuralPhotos] = useState([
    { id: 1, author: 'Lucas & Camila', text: 'Parabéns aos noivos! Festa incrível! 🥂❤️', time: 'Agora', reactions: 14 },
    { id: 2, author: 'Tia Bete', text: 'Muito amor e bênçãos nessa nova etapa!', time: 'Há 2 min', reactions: 29 },
  ]);
  const [moderationQueue, setModerationQueue] = useState<string | null>(null);

  // Actions for Adega
  const handleAddCombo = () => {
    setAdegaCart(prev => [
      ...prev,
      { id: Date.now(), name: 'Pack Cerveja Heineken 350ml (12 un)', price: 64.90, qty: 1 }
    ]);
  };

  const handleFinalizeAdegaSale = (type: string) => {
    setAdegaSuccess(`✅ Venda autorizada via ${type}! Gaveta aberta, estoque atualizado (-1 Whisky, -4 Red Bull, -1 Gelo).`);
    setTimeout(() => setAdegaSuccess(null), 4500);
  };

  // Actions for Restaurante
  const handleSimulateIfood = () => {
    const newId = `#${Math.floor(1000 + Math.random() * 9000)}`;
    setKdsOrders(prev => [
      { id: newId, table: 'iFood Auto', item: '1x Parmegiana Especial de Alcatra + Arroz', time: '01 min', status: 'preparando', origin: 'iFood' },
      ...prev
    ]);
    setKdsMessage(`⚡ Novo pedido iFood ${newId} caiu direto no KDS da cozinha sem digitação!`);
    setTimeout(() => setKdsMessage(null), 4000);
  };

  const handleAdvanceKds = (id: string) => {
    setKdsOrders(prev => prev.map(o => o.id === id ? { ...o, status: o.status === 'preparando' ? 'pronto' : 'despachado' } : o).filter(o => o.status !== 'despachado'));
  };

  // Actions for Olhare
  const handleSendPhotoGuest = () => {
    setModerationQueue('📸 Foto recebida do convidado! Aguardando aprovação do cerimonial...');
  };

  const handleApprovePhoto = () => {
    if (!moderationQueue) return;
    setMuralPhotos(prev => [
      { id: Date.now(), author: 'Convidado Mesa 08', text: 'Momento inesquecível! 📸✨', time: 'Agora', reactions: 1 },
      ...prev
    ]);
    setModerationQueue(null);
  };

  return (
    <section className="py-28 bg-slate-50 relative z-10 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-300 text-blue-800 text-xs font-bold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Simulador Interativo Vancod
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            Experimente a tecnologia <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              direto na tela.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Clique nos botões de simulação abaixo e veja como a engenharia Vancod resolve os maiores gargalos da sua rotina.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[
            { id: 'adega', label: 'Balcão Pro Adegas (PDV + Fiado)', icon: <Zap className="w-4 h-4" /> },
            { id: 'restaurante', label: 'Vancod Restaurantes (KDS + iFood)', icon: <ChefHat className="w-4 h-4" /> },
            { id: 'olhare', label: 'Olhare (Mural TV + QR Code)', icon: <QrCode className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/25 scale-105 ring-2 ring-blue-500/20'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Simulator Container */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
          
          {/* Top Bar of the Simulator */}
          <div className="flex flex-wrap items-center justify-between pb-6 mb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400">
                {activeTab === 'adega' && 'Balcão Pro POS v3.4 • Terminal 01 (Balcão Principal)'}
                {activeTab === 'restaurante' && 'Vancod KDS Hub • Cozinha & Expedição'}
                {activeTab === 'olhare' && 'Olhare Live Hub • Painel de Transmissão TV 4K'}
              </span>
            </div>

            {/* Offline toggle for Adega */}
            {activeTab === 'adega' && (
              <button
                onClick={() => setIsOffline(!isOffline)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  isOffline
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/50'
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                }`}
              >
                {isOffline ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5" />}
                <span>{isOffline ? 'MODO OFFLINE (Sem Internet - 100% Funcional)' : 'MODO ONLINE (Sincronizado na Nuvem)'}</span>
              </button>
            )}
          </div>

          {/* TAB 1: ADEGA SIMULATION */}
          {activeTab === 'adega' && (
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left POS Register (7 cols) */}
              <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                      <Zap className="w-4 h-4 text-cyan-400" /> Venda em Andamento
                    </h4>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-md border border-cyan-800">
                      Operação local: 0ms
                    </span>
                  </div>

                  <div className="space-y-3 mb-6 max-h-56 overflow-y-auto">
                    {adegaCart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-3 bg-slate-900/90 rounded-xl border border-slate-800 text-sm">
                        <div className="flex-1 pr-3">
                          <span className="font-semibold text-slate-100">{item.name}</span>
                          <span className="block text-[11px] text-cyan-400 font-mono mt-0.5">
                            Baixa em 3 insumos de estoque
                          </span>
                        </div>
                        <span className="font-mono font-bold text-emerald-400">
                          R$ {item.price.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleAddCombo}
                      className="flex items-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold border border-slate-700 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5 text-cyan-400" /> Bipar Mais Produtos
                    </button>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-slate-400 font-medium">Total da Compra:</span>
                    <span className="text-2xl font-mono font-extrabold text-emerald-400">
                      R$ {adegaCart.reduce((acc, i) => acc + i.price, 0).toFixed(2)}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => handleFinalizeAdegaSale('PIX')}
                      className="py-3 px-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 shadow-lg shadow-emerald-900/30"
                    >
                      <span>Pix QR Dinâmico</span>
                    </button>
                    <button
                      onClick={() => handleFinalizeAdegaSale('Cartão de Débito/Crédito')}
                      className="py-3 px-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 shadow-lg shadow-blue-900/30"
                    >
                      <span>Cartão / Tef</span>
                    </button>
                    <button
                      onClick={() => handleFinalizeAdegaSale('Fiado com Fatura WhatsApp')}
                      className="py-3 px-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-xs font-bold transition-all flex flex-col items-center gap-1 shadow-lg shadow-amber-900/30"
                    >
                      <span>Fiado no WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Simulation Insights (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <AnimatePresence>
                  {adegaSuccess && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-emerald-950/80 border border-emerald-500/60 rounded-2xl text-emerald-200 text-xs font-medium leading-relaxed"
                    >
                      {adegaSuccess}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <h5 className="font-bold text-sm text-cyan-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Por que isso muda sua adega:
                  </h5>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span><strong>0 Travamentos na Sexta:</strong> O software roda local em Rust + SQLite. A internet pode cair que seu caixa segue faturando.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Fim do Caderninho:</strong> Limite de fiado pré-aprovado e extrato formatado enviado ao WhatsApp do cliente em 1 toque.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Combos Desmembrados:</strong> Não precisa subtrair garrafas e latas na mão. O sistema deduz cada insumo sozinho.</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/adegas"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 rounded-xl font-extrabold text-xs transition-all shadow-lg"
                >
                  Conhecer Tudo Sobre o Balcão Pro Adegas <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* TAB 2: RESTAURANTE SIMULATION */}
          {activeTab === 'restaurante' && (
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left: KDS Kitchen Display (7 cols) */}
              <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                      <ChefHat className="w-4 h-4 text-pink-400" /> KDS Digital de Cozinha
                    </h4>
                    <button
                      onClick={handleSimulateIfood}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-bold transition-all shadow-md"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" /> Simular Pedido iFood
                    </button>
                  </div>

                  <div className="space-y-3 mb-4">
                    {kdsOrders.map((order) => (
                      <div key={order.id} className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 flex justify-between items-center">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-bold text-pink-400 bg-pink-950 px-2 py-0.5 rounded border border-pink-800">
                              {order.table}
                            </span>
                            <span className="text-xs font-mono text-slate-400">{order.id}</span>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {order.time}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-slate-200">{order.item}</p>
                        </div>
                        <button
                          onClick={() => handleAdvanceKds(order.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                            order.status === 'preparando'
                              ? 'bg-amber-600 hover:bg-amber-500 text-white'
                              : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                          }`}
                        >
                          {order.status === 'preparando' ? 'Marcar Pronto' : 'Despachar'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>⏱️ Tempo médio de cozinha: <strong>11 min</strong></span>
                  <span className="text-emerald-400 font-bold">✓ 0 pedidos atrasados</span>
                </div>
              </div>

              {/* Right: Simulation Insights (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <AnimatePresence>
                  {kdsMessage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-pink-950/80 border border-pink-500/60 rounded-2xl text-pink-200 text-xs font-medium leading-relaxed"
                    >
                      {kdsMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <h5 className="font-bold text-sm text-pink-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> Vantagens Reais no Food Service:
                  </h5>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span><strong>iFood Sem Retrabalho:</strong> Os pedidos entram direto no KDS da cozinha. Não precisa de ninguém para redigitar.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Divisão de Contas Instantânea:</strong> Divida a mesa por 2, 4 ou 10 pessoas em 1 clique sem briga no salão.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Pizzarias Especialistas:</strong> Até 4 sabores por pizza, adicionais e bordas recheadas calculadas sem erro.</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/restaurantes"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-pink-600 hover:bg-pink-500 text-white rounded-xl font-extrabold text-xs transition-all shadow-lg"
                >
                  Conhecer Vancod Restaurantes <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* TAB 3: OLHARE SIMULATION */}
          {activeTab === 'olhare' && (
            <div className="grid lg:grid-cols-12 gap-8">
              {/* Left: Live TV Mural Simulation (7 cols) */}
              <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-base font-extrabold text-white flex items-center gap-2">
                      <Tv className="w-4 h-4 text-purple-400" /> Telão da Festa em Tempo Real
                    </h4>
                    <button
                      onClick={handleSendPhotoGuest}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-xs font-bold transition-all shadow-md"
                    >
                      <Smartphone className="w-3.5 h-3.5" /> Simular Convidado Enviando Foto
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {muralPhotos.map((photo) => (
                      <div key={photo.id} className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-xs">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-bold text-purple-300">{photo.author}</span>
                          <span className="text-[10px] text-slate-500">{photo.time}</span>
                        </div>
                        <p className="text-slate-300 italic mb-2">"{photo.text}"</p>
                        <div className="flex items-center gap-1 text-pink-400 text-[11px] font-bold">
                          <Heart className="w-3 h-3 fill-pink-400" /> {photo.reactions} curtidas no telão
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {moderationQueue && (
                  <div className="p-3 bg-purple-950/70 border border-purple-500/50 rounded-xl flex items-center justify-between mt-2">
                    <span className="text-xs text-purple-200">{moderationQueue}</span>
                    <button
                      onClick={handleApprovePhoto}
                      className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded-md text-xs font-bold transition-all"
                    >
                      Aprovar para a TV
                    </button>
                  </div>
                )}
              </div>

              {/* Right: Simulation Insights (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800 space-y-3">
                  <h5 className="font-bold text-sm text-purple-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4" /> A Maior Atração do Evento:
                  </h5>
                  <ul className="space-y-2.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Zero Instalação:</strong> O convidado só aponta a câmera para o QR Code da mesa e já participa. Não precisa baixar app.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Moderação Prévia:</strong> Nenhuma foto imprópria vai para a TV sem a aprovação do cerimonial ou anfitrião.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span><strong>Download em HD:</strong> Ao fim do evento, os noivos baixam todas as fotos e vídeos em 1 clique.</span>
                    </li>
                  </ul>
                </div>

                <Link
                  to="/olhare"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-extrabold text-xs transition-all shadow-lg"
                >
                  Conhecer Tudo Sobre o Olhare <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

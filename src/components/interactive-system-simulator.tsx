import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  Wifi, 
  WifiOff, 
  CheckCircle2, 
  Clock, 
  ChefHat, 
  ShoppingBag, 
  QrCode, 
  Tv, 
  Heart, 
  ArrowRight,
  Smartphone,
  Plus,
  Info
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function InteractiveSystemSimulator() {
  const [activeTab, setActiveTab] = useState<'adega' | 'restaurante' | 'olhare'>('adega');

  // Adega Simulation State
  const [isOffline, setIsOffline] = useState(false);
  const [adegaCart, setAdegaCart] = useState([
    { id: 1, name: 'Combo Whisky + 4 Energéticos + Gelo', price: 149.90, desc: 'Dedução automática de 3 itens do estoque' }
  ]);
  const [adegaSuccess, setAdegaSuccess] = useState<string | null>(null);

  // Restaurante Simulation State
  const [kdsOrders, setKdsOrders] = useState([
    { id: '#104', table: 'Mesa 04', item: '1x Pizza Meio Calabresa / Meio 4 Queijos', time: '05 min', status: 'preparando' },
    { id: '#105', table: 'Delivery #89', item: '2x X-Burguer Artesanal + Batata Frita', time: '09 min', status: 'pronto' },
  ]);
  const [kdsMessage, setKdsMessage] = useState<string | null>(null);

  // Olhare Simulation State
  const [muralPhotos, setMuralPhotos] = useState([
    { id: 1, author: 'Mesa da Família', text: 'Parabéns ao casal! Festa maravilhosa!', time: '1 min atrás', reactions: 8 },
    { id: 2, author: 'Amigos da Faculdade', text: 'Brinde aos noivos! 🥂', time: '3 min atrás', reactions: 15 },
  ]);
  const [moderationQueue, setModerationQueue] = useState<string | null>(null);

  // Adega Actions
  const handleAddProduct = () => {
    setAdegaCart(prev => [
      ...prev,
      { id: Date.now(), name: 'Pack Cerveja 350ml (12 un)', price: 64.90, desc: 'Baixa imediata no estoque local' }
    ]);
  };

  const handleFinalizeAdegaSale = (type: string) => {
    setAdegaSuccess(`Venda registrada via ${type}. Estoque dos insumos atualizado e recibo pronto.`);
    setTimeout(() => setAdegaSuccess(null), 4000);
  };

  // Restaurante Actions
  const handleSimulateNewOrder = () => {
    const newId = `#${Math.floor(100 + Math.random() * 900)}`;
    setKdsOrders(prev => [
      { id: newId, table: 'Delivery Online', item: '1x Porção de Picanha na Chapa', time: '01 min', status: 'preparando' },
      ...prev
    ]);
    setKdsMessage(`Novo pedido ${newId} enviado diretamente para a tela da cozinha.`);
    setTimeout(() => setKdsMessage(null), 3500);
  };

  const handleAdvanceKds = (id: string) => {
    setKdsOrders(prev => prev.map(o => o.id === id ? { ...o, status: o.status === 'preparando' ? 'pronto' : 'entregue' } : o).filter(o => o.status !== 'entregue'));
  };

  // Olhare Actions
  const handleSendPhotoGuest = () => {
    setModerationQueue('Nova foto recebida do convidado. Aguardando aprovação no painel de moderação.');
  };

  const handleApprovePhoto = () => {
    if (!moderationQueue) return;
    setMuralPhotos(prev => [
      { id: Date.now(), author: 'Convidado', text: 'Momento especial registrado!', time: 'Agora', reactions: 1 },
      ...prev
    ]);
    setModerationQueue(null);
  };

  return (
    <section className="py-24 bg-slate-50 relative z-10 overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold mb-4">
            <Info className="w-3.5 h-3.5 text-blue-600" /> Demonstração Interativa de Fluxos
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Veja como as soluções funcionam na prática.
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Navegue pelos cenários interativos abaixo para entender como resolvemos os gargalos da operação diária.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-8">
          {[
            { id: 'adega', label: 'Balcão Pro (Adegas & Distribuidoras)', icon: <Zap className="w-4 h-4" /> },
            { id: 'restaurante', label: 'Vancod Restaurantes (Cozinha & Salão)', icon: <ChefHat className="w-4 h-4" /> },
            { id: 'olhare', label: 'Olhare (Fotos & Mural ao Vivo)', icon: <QrCode className="w-4 h-4" /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Simulator Container */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-800">
          
          {/* Header Bar */}
          <div className="flex flex-wrap items-center justify-between pb-5 mb-6 border-b border-slate-800 gap-4">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                <span className="w-2.5 h-2.5 rounded-full bg-slate-700" />
              </div>
              <span className="text-xs font-mono text-slate-400">
                {activeTab === 'adega' && 'Fluxo: Registro de Venda & Operação Offline'}
                {activeTab === 'restaurante' && 'Fluxo: Recebimento de Pedido & KDS da Cozinha'}
                {activeTab === 'olhare' && 'Fluxo: Envio por QR Code & Mural na TV'}
              </span>
            </div>

            {/* Offline toggle for Adega */}
            {activeTab === 'adega' && (
              <button
                onClick={() => setIsOffline(!isOffline)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isOffline
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-800 text-slate-300 border border-slate-700'
                }`}
              >
                {isOffline ? <WifiOff className="w-3.5 h-3.5" /> : <Wifi className="w-3.5 h-3.5 text-emerald-400" />}
                <span>{isOffline ? 'Simulando Queda de Internet (Operação Offline Ativa)' : 'Conectado (Clique para simular offline)'}</span>
              </button>
            )}
          </div>

          {/* TAB 1: ADEGA */}
          {activeTab === 'adega' && (
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-slate-200">Itens no Caixa:</span>
                    <button
                      onClick={handleAddProduct}
                      className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 rounded-lg border border-slate-700 transition-colors"
                    >
                      <Plus className="w-3 h-3 text-blue-400" /> Inserir Item
                    </button>
                  </div>

                  <div className="space-y-2 mb-4">
                    {adegaCart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center p-3 bg-slate-900 rounded-lg border border-slate-800/80 text-xs">
                        <div>
                          <span className="font-semibold text-slate-200 block">{item.name}</span>
                          <span className="text-slate-500 text-[11px]">{item.desc}</span>
                        </div>
                        <span className="font-mono font-bold text-slate-200">
                          R$ {item.price.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs text-slate-400">Total do Pedido:</span>
                    <span className="text-xl font-mono font-bold text-emerald-400">
                      R$ {adegaCart.reduce((acc, i) => acc + i.price, 0).toFixed(2)}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <button
                      onClick={() => handleFinalizeAdegaSale('Pix')}
                      className="py-2.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold border border-slate-700 transition-colors"
                    >
                      Pix
                    </button>
                    <button
                      onClick={() => handleFinalizeAdegaSale('Cartão')}
                      className="py-2.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg font-semibold border border-slate-700 transition-colors"
                    >
                      Cartão
                    </button>
                    <button
                      onClick={() => handleFinalizeAdegaSale('Fiado com comprovante WhatsApp')}
                      className="py-2.5 px-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold transition-colors"
                    >
                      Fiado no WhatsApp
                    </button>
                  </div>
                </div>
              </div>

              {/* Explanatory Panel */}
              <div className="lg:col-span-5 space-y-4">
                <AnimatePresence>
                  {adegaSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs leading-relaxed"
                    >
                      {adegaSuccess}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="font-bold text-sm text-slate-200">Como o Balcão Pro atende o seu negócio:</h4>
                  
                  <div className="space-y-3 text-xs text-slate-400">
                    <div>
                      <strong className="text-slate-300 block mb-0.5">• O Problema:</strong>
                      Sistemas que dependem de internet para passar compras travam nos horários de maior movimento.
                    </div>
                    <div>
                      <strong className="text-slate-300 block mb-0.5">• Como o sistema resolve:</strong>
                      O PDV roda de forma local. Mesmo sem conexão de rede, o caixa continua registrando vendas e imprimindo comprovantes.
                    </div>
                    <div>
                      <strong className="text-slate-300 block mb-0.5">• Benefício prático:</strong>
                      Seu atendimento não interrompe vendas nem gera filas no balcão por instabilidade de internet.
                    </div>
                  </div>
                </div>

                <Link
                  to="/adegas"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-xs border border-slate-700 transition-colors"
                >
                  Conhecer detalhes do Balcão Pro <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* TAB 2: RESTAURANTES */}
          {activeTab === 'restaurante' && (
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-slate-200">Telas da Cozinha (KDS):</span>
                    <button
                      onClick={handleSimulateNewOrder}
                      className="flex items-center gap-1 px-2.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-xs text-white rounded-lg transition-colors font-medium"
                    >
                      <ShoppingBag className="w-3 h-3" /> Simular Pedido Entrando
                    </button>
                  </div>

                  <div className="space-y-2.5 mb-4">
                    {kdsOrders.map((order) => (
                      <div key={order.id} className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex justify-between items-center text-xs">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-slate-200">{order.table}</span>
                            <span className="text-slate-500 font-mono">{order.id}</span>
                            <span className="text-slate-500 flex items-center gap-1">
                              <Clock className="w-3 h-3" /> {order.time}
                            </span>
                          </div>
                          <p className="text-slate-300 font-medium">{order.item}</p>
                        </div>
                        <button
                          onClick={() => handleAdvanceKds(order.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                            order.status === 'preparando'
                              ? 'bg-amber-600/80 hover:bg-amber-500 text-white'
                              : 'bg-emerald-600 hover:bg-emerald-500 text-white'
                          }`}
                        >
                          {order.status === 'preparando' ? 'Marcar Pronto' : 'Finalizar'}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500">
                  Os pedidos são organizados por ordem de chegada com aviso visual de tempo.
                </div>
              </div>

              {/* Explanatory Panel */}
              <div className="lg:col-span-5 space-y-4">
                <AnimatePresence>
                  {kdsMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 bg-blue-950/80 border border-blue-500/40 rounded-xl text-blue-300 text-xs leading-relaxed"
                    >
                      {kdsMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="font-bold text-sm text-slate-200">Como o Vancod Restaurantes atende a operação:</h4>
                  
                  <div className="space-y-3 text-xs text-slate-400">
                    <div>
                      <strong className="text-slate-300 block mb-0.5">• O Problema:</strong>
                      Comandas de papel rasgam, perdem-se ou exigem redigitação manual de pedidos que chegam do delivery.
                    </div>
                    <div>
                      <strong className="text-slate-300 block mb-0.5">• Como o sistema resolve:</strong>
                      Telas digitais na cozinha recebem os pedidos de salão e delivery de forma unificada e organizada.
                    </div>
                    <div>
                      <strong className="text-slate-300 block mb-0.5">• Benefício prático:</strong>
                      Comunicação direta entre atendimento e cozinha, reduzindo erros de pratos e atrasos no salão.
                    </div>
                  </div>
                </div>

                <Link
                  to="/restaurantes"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-xs border border-slate-700 transition-colors"
                >
                  Conhecer detalhes do Vancod Restaurantes <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* TAB 3: OLHARE */}
          {activeTab === 'olhare' && (
            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 bg-slate-950 rounded-xl p-5 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-bold text-slate-200">Mural Exibido na TV do Evento:</span>
                    <button
                      onClick={handleSendPhotoGuest}
                      className="flex items-center gap-1 px-2.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-xs text-white rounded-lg transition-colors font-medium"
                    >
                      <Smartphone className="w-3 h-3" /> Simular Envio via QR Code
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 mb-4">
                    {muralPhotos.map((photo) => (
                      <div key={photo.id} className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-bold text-slate-200">{photo.author}</span>
                          <span className="text-[10px] text-slate-500">{photo.time}</span>
                        </div>
                        <p className="text-slate-400 italic text-[11px] mb-2">"{photo.text}"</p>
                        <div className="flex items-center gap-1 text-pink-400 text-[10px]">
                          <Heart className="w-3 h-3 fill-pink-400" /> {photo.reactions} curtidas
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {moderationQueue && (
                  <div className="p-3 bg-slate-900 border border-purple-500/40 rounded-lg flex items-center justify-between text-xs">
                    <span className="text-slate-300">{moderationQueue}</span>
                    <button
                      onClick={handleApprovePhoto}
                      className="px-2.5 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded text-[11px] font-semibold"
                    >
                      Aprovar Exibição
                    </button>
                  </div>
                )}
              </div>

              {/* Explanatory Panel */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-slate-950/60 p-5 rounded-xl border border-slate-800 space-y-3">
                  <h4 className="font-bold text-sm text-slate-200">Como o Olhare funciona no evento:</h4>
                  
                  <div className="space-y-3 text-xs text-slate-400">
                    <div>
                      <strong className="text-slate-300 block mb-0.5">• O Problema:</strong>
                      Convidados tiram dezenas de fotos que ficam espalhadas em celulares individuais e nunca chegam aos anfitriões.
                    </div>
                    <div>
                      <strong className="text-slate-300 block mb-0.5">• Como o sistema resolve:</strong>
                      O convidado aponta a câmera para o QR Code da mesa e envia fotos diretamente pelo navegador, sem instalar aplicativo.
                    </div>
                    <div>
                      <strong className="text-slate-300 block mb-0.5">• Benefício prático:</strong>
                      Interação ao vivo na TV durante a festa com moderação e galeria completa para download ao final.
                    </div>
                  </div>
                </div>

                <Link
                  to="/olhare"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-bold text-xs border border-slate-700 transition-colors"
                >
                  Conhecer detalhes do Olhare <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

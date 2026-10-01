import React, { useState } from 'react';
import { PageContent } from '../config/pageContent';

interface EditDrawerProps {
  content: PageContent;
  onUpdate: (updated: PageContent) => void;
  onReset: () => void;
}

export const EditDrawer: React.FC<EditDrawerProps> = ({
  content,
  onUpdate,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'textos' | 'precos' | 'galeria'>('precos');

  const handleChange = (key: keyof PageContent, value: unknown) => {
    onUpdate({
      ...content,
      [key]: value,
    });
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(content, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Discrete Toggle Button at Bottom Left */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#1e293b]/90 hover:bg-[#0f172a] text-white text-xs font-semibold shadow-xl border border-white/20 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
          title="Fazer alterações na página (textos, preços, links)"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>{isOpen ? '✕ Fechar Editor' : '✏️ Editar Página'}</span>
        </button>
      </div>

      {/* Editor Drawer / Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 bottom-0 w-full sm:w-[420px] bg-white z-50 shadow-2xl flex flex-col border-r border-gray-200 animate-fade-in-up">
          {/* Header */}
          <div className="p-4 bg-[#9d1b21] text-white flex items-center justify-between shadow-md">
            <div>
              <h2 className="font-montserrat font-bold text-base">Painel de Edição</h2>
              <p className="text-xs text-white/80">Altere textos, preços e links em tempo real</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center font-bold text-sm text-white"
            >
              ✕
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-gray-200 bg-gray-50 text-xs font-semibold text-gray-600">
            <button
              onClick={() => setActiveTab('precos')}
              className={`flex-1 py-2.5 text-center transition-colors ${
                activeTab === 'precos'
                  ? 'border-b-2 border-[#9d1b21] text-[#9d1b21] bg-white font-bold'
                  : 'hover:text-gray-900'
              }`}
            >
              Preço & Links
            </button>
            <button
              onClick={() => setActiveTab('textos')}
              className={`flex-1 py-2.5 text-center transition-colors ${
                activeTab === 'textos'
                  ? 'border-b-2 border-[#9d1b21] text-[#9d1b21] bg-white font-bold'
                  : 'hover:text-gray-900'
              }`}
            >
              Textos & Títulos
            </button>
            <button
              onClick={() => setActiveTab('galeria')}
              className={`flex-1 py-2.5 text-center transition-colors ${
                activeTab === 'galeria'
                  ? 'border-b-2 border-[#9d1b21] text-[#9d1b21] bg-white font-bold'
                  : 'hover:text-gray-900'
              }`}
            >
              Galeria ({content.galleryItems.length})
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {activeTab === 'precos' && (
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Preço em Destaque</label>
                  <input
                    type="text"
                    value={content.price}
                    onChange={(e) => handleChange('price', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none text-sm font-bold text-[#9d1b21]"
                  />
                  <span className="text-[11px] text-gray-500">Ex: R$ 39,90 ou R$ 47,00</span>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Texto da Oferta</label>
                  <input
                    type="text"
                    value={content.offerBadge}
                    onChange={(e) => handleChange('offerBadge', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Texto do Sub-preço (Linha 1)</label>
                  <input
                    type="text"
                    value={content.promoText1}
                    onChange={(e) => handleChange('promoText1', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Aviso de Urgência (Linha 2)</label>
                  <input
                    type="text"
                    value={content.promoText2}
                    onChange={(e) => handleChange('promoText2', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none font-semibold text-red-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Link do Checkout (Botão Comprar)</label>
                  <input
                    type="text"
                    value={content.checkoutUrl}
                    onChange={(e) => handleChange('checkoutUrl', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none text-xs"
                    placeholder="https://..."
                  />
                  <span className="text-[11px] text-gray-500">Link para onde os botões 'COMPRAR AGORA' redirecionam</span>
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Texto Botão Topo</label>
                  <input
                    type="text"
                    value={content.introCtaText}
                    onChange={(e) => handleChange('introCtaText', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none font-semibold text-[#52b93e]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Texto Botão Oferta</label>
                  <input
                    type="text"
                    value={content.offerCtaText}
                    onChange={(e) => handleChange('offerCtaText', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none font-semibold text-[#52b93e]"
                  />
                </div>
              </div>
            )}

            {activeTab === 'textos' && (
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Título Seção Principal</label>
                  <input
                    type="text"
                    value={content.exclusiveArtTitle}
                    onChange={(e) => handleChange('exclusiveArtTitle', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none font-bold"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Descrição (Linha 1)</label>
                  <textarea
                    rows={2}
                    value={content.introTextLine1}
                    onChange={(e) => handleChange('introTextLine1', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Destaque em Vermelho</label>
                  <input
                    type="text"
                    value={content.introTextLine2}
                    onChange={(e) => handleChange('introTextLine2', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none font-bold text-red-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Formatos de Arquivos</label>
                  <input
                    type="text"
                    value={content.introTextLine3}
                    onChange={(e) => handleChange('introTextLine3', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none font-bold text-red-600"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Título da Galeria</label>
                  <input
                    type="text"
                    value={content.galleryTitle}
                    onChange={(e) => handleChange('galleryTitle', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none font-bold"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Frase de Impacto da Oferta</label>
                  <textarea
                    rows={2}
                    value={content.offerTagline}
                    onChange={(e) => handleChange('offerTagline', e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#9d1b21] outline-none"
                  />
                </div>
              </div>
            )}

            {activeTab === 'galeria' && (
              <div className="space-y-3">
                <p className="text-gray-600">Modelos de topos exibidos na seção &quot;Veja o que você vai receber&quot;:</p>
                <div className="grid grid-cols-3 gap-2">
                  {content.galleryItems.map((item, idx) => (
                    <div key={item.id} className="relative group border rounded-lg overflow-hidden bg-gray-50 p-1">
                      <img
                        src={item.image}
                        alt={`Modelo ${idx + 1}`}
                        className="w-full aspect-square object-cover rounded"
                      />
                      <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[10px] px-1 rounded">
                        #{idx + 1}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Controls */}
          <div className="p-3 bg-gray-50 border-t border-gray-200 flex flex-col gap-2">
            <div className="flex gap-2">
              <button
                onClick={handleCopyJson}
                className="flex-1 py-2 px-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                {copied ? '✓ JSON Copiado!' : '📋 Copiar Config'}
              </button>
              <button
                onClick={onReset}
                className="py-2 px-3 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 rounded-lg font-semibold text-xs transition-colors"
                title="Restaurar valores padrão originais"
              >
                Restaurar
              </button>
            </div>
            <p className="text-[10px] text-gray-500 text-center">
              As alterações são salvas automaticamente no seu navegador.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

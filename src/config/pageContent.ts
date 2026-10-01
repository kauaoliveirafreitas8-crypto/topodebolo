export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  url: string;
  isHome?: boolean;
}

export interface PageContent {
  topBannerBg: string;
  heroMockup: string;
  
  // Section 1: Intro info
  exclusiveArtTitle: string;
  introTextLine1: string;
  introTextLine2: string;
  introTextLine3: string;
  introCtaText: string;
  checkoutUrl: string;

  // Section 2: Gallery
  galleryTitle: string;
  galleryItems: GalleryItem[];

  // Section 3: Offer
  offerTagline: string;
  offerBadge: string;
  promoText1: string;
  promoText2: string;
  price: string;
  offerCtaText: string;

  // Section 4: Store & Social
  logoUrl: string;
  moreNovidadesTitle: string;
  storeButtonText: string;
  storeUrl: string;
  instagramLabel: string;
  instagramUrl: string;

  // Category navigation
  categoriesTitle: string;
  categories: CategoryItem[];

  // Floating WhatsApp
  whatsappPhone: string;
  whatsappMessage: string;
  whatsappTooltip: string;
}

export const defaultPageContent: PageContent = {
  topBannerBg: '/images/Fundo-PC-1.png',
  heroMockup: '/images/WhatsApp-Image-2026-09-29-at-06.42.08-1024x1024.jpeg',
  
  exclusiveArtTitle: 'Pacote com 16 Artes Exclusivas!',
  introTextLine1: 'Tenha em mãos o melhor pacote de arquivos',
  introTextLine2: 'TOPOS DE BOLO NATALINOS',
  introTextLine3: 'STUDIO SILHOUETTE , SVG e PDF',
  introCtaText: 'COMPRAR AGORA!',
  checkoutUrl: 'https://toppersdeluxo.com.br/finalizar-compra/?add-to-cart=21300',

  galleryTitle: 'Veja o que você vai receber!',
  galleryItems: [
    {
      id: 'item-1',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.50.41-5-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 1'
    },
    {
      id: 'item-2',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.38.58-3-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 2'
    },
    {
      id: 'item-3',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.39.08-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 3'
    },
    {
      id: 'item-4',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.50.40-1-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 4'
    },
    {
      id: 'item-5',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.50.40-2-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 5'
    },
    {
      id: 'item-6',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.38.58-4-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 6'
    },
    {
      id: 'item-7',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.38.58-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 7'
    },
    {
      id: 'item-8',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.50.41-4-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 8'
    },
    {
      id: 'item-9',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.50.41-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 9'
    },
    {
      id: 'item-10',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.50.41-2-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 10'
    },
    {
      id: 'item-11',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.50.41-1-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 11'
    },
    {
      id: 'item-12',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.38.58-1-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 12'
    },
    {
      id: 'item-13',
      image: '/images/WhatsApp-Image-2026-09-28-at-22.37.54-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 13'
    },
    {
      id: 'item-14',
      image: '/images/WhatsApp-Image-2026-09-28-at-22.33.38-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 14'
    },
    {
      id: 'item-15',
      image: '/images/WhatsApp-Image-2026-09-28-at-20.50.40-1024x1024.jpeg',
      alt: 'Topo de Bolo Natalino Modelo 15'
    }
  ],

  offerTagline: 'Economize tempo e surpreenda seus clientes com modelos exclusivos!',
  offerBadge: 'Oferta Especial',
  promoText1: 'Aproveite o valor Promocional!',
  promoText2: 'SOMENTE HOJE!',
  price: 'R$ 39,90',
  offerCtaText: 'COMPRAR AGORA',

  logoUrl: '/images/logo-1024x641.jpg',
  moreNovidadesTitle: 'Veja mais novidades',
  storeButtonText: 'Acessar a Loja',
  storeUrl: 'https://toppersdeluxo.com.br/',
  instagramLabel: 'Acesse nosso Instagram',
  instagramUrl: 'https://www.instagram.com/topperspersonalizadosdeluxo/',

  categoriesTitle: 'CATEGORIA DOS PRODUTOS',
  categories: [
    { id: 'cat-home', name: 'HOME', url: 'https://toppersdeluxo.com.br', isHome: true },
    { id: 'cat-curso', name: 'CURSO TOPPERS', url: 'https://toppersdeluxo.com.br/curso-toppers-de-luxo-2/' },
    { id: 'cat-alfabeto', name: 'TOPOS DE ALFABETO', url: 'https://toppersdeluxo.com.br/categoria-produto/topos-de-alfabeto/' },
    { id: 'cat-coringas', name: 'TOPOS CORINGAS', url: 'https://toppersdeluxo.com.br/categoria-produto/topo-coringas/' },
    { id: 'cat-natal', name: 'TOPOS DE NATAL', url: 'https://toppersdeluxo.com.br/categoria-produto/topos-de-natal/' },
    { id: 'cat-ano-novo', name: 'TOPOS DE ANO NOVO', url: 'https://toppersdeluxo.com.br/categoria-produto/ano-novo/' },
    { id: 'cat-pascoa', name: 'TOPOS DE PÁSCOA', url: 'https://toppersdeluxo.com.br/categoria-produto/topo-de-pascoa/' },
    { id: 'cat-dia-das-maes', name: 'TOPOS DIAS DAS MÃES', url: 'https://toppersdeluxo.com.br/categoria-produto/dia-das-maes/' },
    { id: 'cat-juninos', name: 'TODOS FESTA JUNINAS', url: 'https://toppersdeluxo.com.br/categoria-produto/topos-juninos/' },
    { id: 'cat-dia-dos-pais', name: 'TOPOS DIAS DOS PAIS', url: 'https://toppersdeluxo.com.br/categoria-produto/dia-dos-pais/' },
    { id: 'cat-futebol', name: 'TOPOS DE FUTEBOL', url: 'https://toppersdeluxo.com.br/categoria-produto/topos-de-futebol/' },
    { id: 'cat-namorados', name: 'TOPOS DOS NAMORADOS', url: 'https://toppersdeluxo.com.br/categoria-produto/dia-dos-namorados/' },
    { id: 'cat-todos', name: 'TODOS OS ARQUIVOS', url: 'https://toppersdeluxo.com.br/categoria-produto/todos-os-temas/' }
  ],

  whatsappPhone: '557488690794',
  whatsappMessage: 'Olá estou no Site da Loja de arquivos e tenho uma dúvida...',
  whatsappTooltip: 'Como posso te ajudar?'
};

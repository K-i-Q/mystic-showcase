export interface Product {
  id: number;
  nome: string;
  preco: number;
  categoria: 'Novidades' | 'Coleções' | 'Promo' | 'Mais vendidos';
  imagem: string;
  descricao: string;
}

export const products: Product[] = [
  {
    id: 1,
    nome: "Body Canelado Premium",
    preco: 89.90,
    categoria: "Novidades",
    imagem: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop",
    descricao: "Body em malha canelada com modelagem justa e acabamento premium."
  },
  {
    id: 2,
    nome: "Conjunto Street Moletom",
    preco: 189.90,
    categoria: "Coleções",
    imagem: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
    descricao: "Conjunto oversized em moletom peluciado, perfeito para looks urbanos."
  },
  {
    id: 3,
    nome: "Vestido Midi Cetim",
    preco: 159.90,
    categoria: "Mais vendidos",
    imagem: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=600&fit=crop",
    descricao: "Vestido midi em cetim com decote drapeado e fenda lateral."
  },
  {
    id: 4,
    nome: "Blazer Alfaiataria Oversized",
    preco: 249.90,
    categoria: "Coleções",
    imagem: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=500&h=600&fit=crop",
    descricao: "Blazer estruturado em tecido de alfaiataria com ombros marcados."
  },
  {
    id: 5,
    nome: "Calça Wide Leg Linho",
    preco: 139.90,
    categoria: "Novidades",
    imagem: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=600&fit=crop",
    descricao: "Calça pantalona em linho natural com cintura alta e caimento fluido."
  },
  {
    id: 6,
    nome: "Cropped Basic Ribana",
    preco: 49.90,
    categoria: "Promo",
    imagem: "https://images.unsplash.com/photo-1485968579169-a6b439f9fa8b?w=500&h=600&fit=crop",
    descricao: "Cropped básico em ribana com manga curta e gola redonda."
  },
  {
    id: 7,
    nome: "Saia Midi Plissada",
    preco: 129.90,
    categoria: "Mais vendidos",
    imagem: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj2d?w=500&h=600&fit=crop",
    descricao: "Saia midi plissada em tecido leve com cós elástico."
  },
  {
    id: 8,
    nome: "Top Cropped Renda",
    preco: 69.90,
    categoria: "Novidades",
    imagem: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=500&h=600&fit=crop",
    descricao: "Top cropped em renda francesa com forro em viscose."
  },
  {
    id: 9,
    nome: "Jaqueta Jeans Destroyed",
    preco: 199.90,
    categoria: "Coleções",
    imagem: "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=500&h=600&fit=crop",
    descricao: "Jaqueta jeans com detalhes destroyed e lavagem clara."
  },
  {
    id: 10,
    nome: "Vestido Tricot Canelado",
    preco: 179.90,
    categoria: "Mais vendidos",
    imagem: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&h=600&fit=crop",
    descricao: "Vestido em tricot canelado com manga longa e modelagem midi."
  },
  {
    id: 11,
    nome: "Short Saia Couro Eco",
    preco: 99.90,
    categoria: "Promo",
    imagem: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=500&h=600&fit=crop",
    descricao: "Short saia em couro ecológico com zíper frontal."
  },
  {
    id: 12,
    nome: "Camisa Viscose Estampada",
    preco: 119.90,
    categoria: "Novidades",
    imagem: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=500&h=600&fit=crop",
    descricao: "Camisa em viscose com estampa exclusiva e modelagem relaxed."
  },
  {
    id: 13,
    nome: "Macacão Utilitário",
    preco: 219.90,
    categoria: "Coleções",
    imagem: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&h=600&fit=crop",
    descricao: "Macacão estilo workwear com bolsos frontais e cinto."
  },
  {
    id: 14,
    nome: "Cardigan Tricot Botões",
    preco: 149.90,
    categoria: "Mais vendidos",
    imagem: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&h=600&fit=crop",
    descricao: "Cardigan em tricot com botões perolados e punhos canelados."
  },
  {
    id: 15,
    nome: "Calça Cargo Jogger",
    preco: 159.90,
    categoria: "Promo",
    imagem: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=600&fit=crop",
    descricao: "Calça cargo com punho e bolsos laterais estilo jogger."
  },
  {
    id: 16,
    nome: "Blusa Ombro a Ombro",
    preco: 79.90,
    categoria: "Novidades",
    imagem: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=500&h=600&fit=crop",
    descricao: "Blusa ciganinha em viscose com elástico nos ombros."
  },
  {
    id: 17,
    nome: "Vestido Chemise Linho",
    preco: 189.90,
    categoria: "Coleções",
    imagem: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500&h=600&fit=crop",
    descricao: "Vestido chemise em linho puro com botões de madrepérola."
  },
  {
    id: 18,
    nome: "Regata Básica Kit 3",
    preco: 89.90,
    categoria: "Promo",
    imagem: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=600&fit=crop",
    descricao: "Kit com 3 regatas básicas em algodão, cores variadas."
  },
  {
    id: 19,
    nome: "Saia Longa Fenda",
    preco: 139.90,
    categoria: "Mais vendidos",
    imagem: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=500&h=600&fit=crop",
    descricao: "Saia longa em crepe com fenda lateral profunda."
  },
  {
    id: 20,
    nome: "Conjunto Cropped Saia",
    preco: 169.90,
    categoria: "Novidades",
    imagem: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500&h=600&fit=crop",
    descricao: "Conjunto em tricot com cropped e saia midi combinando."
  }
];

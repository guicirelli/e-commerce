import ProductCard from './ProductCard';

// Camisas Básicas
const basicas = [
  { 
    id: 1,
    name: 'Camisa Percirelli Preta', 
    price: 'R$ 89,90', 
    image: '/images/camisapercirellipreta.png',
    description: 'Camisa básica Percirelli em preto, qualidade premium e conforto garantido.',
    category: 'basicas'
  },
  { 
    id: 2,
    name: 'Camisa Percirelli Branca', 
    price: 'R$ 89,90', 
    image: '/images/camisapercirellibranca.png',
    description: 'Camisa básica Percirelli em branco, essencial no guarda-roupa.',
    category: 'basicas'
  },
  { 
    id: 3,
    name: 'Camisa Percirelli Vermelha', 
    price: 'R$ 89,90', 
    image: '/images/camisapercirellivermelha.png',
    description: 'Camisa básica Percirelli em vermelho, cor vibrante e moderna.',
    category: 'basicas'
  },
  { 
    id: 4,
    name: 'Camisa Percirelli Amarela', 
    price: 'R$ 89,90', 
    image: '/images/camisapercirelliamarela.png',
    description: 'Camisa básica Percirelli em amarelo, destaque garantido.',
    category: 'basicas'
  },
  { 
    id: 5,
    name: 'Camisa Percirelli Roxo', 
    price: 'R$ 89,90', 
    image: '/images/camisapercirelliroxo.png',
    description: 'Camisa básica Percirelli em roxo, estilo único e diferenciado.',
    category: 'basicas'
  },
  { 
    id: 6,
    name: 'Camisa Azul', 
    price: 'R$ 79,90', 
    image: '/images/camisaazul.jpg',
    description: 'Camisa básica em azul clássico, conforto e estilo combinados.',
    category: 'basicas'
  },
];

// Camisas Estampadas
const estampadas = [
  { 
    id: 7,
    name: 'Camisa Percirelli Tigre', 
    price: 'R$ 129,90', 
    image: '/images/camisapercirellitigre.png',
    description: 'Camisa estampada com design de tigre, exclusividade Percirelli.',
    category: 'estampadas'
  },
  { 
    id: 8,
    name: 'Camisa Estampada Preta', 
    price: 'R$ 119,90', 
    image: '/images/camisaestampadapreta.png',
    description: 'Camisa com estampa exclusiva em preto, estilo urbano marcante.',
    category: 'estampadas'
  },
  { 
    id: 9,
    name: 'Camisa Human', 
    price: 'R$ 119,90', 
    image: '/images/camisahuman.png',
    description: 'Camisa com design Human, conceito inovador e moderno.',
    category: 'estampadas'
  },
  { 
    id: 10,
    name: 'Camisa Monstro', 
    price: 'R$ 119,90', 
    image: '/images/camisamonstro.png',
    description: 'Camisa com estampa Monstro, design ousado e único.',
    category: 'estampadas'
  },
  { 
    id: 11,
    name: 'Camisa Academia Personagem', 
    price: 'R$ 139,90', 
    image: '/images/camisapercirelliacademiapersonagem.png',
    description: 'Camisa Percirelli Academia com personagem, edição limitada.',
    category: 'estampadas'
  },
  { 
    id: 12,
    name: 'Camisa Branca Estampada', 
    price: 'R$ 109,90', 
    image: '/images/camisabrancaestampada.png',
    description: 'Camisa branca com estampa exclusiva, versatilidade garantida.',
    category: 'estampadas'
  },
];

// Todos os produtos combinados
const products = [...basicas, ...estampadas];

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

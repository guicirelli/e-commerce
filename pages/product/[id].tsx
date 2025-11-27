import { useRouter } from 'next/router';
import Image from 'next/image';

const products = [
  { id: 1, name: 'Camisa Oversized', price: 'R$ 99,90', image: '/images/camisa-oversized.jpg', description: 'Camisa oversized confortável e estilosa.' },
  { id: 2, name: 'Camiseta Básica', price: 'R$ 49,90', image: '/images/camiseta-basica.jpg', description: 'Camiseta básica de alta qualidade.' },
  { id: 3, name: 'Moletom Estampado', price: 'R$ 149,90', image: '/images/moletom-estampado.jpg', description: 'Moletom estampado com design exclusivo.' },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) return <p>Produto não encontrado</p>;

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <Image src={product.image} alt={product.name} width={500} height={500} />
        <div className="md:ml-8">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-4">{product.price}</p>
          <button className="mt-4 bg-black text-white py-2 px-4 rounded">Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
}

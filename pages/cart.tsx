import { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: string;
  quantity: number;
}

const initialCart: CartItem[] = [
  { id: 1, name: 'Camisa Oversized', price: 'R$ 99,90', quantity: 1 },
  { id: 2, name: 'Camiseta Básica', price: 'R$ 49,90', quantity: 2 },
];

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

  const removeItem = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('R$', '').replace(',', '.')) * item.quantity, 0).toFixed(2);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Carrinho de Compras</h1>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço: {item.price}</p>
              </div>
              <button onClick={() => removeItem(item.id)} className="bg-red-500 text-white py-1 px-3 rounded">Remover</button>
            </div>
          ))}
          <div className="text-right">
            <p className="text-xl font-bold">Total: R$ {total}</p>
          </div>
        </div>
      )}
    </div>
  );
}

import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  address: string;
}

export default function Checkout() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', address: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Pedido realizado com sucesso!');
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold my-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700">Nome</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Endereço</label>
          <input type="text" name="address" value={form.address} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
        <button type="submit" className="bg-black text-white py-2 px-4 rounded">Finalizar Compra</button>
      </form>
    </div>
  );
}

const translations: Record<string, any> = {
  en: {
    title: "Percirelli E-commerce",
    home: "Home",
    cart: "Cart",
    checkout: "Checkout",
    highlights: "Highlights",
    product: {
      oversizedShirt: "Oversized Shirt",
      basicTshirt: "Basic T-Shirt",
      printedHoodie: "Printed Hoodie"
    },
    price: "Price",
    quantity: "Quantity",
    addToCart: "Add to Cart",
    total: "Total",
    emptyCart: "Your cart is empty.",
    checkoutMessage: "Order successfully placed!"
  },
  pt: {
    title: "Percirelli E-commerce",
    home: "Início",
    cart: "Carrinho",
    checkout: "Finalizar Compra",
    highlights: "Destaques",
    product: {
      oversizedShirt: "Camisa Oversized",
      basicTshirt: "Camiseta Básica",
      printedHoodie: "Moletom Estampado"
    },
    price: "Preço",
    quantity: "Quantidade",
    addToCart: "Adicionar ao Carrinho",
    total: "Total",
    emptyCart: "Seu carrinho está vazio.",
    checkoutMessage: "Pedido realizado com sucesso!"
  }
};

export type Locale = 'en' | 'pt';

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale] || translations['en'];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

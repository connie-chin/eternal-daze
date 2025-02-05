export type Product = {
  productId?: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  categoryId: number;
};

export async function viewProducts() {
  const response = await fetch('/api/products');
  if (!response.ok) {
    throw new Error(`fetch error ${response.status}`);
  }
  const products = await response.json();
  return products;
}

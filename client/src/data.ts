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

export async function viewShirts() {
  const response = await fetch(`/api/products/shirts`);
  if (!response.ok) {
    throw new Error(`fetch error ${response.status}`);
  }
  const shirts = await response.json();
  return shirts;
}

export async function viewPants() {
  const response = await fetch(`api/products/pants`);
  if (!response.ok) {
    throw new Error(`fetch error ${response.status}`);
  }
  const pants = await response.json();
  return pants;
}

export async function viewShoes() {
  const response = await fetch(`api/products/shoes`);
  if (!response.ok) {
    throw new Error(`fetch error ${response.status}`);
  }
  const shoes = await response.json();
  return shoes;
}

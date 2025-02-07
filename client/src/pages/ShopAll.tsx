import { useEffect, useState } from 'react';
import { viewProducts, Product } from '../data';
import './ShopAll.css';

export function ShopAll() {
  const [shopAll, setShopAll] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadShopAllProducts() {
      try {
        const shopAllProductsList = await viewProducts();
        setShopAll(shopAllProductsList);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadShopAllProducts();
  }, []);

  if (isLoading) return <div>Loading Products...</div>;

  if (error) {
    return (
      <div>
        Error Loading Products:{' '}
        {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  return (
    <div className="max-w-full mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {shopAll.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}

type ProductProps = {
  product: Product;
};

function ProductCard({ product }: ProductProps) {
  return (
    <div className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="w-full h-64 bg-gray-200">
        <img
          className="w-full h-full object-contain"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">${product.price}</p>
      </div>
    </div>
  );
}

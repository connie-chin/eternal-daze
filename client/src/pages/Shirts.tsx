import { useEffect, useState } from 'react';
import { viewShirts, Product } from '../data';
import { ProductCard } from './ShopAll';

export function Shirts() {
  const [shirts, setShirts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadShirts() {
      try {
        const shopShirtsList = await viewShirts();
        setShirts(shopShirtsList);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadShirts();
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
        {shirts.map((shirt) => (
          <ProductCard key={shirt.productId} product={shirt} />
        ))}
      </div>
    </div>
  );
}

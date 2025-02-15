import { useEffect, useState } from 'react';
import { viewPants, Product } from '../data';
import { ProductCard } from './ShopAll';

export function Pants() {
  const [pants, setPants] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadPants() {
      try {
        const shopPantsList = await viewPants();
        setPants(shopPantsList);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadPants();
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
        {pants.map((pant) => (
          <ProductCard key={pant.productId} product={pant} />
        ))}
      </div>
    </div>
  );
}

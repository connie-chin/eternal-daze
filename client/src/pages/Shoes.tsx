import { useEffect, useState } from 'react';
import { viewShoes, Product } from '../data';
import { ProductCard } from './ShopAll';

export function Shoes() {
  const [shoes, setShoes] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadShoes() {
      try {
        const shopShoeList = await viewShoes();
        setShoes(shopShoeList);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadShoes();
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
        {shoes.map((shoe) => (
          <ProductCard key={shoe.productId} product={shoe} />
        ))}
      </div>
    </div>
  );
}

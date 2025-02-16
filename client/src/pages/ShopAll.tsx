import { useEffect, useState } from 'react';
import { viewProducts, Product } from '../data';
import './ShopAll.css';
import { RotatingCarousel } from '../components/RotatingCarousel';

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

export function ProductCard({ product }: ProductProps) {
  let imageUrls: string[] = [];
  if (typeof product.imageUrl === 'string') {
    try {
      imageUrls = JSON.parse(product.imageUrl);
    } catch (e) {
      console.error('Error parsing image URL:', e);
    }
  } else {
    imageUrls = product.imageUrl;
  }

  return (
    <div className="overflow-hidden hover:shadow-lg transition-shadow duration-300 relative group">
      <div className="w-full h-80 flex justify-center relative">
        {/* <img
          className="w-[260px] h-full object-cover transition-opacity duration-300 group-hover:opacity-70" // Added the opacity transition
          src={imageUrls[0]}
          alt={product.name}
        /> */}
        <RotatingCarousel
          imageUrl={imageUrls}
          className="w-[260px] h-full object-cover group-hover:opacity-70"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600">${product.price}</p>
      </div>
    </div>
  );
}

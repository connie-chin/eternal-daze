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
    <div className="shopAllProducts">
      <div className="productContainer">
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
    // <li>
    //   <div>
    //     <p>Testing</p>
    //     <img className="productPhoto" src={product.imageUrl}/>
    //   </div>
    //   <div>
    //     <p>{product.name}</p>
    //   </div>
    //   <div>
    //     <p>{product.price}</p>
    //   </div>
    // </li>
    <div className="productCard">
      <div className="productImage">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="productInfo">
        <h3>{product.name}</h3>
        <p className="productPrice">${product.price}</p>
      </div>
    </div>
  );
}

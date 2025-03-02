import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { viewPantsProductDetail } from '../data';
import { Product } from '../data';

export function PantDetails() {
  const [productDetail, setProductDetail] = useState<Product>();
  const { productId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [mainImage, setMainImage] = useState<string | null>(null); // State to hold the main image URL

  useEffect(() => {
    async function loadPantProductDetails(productId: number) {
      setIsLoading(true);
      try {
        const productDetail = await viewPantsProductDetail(productId);
        if (!productDetail)
          throw new Error(`Product with ID ${productId} not found`);
        setProductDetail(productDetail);
        // Set the initial main image to the first image in the list
        if (
          productDetail.imageUrl &&
          typeof productDetail.imageUrl === 'string'
        ) {
          const imageUrls = JSON.parse(productDetail.imageUrl);
          setMainImage(imageUrls[0]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadPantProductDetails(Number(productId));
  }, [productId]);

  if (isLoading) return <div>Loading Products...</div>;

  if (error) {
    return (
      <div>
        Error Loading Products:{' '}
        {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  let imageUrls: string[] = [];
  if (typeof productDetail?.imageUrl === 'string') {
    try {
      imageUrls = JSON.parse(productDetail.imageUrl);
    } catch (e) {
      console.error('Error parsing image URL:', e);
    }
  } else {
    imageUrls = productDetail?.imageUrl || [];
  }

  if (imageUrls.length === 0) {
    return <div>No images available for this product</div>;
  }

  // Main image update function
  const handleThumbnailClick = (url: string) => {
    setMainImage(url); // Update the main image when a thumbnail is clicked
  };

  return (
    <div className="flex max-w-full justify-center pb-8">
      <div className="w-[95%] max-w-[1200px]">
        <div className="md:flex md:gap-10 md:justify-between">
          <div className="left md:w-[50%]">
            {/* Main Image */}
            <div className="max-w-[550px] h-[500px]">
              {mainImage && (
                <img
                  src={`/${mainImage}`}
                  className="w-full h-full object-cover"
                  alt="Main Product"
                />
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center space-x-4 mt-4">
              {imageUrls.slice(0, 5).map((url, index) => (
                <div
                  key={index}
                  className="flex items-center cursor-pointer"
                  onClick={() => handleThumbnailClick(url)} // Update main image on click
                >
                  <img
                    src={`/${url}`}
                    className="w-20 h-20 object-cover transition"
                    alt={`Thumbnail ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="right md:w-[50%]">
            {/* Product Info */}
            <h1 className="text-4xl font-bold mt-4">{productDetail?.name}</h1>
            <h3 className="text-2xl text-gray-800 my-2">
              ${productDetail?.price}
            </h3>

            <div className="mt-4">
              <button className="bg-orange-500 text-white py-3 px-8 rounded-lg w-full hover:bg-orange-600 transition">
                Add To Cart
              </button>
            </div>

            <p className="italic mt-6 text-sm">Measurements:</p>
            <p className="text-gray-600 mt-2">{productDetail?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

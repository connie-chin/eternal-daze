import { useState, useEffect } from 'react';

type RotatingCarouselProp = {
  imageUrl: string[];
  className?: string;
};

export function RotatingCarousel({
  imageUrl,
  className,
}: RotatingCarouselProp) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const parsedImageUrls = Array.isArray(imageUrl)
    ? imageUrl
    : JSON.parse(imageUrl);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;

    if (isHovered && parsedImageUrls.length > 0) {
      intervalId = setInterval(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % parsedImageUrls.length
        );
      }, 2000);
    } else {
      clearInterval(intervalId);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isHovered, parsedImageUrls.length]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentIndex(0);
  };
  return (
    <div
      className="w-full h-full relative flex justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}>
      {parsedImageUrls.length > 0 && (
        <img
          className={`${className} w-full h-full object-cover transition-opacity duration-300`}
          src={parsedImageUrls[currentIndex]}
          alt="Product images"
        />
      )}
    </div>
  );
}

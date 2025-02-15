import { useState, useEffect } from 'react';
import { Product } from '../data';

export function RotatingCarousel({ imageUrl }: Product) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrl.length);
      }, 3000);
      return () => clearInterval(intervalId);
    }
  }, [isHovered, imageUrl.length]);

  return (
    <div
      className="w-full h-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <img
        className="w-full h-full object-cover transition-opacity duration-300"
        src={imageUrl[currentIndex]}
      />
    </div>
  );
}

import React from 'react';
import RatingStars from './RatingStars';
import { Product } from '@store/types';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col items-center bg-white dark:bg-gray-700 dark:border-gray-600">
      <div className="flex justify-center mb-2">
        <img src={product.image} alt={product.title} className="h-32 w-32 object-cover" />
      </div>
      <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white text-center">{product.title}</h3>
      <p className="text-gray-600 mb-1 dark:text-gray-300 text-sm text-center">${product.price}</p>
      <RatingStars rating={product.rating.rate} />
    </div>
  );
};

export default ProductItem;

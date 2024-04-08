import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value > 0 ? value : 1);
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    // Reset quantity after adding to cart
    setQuantity(1);
  };

  return (
    <div className="bg-white shadow-md rounded-md max-h-440px relative overflow-hidden">
      <img
        src={product.images.length > 0 ? product.images[0].src : ''}
        alt={product.name}
        className={`w-full h-auto max-h-50vh object-cover ${imageLoaded ? '' : 'opacity-0'}`}
        onLoad={handleImageLoad}
      />
      <div className="p-4 flex flex-col justify-center items-center">
        <h2 className="text-lg font-semibold text-center mt-2">{product.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: product.description }} className="text-gray-600 text-center mt-2" />
        <span className="text-gray-700 mt-4">Price: ${product.price}</span>
        <div className="flex items-center mt-2">
          <label className="mr-2">Quantity:</label>
          <input type="number" min="1" max={product.availableQuantity} value={quantity} onChange={handleQuantityChange} className="border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button
          className="text-black border border-black px-4 py-2 mt-4 hover:bg-custom-red hover:border-custom-red hover:text-white transition-all"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

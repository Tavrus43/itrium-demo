import React, { useEffect, useState } from 'react';

const ShoppingCart = ({ selectedProducts, setSelectedProducts }) => {
  // Update localStorage whenever selectedProducts change
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(selectedProducts));
  }, [selectedProducts]);

  const totalPrice = selectedProducts.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handleRemoveFromCart = (productId) => {
    setSelectedProducts(selectedProducts.filter(product => product.id !== productId));
  };

  const handleCheckout = () => {
    // Implement checkout logic here
  };

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Shopping Cart</h2>
      <div>
        {selectedProducts.map(product => (
          <div key={product.id} className="flex items-center border-b border-gray-200 pb-4">
            <img
              src={product.images.length > 0 ? product.images[0].src : ''}
              alt={product.name}
              className="w-16 h-16 object-cover mr-4"
            />
            <div className="flex flex-col flex-grow">
              <p className="text-sm font-medium">{product.name}</p>
              <p className="text-sm text-gray-600">Quantity: {product.quantity}</p>
              <p className="text-sm text-gray-600">Price: ${product.price}</p>
            </div>
            <button onClick={() => handleRemoveFromCart(product.id)} className="text-red-600 hover:text-red-700 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M15.707 4.293a1 1 0 0 0-1.414 0L10 8.586 5.707 4.293a1 1 0 1 0-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 1 0 1.414 1.414L10 11.414l4.293 4.293a1 1 0 0 0 1.414-1.414L11.414 10l4.293-4.293a1 1 0 0 0 0-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      <p className="mt-4 text-lg font-semibold">Subtotal: ${totalPrice}</p>
      <div className="mt-6 flex justify-between">
        <button className="text-text-color box-border border-2 p-1 px-2 mr-3 text-14 hover:border-black " onClick={() => console.log("View Cart")}>View Cart</button>
        <button className="text-text-color box-border border-2 p-1 px-2 text-14 hover:border-black" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

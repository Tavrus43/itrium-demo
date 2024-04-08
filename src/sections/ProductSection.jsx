import React, { useEffect, useState, Suspense } from 'react';
import { getProducts, getCategories } from '../api/api';
import ProductCard from '../components/ProductCard';
import ShoppingCart from '../components/ShoppingCart'; // Assuming you have a ProductCard component

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); 
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };

    const fetchCategories = async () => {
      const data = await getCategories();
      setCategories(data);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const handleAddToCart = (productId, quantity) => {
    const productToAdd = products.find(product => product.id === productId);
    setSelectedProducts([...selectedProducts, { ...productToAdd, quantity }]); // Include quantity in the selected product
  };

  const removeFromCart = (productId) => {
    setSelectedProducts(selectedProducts.filter(product => product.id !== productId));
  };

  const createOrder = async () => {
    // Call WooCommerce API to create the order
    // You can use the createOrder function from the API file
    const orderData = {
      // Define order data based on selectedProducts
    };

    const createdOrder = await createOrder(orderData);

    // Handle the response, show success or error message, etc.
  }


  // Filter products based on search term, categories, and price
  const filteredProducts = products.filter(product => (
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategories.length === 0 || selectedCategories.some(cat => product.categories.find(pc => pc.name === cat))) &&
    product.price >= priceRange.min && product.price <= priceRange.max
  ));

  // Sort products based on the selected order
  const sortedProducts = filteredProducts.sort((a, b) => (
    sortOrder === 'asc' ? a.price - b.price : b.price - a.price
  ));

  // Pagination
  const productsPerPage = 12;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handlePriceChange = (e, type) => {
    const value = parseInt(e.target.value);
    if (type === 'min' && value < priceRange.max) {
      setPriceRange({ ...priceRange, min: value });
    } else if (type === 'max' && value > priceRange.min) {
      setPriceRange({ ...priceRange, max: value });
    }
  };

  const handleCategoryClick = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== categoryName));
    } else {
      setSelectedCategories([...selectedCategories, categoryName]);
    }
  };

  

  return (
    <div className="flex my-4 justify-between">
      {/* Left column */}
      <div className="w-80% pr-10">
        <div className='flex justify-between'>
          {/* Showing x of x results */}
          <div className="mb-4 text-left">{`Showing ${currentProducts.length} of ${filteredProducts.length} results`}</div>
          {/* Sorting dropdown */}
          <div className="mb-4 text-right">
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="asc">Lowest Price</option>
              <option value="desc">Highest Price</option>
            </select>
          </div>
        </div>

        {/* Product cards */}
        {currentProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {currentProducts.map(product => (
              <Suspense key={product.id} fallback={<div>Loading...</div>}>
                <ProductCard
                  product={product}
                  selected={selectedProduct === product.id}
                  addToCart={(productId, quantity) => handleAddToCart(productId, quantity)} 
                />
              </Suspense>
            ))}
          </div>
        )}

        {/* Display a message if no products match the filters */}
        {filteredProducts.length === 0 && (
          <div className=''>No products found.</div>
        )}

        {/* Pagination */}
        <div>
          <ul className="flex justify-center pt-4">
            {Array(Math.ceil(filteredProducts.length / productsPerPage))
              .fill()
              .map((_, i) => (
                <li key={i} className="mx-1">
                  <button
                    onClick={() => paginate(i + 1)}
                    className="px-3 py-1 bg-custom-blue text-white"
                  >
                    {i + 1}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Right column */}
      <div className="w-20%">
        {/* Search bar */}
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Search product..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Shopping Cart component */}
        <ShoppingCart
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
          removeFromCart={removeFromCart}
          createOrder={createOrder}
        />        
        {/* Price filter */}
        <div className="mb-4">
          <label className="block">Price Filter</label>
          <input 
            type="range" 
            min="0" 
            max="2000" 
            value={priceRange.min} 
            onChange={(e) => handlePriceChange(e, 'min')}
            className="w-full"
          />
          <input 
            type="range" 
            min="0" 
            max="2000" 
            value={priceRange.max} 
            onChange={(e) => handlePriceChange(e, 'max')}
            className="w-full"
          />
          <div className="flex justify-center">
            <span>{priceRange.min}-</span>
            <span> {priceRange.max}</span>
          </div>
        </div>

        {/* Product categories */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <ul>
            {categories.map(category => (
              <li key={category.id}>
                <button
                  onClick={() => handleCategoryClick(category.name)}
                  className={`cursor-pointer ${selectedCategories.includes(category.name) ? 'font-bold' : ''}`}
                >
                  {category.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

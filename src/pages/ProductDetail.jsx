// src/pages/ProductDetail.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import axios from 'axios';
import { toast } from'react-hot-toast';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('S');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    setIsLoading(true);
    axios.get(`https://apishirts-production.up.railway.app/api/tshirts/${id}`)
      .then(response => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError('Failed to load product details');
        setIsLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
   if (!selectedSize) {
     toast.error('Please select a size', {
       duration: 2000,
       style: {
         background: '#F3F4F6',
         color: '#1F2937',
       },
     });
     return;
   }
   
   addToCart({ ...product, selectedSize });
   toast.success(
     <div className="flex items-center gap-2">
       <div className="flex flex-col">
         <span className="font-medium">{product.name}</span>
         <span className="text-sm text-gray-500">Size: {selectedSize}, Added to cart</span>
       </div>
     </div>,
     {
       duration: 2000,
       style: {
         background: '#F3F4F6',
         color: '#1F2937',
       },
     }
   );
 };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-800"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Error</h2>
          <p className="mt-2 text-gray-600">{error || 'Product not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="aspect-w-3 aspect-h-4 bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={`https://apishirts-production.up.railway.app/images/product${product.id}.jpg`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-sm text-gray-500">{product.brand}</p>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold text-gray-900">${product.price}</h3>
          </div>

          {/* Product Description */}
          <div>
            <h3 className="text-sm font-medium text-gray-900">Description</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Details</h3>
              <ul className="mt-2 space-y-2 text-sm text-gray-600">
                <li><span className="font-medium">Material:</span> {product.material}</li>
                <li><span className="font-medium">Color:</span> {product.color}</li>
                <li><span className="font-medium">Category:</span> {product.category}</li>
                <li><span className="font-medium">In Stock:</span> {product.inStock ? 'Yes' : 'No'}</li>
              </ul>
            </div>

            {/* Size Selection */}
            <div>
               <h3 className="text-sm font-medium text-gray-900">Select Size</h3>
               <div className="grid grid-cols-4 gap-2 mt-2">
                  {product.sizes.map((size) => (
                     <button
                     key={size}
                     onClick={() => setSelectedSize(size)}
                     className={`py-2 text-sm font-medium rounded-md ${
                        selectedSize === size
                           ? 'bg-red-800 text-white'
                           : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                        {size}
                     </button>
                  ))}
               </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-3 px-8 rounded-md text-white text-lg font-medium ${
                product.inStock
                  ? 'bg-red-800 hover:bg-red-900'
                  : 'bg-gray-400 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
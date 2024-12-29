import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

function Product({ tshirt }) {  

   const { addToCart } = useCart();
   const navigate = useNavigate();
 
   const handleProductClick = () => {
     navigate(`/product/${tshirt.id}`);
   };
 
   const handleAddToCart = (e) => {
      e.stopPropagation();
      addToCart(tshirt);
      toast.success(
        <div className="flex items-center gap-2">
          <span className="font-medium">{tshirt.name}</span>
          <span>added to cart!</span>
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
   
   // Render the product component
   return (
     <div onClick={handleProductClick} 
       className="group relative bg-gray-50 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
     >
       {/* Image Container */}
       <div className="aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden">
         <img
           src={`https://apishirts-production.up.railway.app/images/product${tshirt.id}.jpg`}
           alt={tshirt.name}
           className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
         />
       </div>
 
       {/* Content Container */}
       <div className="p-6">
         <h3 className="text-xl font-semibold mb-2 text-gray-900">
           {tshirt.name}
         </h3>
         <p className="text-gray-600 mb-4 line-clamp-2">
           {tshirt.description}
         </p>
         <div className="flex items-center justify-between">
           <span className="text-xl font-bold text-red-800">
             ${tshirt.price}
           </span>
           <button className="
           bg-red-800 text-white px-6 py-2 rounded-md transition-colors
           duration-300 hover:bg-red-900 focus:outline-none focus:ring-2
           focus:ring-red-500 focus:ring-offset-2"  onClick={handleAddToCart}>
             Add to Cart
           </button>
         </div>
       </div>
     </div>
   );
 }
 
 export default Product;
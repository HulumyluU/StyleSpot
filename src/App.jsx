import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import './App.css';
import Cart from './pages/Cart';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import { CartProvider } from './context/CartContext';
import ProductDetail from './pages/ProductDetail';
import { Toaster } from 'react-hot-toast';
import Pay from './pages/Pay';
function App() {
  return (
    <CartProvider>
      <Router>
         <Layout>
            <Toaster position="top-right" />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contact />} />
               <Route path="/cart" element={<Cart />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/shop" element={<Shop />} />
               <Route path="/product/:id" element={<ProductDetail />} />
               <Route path='/pay' element={<Pay />} />
            </Routes>
         </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
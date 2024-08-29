import Products from './products'
import './products.css'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import ProductDetails from './productDetails'
import HomePage from './home'
import CartPage from './cart';
import ShippingForm from './checkout.jsx';
import Navbar from './nav.jsx';
import ServicesPage from './services.jsx';
import AboutUs from './About.jsx';
import Categories from './categorizedProducts.jsx';
import ComputerRepair from './computerRepair.jsx';
import { useState } from 'react';
import Login from './login.jsx';
import CategoriesNav from './categoriesNav.jsx';
import Footer from './footer.jsx';


export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return(
    <Router>
      <div>
      <Navbar setSearchQuery={setSearchQuery}/>
        
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products searchQuery={searchQuery}/>} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="computerRepair" element={<ComputerRepair/>} />
          <Route path="About" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/categoriesNav" element={<CategoriesNav />} />
          <Route path="/products/:category" element={<Categories />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/footer" element={<Footer />} />
          
          <Route path="/cart/checkout" element={localStorage.getItem('authtoken')?<ShippingForm/>:<Navigate to="/login" />}/>
          
          <Route path="*" element={<HomePage />} />
          

        </Routes>
      <Footer/>  
      </div>
    </Router>
  )
  
      
}



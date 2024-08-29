import React from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { useState ,useEffect} from 'react';




const Navbar = ({setSearchQuery}) => {
  

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [query,setQuery]=useState('');
  const [count,setCount]=useState('');
  const [cartItems,setCartItems]=useState([])
  
  const navigate = useNavigate();
  console.log(typeof setSearchQuery);

  useEffect(() => {
    const handleCartUpdated=()=>{
      const storedItems = JSON.parse(localStorage.getItem("addedItems")) || [];
      setCartItems(storedItems);
      const allItems=storedItems.reduce((total,item)=>total+item.quantity,0);
      setCount(allItems)

      console.log(allItems)


    }
    
    window.addEventListener('cartUpdated', handleCartUpdated);

        // Clean up the event listener on component unmount
    return () => {
        window.removeEventListener('cartUpdated', handleCartUpdated);
    };


  }, []);

  

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(query);
    navigate('/products'); // Navigate to the products page after search
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsOpen(!isProductsOpen);
  };
  return (
    
    <nav className="navbar">
      <div className="navbar-logo">
      <img src="/img/Logoo-removebg-preview.png" alt="LabEquip Logo" className="logo-image" />
      </div>
      <ul className="navbar-links">

        <li><Link to="/">Home</Link></li>
        
        <li onMouseEnter={toggleProductsDropdown} onMouseLeave={toggleProductsDropdown}>
          <Link to="/products">Shop ▼</Link>
          {isProductsOpen && (
            <ul className="dropdown">
              
              <li><Link to="/products/Chemicals">Chemicals</Link></li>
              <li><Link to="/products/Glassware">Glassware</Link></li>
              <li><Link to="/products/Gas-accessories">Gas Accessories</Link></li>
              <li><Link to="/products/Electronics">Electronics</Link></li>
          </ul>
          )}
        </li>


        <li onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}>
          <Link to="/services">Services ▼</Link>
          {isServicesOpen && (
            <ul className="dropdown">
              <li><Link to="/lab-setup">Laboratory Construction and SetUp</Link></li>
              <li><Link to="/MobileLabs">Mobile Labs design</Link></li>
              <li><Link to="/computerRepair">Computer maintenance</Link></li>
              <li><Link to="/repair">Lab Equipment Repairs</Link></li>
              <li><Link to="/GasInstallations">Gas Installations</Link></li>
              <li><Link to="/printersRepairs">Printers Repairs & Servicing</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/About">About us</Link></li>
        <li className='cartNav'><Link to="/cart">Cart</Link><div className="cartCount">{count}</div></li>
        <li><Link to="/login">Login/Sign up</Link></li>
        
        
      </ul>

      <form onSubmit={handleSearch} className="search">
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button type='submit'>search</button>
      </form>
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("addedItems")) || [];
    setCartItems(storedItems);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const allProducts = await response.json();

        const productsWithQuantity = cartItems.map((item) => {
          const product = allProducts.find((p) => p.id === item.id);
          return { ...product, quantity: item.quantity };
        });

        setProducts(productsWithQuantity);
      } catch (err) {
        setError("Failed to load products");
      }
    };

    if (cartItems.length > 0) {
      fetchProducts();
    }
  }, [cartItems]);

  const updateQuantity = (id, newQuantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    localStorage.setItem("addedItems", JSON.stringify(updatedItems));
    setCartItems(updatedItems);
    
  };

  const removeItemFromCart = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("addedItems", JSON.stringify(updatedItems));
    setCartItems(updatedItems);
  };
  
  

  if (error) {
    return <div>{error}</div>;
  }

  if (products.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="cartContainer">
      {products.map((product) => (
        <div key={product.id} className="cartProductItem">
          <img src={product.image} alt={product.name} className="cartProductImage" />
          <div className="cartProductName">
            <span>{product.name}</span>
          </div>
          <div className="cartProductTotal">
            <h2>${product.cost * product.quantity}</h2>
          </div>
          <div className="cartProductQuantity">
            <button onClick={() => updateQuantity(product.id, product.quantity - 1)}>-</button>
            <span>{product.quantity}</span>
            <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
          </div>
          <button className="cartRemoveButton" onClick={() => removeItemFromCart(product.id)}>Remove</button>
        </div>
      ))}
      <div className="cartOverallTotal">
        <h3>
          Overall Total: $
          {products.reduce((accumulator, product) => {
            return accumulator + product.cost * product.quantity;
          }, 0)}
        </h3>
      </div>
      <Link to='/cart/checkout'><button>Proceed to checkout</button></Link>
    </div>
  );
  
}

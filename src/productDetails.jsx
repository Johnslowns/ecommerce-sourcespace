import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); // Quantity starts at 1
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem('addedItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((products) => {
        const foundProduct = products.find((p) => p.id === parseInt(id, 10));
        if (!foundProduct) {
          setError('Product not found');
        } else {
          setProduct(foundProduct);
        }
      })
      .catch((err) => setError('Failed to load products'));
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const increaseQuantity = () => setQuantity(prevQty => prevQty + 1);
  const decreaseQuantity = () => setQuantity(prevQty => Math.max(1, prevQty - 1));

  const addItemsToCart = () => {
    const itemIndex = cartItems.findIndex(cartItem => cartItem.id === product.id);

    let updatedCart;

    if (itemIndex !== -1) {
      // If item exists, increase its quantity
      updatedCart = cartItems.map((cartItem, index) =>
        index === itemIndex
          ? { ...cartItem, quantity: cartItem.quantity + quantity } 
          : cartItem
      );
    } else {
      // If item does not exist, add it with the selected quantity
      updatedCart = [...cartItems, { id: product.id, quantity }];
    }

    setCartItems(updatedCart);
    localStorage.setItem('addedItems', JSON.stringify(updatedCart));

    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
  };

  return (
    <div className="singleProduct">
      <span className="close-btn">&times;</span>
      <div className="single-pro-image">
        <img src={product.image} alt={product.name} width="100%" className="big_img" />
        <div className="small-image-group">
          {[...Array(4)].map((_, index) => (
            <div className="small-image-col" key={index}>
              <img src={product.image} alt={`Small ${product.name}`} width="100%" className="small-img" />
            </div>
          ))}
        </div>
      </div>
      <div className="single-pro-details">
        <h3>{product.name}</h3>
        <h2>KES <span className="unit_price">{product.cost}</span></h2>
        <h4>QUANTITY:</h4>
        <div className="thecart">
          <div className="quantity-selector">
            <button className="decrement-btn" onClick={decreaseQuantity}>-</button>
            <input type="number" className="quantity-input" value={quantity} readOnly />
            <button className="increment-btn" onClick={increaseQuantity}>+</button>
          </div>
          <button className="bn632-hover bn18" onClick={addItemsToCart}>ADD TO CART</button>
        </div>
        <h4>Specifications</h4>
        <ul>
          {product.specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

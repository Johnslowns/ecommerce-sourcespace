import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Products({ searchQuery}) {

  console.log("Search Query in Products:", searchQuery);
  const [products, setProducts] = useState([]);
  const [modalOpen,setModalOpen]=useState(false)
  const [cartItems, setCartItems] = useState(() => {
    const savedItems = localStorage.getItem('addedItems');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  const addItemsToCart = (item) => {
    const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
    let updatedCart;

    if (itemIndex !== -1) {
      updatedCart = cartItems.map((cartItem, index) =>
        index === itemIndex 
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCart);
    localStorage.setItem('addedItems', JSON.stringify(updatedCart));

    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
    isModalOpen();
  };

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then((products) => {
        setProducts(products);
      });
  }, []);

  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (searchQuery) {
      const results = products.filter(product =>
        product.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);
    }
    else {
      setFilteredProducts(products);
    }
  }, [searchQuery,products]);

  const isModalOpen=()=>{
    setModalOpen(true)
  }
  const isModalClosed=()=>{
    setModalOpen(false)
  }

  return (
    <div>
      <div className='allProducts'>
        <div>
          <ul className='productsList'>
            {filteredProducts.map((product) => (
              <li key={product.id} className='productItem'>
                <div className='theProduct'>
                  <Link to={`/products/${product.category}/${product.id}`} className='productLink'>
                    <div className='productImage'>
                      <img src={product.image} alt={product.name} />
                      <div className='productDetails'>
                        <div className='nameRating'>
                          <span>{product.name}</span>
                          <span>{product.rating}</span>
                        </div>
                        <div className='cost'>
                          <h2>{product.cost}</h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <button className='cartButton' onClick={() => addItemsToCart({ id: product.id, quantity: 1 })}>
                    ADD TO CART
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {modalOpen &&(
          <div className="modal">
            <div className="modal-content">
              <h2>Item Added to Cart</h2>
              <p><Link><button>Proceed to checkout</button></Link></p>
              <button onClick={isModalClosed}>Close</button>
            </div>
          </div>)}
      </div>
    </div>
  );
}

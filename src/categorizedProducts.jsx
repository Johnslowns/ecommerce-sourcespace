import { useParams,Link} from "react-router-dom";
import { useEffect, useState } from "react";



export default function Categories(){
    const{category}=useParams();
    const[products,setProducts]=useState([])
    const [cartItems, setCartItems] = useState(() => {
        // Initialize from localStorage if it exists
        const savedItems = localStorage.getItem('addedItems');
        
        return savedItems ? JSON.parse(savedItems) : [];
      });

    useEffect(()=>{
        fetch('http://localhost:3000/products')
        .then(response=>response.json())
        .then((data)=>{
            const filteredProducts=data.filter((p)=>p.category===category)

            setProducts(filteredProducts)

        })
        .catch(error => console.error("Error fetching products:", error));
            
        

    },[category])
    const addItemsToCart = (item) => {
        // Check if the item is already in the cart
        const itemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
      
        let updatedCart;
      
        if (itemIndex !== -1) {
          // If item exists, increase its quantity
          updatedCart = cartItems.map((cartItem, index) =>
            index === itemIndex 
              ? { ...cartItem, quantity: cartItem.quantity + 1 } 
              : cartItem
          );
        } else {
          // If item does not exist, add it with a quantity of 1
          updatedCart = [...cartItems, { ...item, quantity: 1 }];
        }
      
        // Update state and localStorage
        setCartItems(updatedCart);
        localStorage.setItem('addedItems', JSON.stringify(updatedCart));
      
        // Dispatch custom event to notify about the cart update
        const event = new Event('cartUpdated');
        window.dispatchEvent(event);
      };
      

  return (
    <div>
      <h1>{category}</h1>
      <div className='allProducts'>
        <div>
          <ul className='productsList'>
            {products.map((product) => {
              return (
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
                    <button className='cartButton' onClick={() => addItemsToCart({ 'id': product.id, 'quantity': 1 })}>
                      ADD TO CART
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
      
}
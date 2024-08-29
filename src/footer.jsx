import { Link } from "react-router-dom";
export default function Footer(){
    return (
        <div className="theFooter">


            <div className="bottom_links">
                <div className="col">
                    <h4>Contact</h4>
                    <p><strong>Address:</strong> Gakere Road, opposite Old Batian building, Nyeri</p>
                    <p><strong>Phone:</strong> +254743905708</p>
                    <p><strong>Hours:</strong> 0900HRS-1830HRS, Mon-Sat</p>
                    <div className="follow">
                        <h4>Follow Us</h4>
                        <div className="icon">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-pinterest-p"></i>
                        <i className="fab fa-youtube"></i>
                        </div>
                    </div>
                </div>
        
            <ul className="col">
                <li><h4>About</h4></li>
                <li><Link to='/aboutUs'>About us</Link></li>
                <li><Link to='/aboutUs'>Delivery Information</Link></li>
                <li><Link to='/aboutUs'>Privacy Policy</Link></li>
                <li><Link to='/aboutUs'>Terms & Conditions</Link></li>
                <li><Link to='/aboutUs'>Contact Us</Link></li>
            </ul>
        
            <ul className="col">
                <li><h4>My Account</h4></li>
                <li><Link to='/login'>Sign in</Link></li>
                <li><Link to='/aboutUs'>View Cart</Link></li>
                <li><Link to='/aboutUs'>Track My Order</Link></li>
                <li><Link to='/aboutUs'>Help</Link></li>
                <li><Link to='/aboutUs'>My wishlist</Link></li>
            </ul>
        
            <div className="col install">
                <h5>Secured Payment gateways</h5>
                <img src="/img/pay/pay.png" alt="Payment Options" />
                <img src="/img/lipa_na_mpesa.jpg" id="lipa_na_mpesa" alt="Lipa Na Mpesa" />
            </div>
            </div>
        
            <div className="copyrights">
            <p>©2024, Tech2-HTML CSS ECOMMERCE TEMPLATE</p>
            </div>
        </div>
    );
      
}
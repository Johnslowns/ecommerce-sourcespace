import { Link } from "react-router-dom"
export default function CategoriesNav(){

    return(
        <div className="categoriesBorder">
            <ul className="categoriesNavs">
                <li><Link to='/products' >ALL</Link></li>
                <li><Link to='/products/Electronics' >ELECTRONICS</Link></li>
                <li><Link to='/products/Glassware/' >GLASSWARE</Link></li>
                <li><Link to='/products/Gas-accessories' >GAS ACCESSORIES</Link></li>
                <li><Link to='/products/Chemicals' >CHEMICALS</Link></li>
            </ul>
        </div>
    )
}
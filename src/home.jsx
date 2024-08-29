import CategoriesNav from "./categoriesNav";
import Products from "./products";

export default function HomePage(){
    return(
        <div>
            <div className="homebanner">
                <img src="/img/lab-banner.jpg" alt="" />
            </div>
            <div className="productCategories">
                <CategoriesNav/>
                <Products/>
            </div>
            

        </div>
        
        
    )
}
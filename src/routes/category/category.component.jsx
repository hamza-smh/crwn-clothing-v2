import {CategoryContainer,CategoryTitle} from "./category.styles.jsx";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
//import { useContext } from "react";
//import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/category.selector.js";

const Category = () =>{

    const {category} = useParams();
    //const {categoriesMap} = useContext(CategoriesContext)
console.log("render/re-rendering category component");

    const categoriesMap = useSelector(selectCategoriesMap);
    
    const [products, setProducts] = useState(categoriesMap[category]);




    useEffect(() => {
console.log("effect fired calling setProducts ")


        setProducts(categoriesMap[category]);
    },[category,categoriesMap])


    return(
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
            {
                products && //check: only renders when "products" is present
                products.map((product) => (
                <ProductCard key={product.id} product={product}/>
                ))
            }
            </CategoryContainer>
    </>    
    );
}
export default Category;
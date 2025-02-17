//import {useContext } from "react";
import { useSelector } from "react-redux";

//import {CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
//  const {categoriesMap} = useContext(CategoriesContext);
const categoriesMap = useSelector(selectCategoriesMap);  
  
  
  
  
  
    return (
        <>
            {    Object.keys(categoriesMap).map( (title) =>
                    {
                        const products = categoriesMap[title]
                        return <CategoryPreview key={title}  products={products} title={title}/>

                    }

                )
            }
        </>
    )
};
export default CategoriesPreview;

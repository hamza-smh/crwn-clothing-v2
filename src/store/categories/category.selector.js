//   * Doesn't render until the [] value is changed imporves data cycle

import { createSelector } from "reselect";

const selectCategoryReducer = (state) => {
    console.log("Selector 1 Fired")
    return state.categories;
}

//This is a memoized selector
export const selectCategories = createSelector(
    [selectCategoryReducer],                                    //input selector
    (categoriesSlice) => {                                        //output selector*
        console.log("Selector 2 Fired")
    return categoriesSlice.categories               
});

export const selectCategoriesMap = createSelector(
    [selectCategories],                                   //input selectorMap
    (categories) => {                                           //output selectorMap*       
             console.log("Selector 3 Fired");                                                        
        return  categories.reduce((acc, category) => {
                    const {title,items} = category;
                    acc[title.toLowerCase()] = items;
                return acc;
        }, {});
    }
);











// export const selectCategoriesMap = (state) =>{

//     console.log("Selector Fired");
//     return (
//         state.categories.categories.reduce((acc, category) => {
//                 const {title,items} = category;
//                 acc[title.toLowerCase()]=items;
//             return acc;
//         },
//     {}
//     ))
// }
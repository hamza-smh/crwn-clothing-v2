import styled from "styled-components";


export const CategoryContainer = styled.div`
    display : grid;
    grid-template-columns: repeat(4,1fr);
    column-gap: 10px;
    row-gap: 50px;
`
export const CategoryTitle = styled.h2`
    font-size: 64px;
    font-weight: 1000;
    margin-bottom: 25px;
    text-align: center;
    letter-spacing: 25px;
`

// .category-container{
//     display : grid;
//     grid-template-columns: repeat(4,1fr);
//     column-gap: 10px;
//     row-gap: 50px;
// }


// .category-title{
// font-size: 38px;
// font-weight: 900;
// margin-bottom: 25px;
// text-align: center;
// }
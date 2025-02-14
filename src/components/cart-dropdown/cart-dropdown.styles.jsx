
import { BaseButton , GoogleSignInButton ,InvertedButton } from "../button/button.styles";
import styled from 'styled-components';


export const CartDropdownContainer = styled.div `
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 0 px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
   
    ${GoogleSignInButton},
    ${BaseButton},
    ${InvertedButton}
    {
       margin - top: auto;
    }
`;
export const EmptyMessage = styled.span `
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItems = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`;

// export const MyButton = styled(Button)`
//     margin-top: auto;
// `

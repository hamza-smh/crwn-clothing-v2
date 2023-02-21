import "./getstarted.styles.scss";


const BUTTON_STYLE_CLASSES = {
    transparent: 'transparent',
    inverted   : "inverted",

}
const GetStartedButton = ({buttonType}) =>{
    return(
        
             <button className = {`button ${BUTTON_STYLE_CLASSES[buttonType]}`} > Get Started </button>
    );

}
export default GetStartedButton;
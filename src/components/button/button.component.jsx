import {BaseButton,GoogleSignInButton,InvertedButton} from  "./button.styles";


export const BUTTON_STYLE_CLASSES = {
    base:   'base',
    google : 'google-sign-in',
    inverted : "inverted",
}

const getButton = (buttonType = BUTTON_STYLE_CLASSES.base) => (
    {
        [BUTTON_STYLE_CLASSES.base]  :   BaseButton,
        [BUTTON_STYLE_CLASSES.google]  :  GoogleSignInButton,
        [BUTTON_STYLE_CLASSES.inverted]  :  InvertedButton
    }[buttonType]
)
const Button = ({children , buttontype, ...otherProps}) =>{

    const CustomButton = getButton(buttontype);
    return(
        // <button className={`button-container ${BUTTON_STYLE_CLASSES[buttontype]}`}{...otherProps}>{children}</button>
        <CustomButton {...otherProps}>{children}</CustomButton>
        )
}
export default Button;
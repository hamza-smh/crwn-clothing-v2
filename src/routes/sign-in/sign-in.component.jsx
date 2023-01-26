// import {useEffect} from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from '../../components/sign-up/sign-up-form.component.jsx';
import Button from '../../components/button/button.component.jsx';
import {
  //auth,
  signInWithGooglePopup,
  //signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils.js';

import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {
      user
    } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // const logGoogleRedirectUser = async () => {
  //   const {user} = await signInWithGoogleRedirect();
  //   console.log(user)

  // };

  // useEffect(async ()=>{
  //   const response = getRedirectResult(auth);
  //   if(response){
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // },[]);


  return ( 
    <div>
    <h1 className = 'sign-in' > Sign In Page </h1> 
    {/* <button type = "button" className = "btn btn-primary" onClick = {logGoogleUser} 
    >Sign in with Google Popup </button>  */}
    <Button buttontype="google" type = 'submit' > Sign in with Google Popup </Button>
    <br/> <br/> 
    {
      /* <button type = "button" className = "btn btn-danger"  
              onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */
    }


     <SignUpForm /> 
    
    
    </div>

  );
};


export default SignIn;
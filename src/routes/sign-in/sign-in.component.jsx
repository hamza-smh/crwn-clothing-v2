import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1 className='sign-in'>Sign In Page</h1>
      <button type = "button" class = "btn btn-primary"  
        onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;

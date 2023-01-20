import {
  initializeApp
} from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyAxwLG8L28xc7fZy3inw8UZzm0ykL5LRiI",
  authDomain: "crwn-clothing-webapp-22951.firebaseapp.com",
  projectId: "crwn-clothing-webapp-22951",
  storageBucket: "crwn-clothing-webapp-22951.appspot.com",
  messagingSenderId: "605463477211",
  appId: "1:605463477211:web:52a80adbfe57193be545fe"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const {
      displayName,
      email
    } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
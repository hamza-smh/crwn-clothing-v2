
import firebase from 'firebase / app';

import {
    collection,
    addDoc
} from "firebase/firestore";

import {
    initializeApp
} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';


const firebaseConfig = {
    // apiKey: "AIzaSyAxwLG8L28xc7fZy3inw8UZzm0ykL5LRiI",
    // authDomain: "crwn-clothing-webapp-22951.firebaseapp.com",
    // projectId: "crwn-clothing-webapp-22951",
    // storageBucket: "crwn-clothing-webapp-22951.appspot.com",
    // messagingSenderId: "605463477211",
    // appId: "1:605463477211:web:52a80adbfe57193be545fe"

    apiKey: "AIzaSyB89mpVY9Tcjb-F2igV-6NRH_wz2M2xUfE",
    authDomain: "crwn-db-e9a50.firebaseapp.com",
    databaseURL: "https://crwn-db-e9a50.firebaseio.com",
    projectId: "crwn-db-e9a50",
    storageBucket: "crwn-db-e9a50.appspot.com",
    messagingSenderId: "884429369852",
    appId: "1:884429369852:web:fd7165c8680b41c3770279",
    measurementId: "G-QSEPFY5B43"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//const firebaseApp = firebase.initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
    prompt: "select_account"
});



//export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)


//export const db = getFirestore(firebaseApp);
//export const db = firebaseApp.firestore();

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.firestore();;

//const db = firebaseApp.firestore;

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);

    // const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);
    // console.log(userSnapshot.exists());

    try {
        // await setDoc(userDocRef, {
        const docRef = await addDoc(collection(db, "users"), {
            displayName: userAuth.displayName,
            email: userAuth.email,
            //        createdAt,
        });
    } catch (error) {
        console.log('error creating the user', error.message);
    }
}
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDo736lkfns74dsxjrKqFoHxk2CUx_54yg',
  authDomain: 'angie-clothing-boutique.firebaseapp.com',
  projectId: 'angie-clothing-boutique',
  storageBucket: 'angie-clothing-boutique.appspot.com',
  messagingSenderId: '654704833609',
  appId: '1:654704833609:web:3c9f1ceaa8930cd45abb98',
  measurementId: 'G-55CBRHJTWC',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

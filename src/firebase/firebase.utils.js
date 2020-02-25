import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBrnBTVa2uCaAFpxM4fMlzmp9Wb3VJRbIE',
  authDomain: 'cloths-db.firebaseapp.com',
  databaseURL: 'https://cloths-db.firebaseio.com',
  projectId: 'cloths-db',
  storageBucket: 'cloths-db.appspot.com',
  messagingSenderId: '104942340413',
  appId: '1:104942340413:web:3caf3dd0781afb53f61d54',
  measurementId: 'G-N1F000TZYB'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

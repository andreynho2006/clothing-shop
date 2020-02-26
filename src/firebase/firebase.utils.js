import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// config object from firebase
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

// method to create a user profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // if user is null return
  if (!userAuth) return;

  // get the document with the auth id from firebase
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  // get a snapshot of the data returned by userRed
  const snapShot = await userRef.get();

  console.log(snapShot);

  // if there is a snapshot (exists: true)
  if (!snapShot.exists) {
    // get the displayName and email from the userAuth and a date
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // try to add some fields to userAuth.id document
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

// initialize firebase with the object config
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// auth with google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

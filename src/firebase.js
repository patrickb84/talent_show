import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyBqYZD_MGnYWggThqsE05woELm2_rvoe78',
  authDomain: 'talent-show-c4553.firebaseapp.com',
  projectId: 'talent-show-c4553',
  storageBucket: 'talent-show-c4553.appspot.com',
  messagingSenderId: '922775167947',
  appId: '1:922775167947:web:1baa893835cdaa29770c4e',
  measurementId: 'G-25WCFVVMH3',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

/**
 * Google Sign in
 * @returns
 */
export const signInWithGoogle = () =>
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

/**
 * Facebook sign in
 */
export const signInWithFacebook = () => {
  auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider());
  auth
    .getRedirectResult()
    .then(result => {
      const user = result.user;
      console.log({ user });
    })
    .catch(function (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.log({ errorCode, errorMessage, email, credential });
    });
};

/**
 * Sign in with email and password
 * @param {*} email
 * @param {*} password
 */
export const signInWithEmail = (email, password) => {
  auth.signInWithEmailAndPassword(email, password).catch(error => {
    console.log(error.code, error.message);
  });
};

/**
 * Forgot Password
 * @param {*} email
 */
export const forgotPassword = email => {
  auth.sendPasswordResetEmail(email).catch(err => console.error(err));
};

/**
 * Sign out
 */
export const signOut = () => {
  auth.signOut();
};

/**
 * Create a user profile doc, a.k.a add a user
 * @param {*} user
 * @param {*} additionalData
 * @returns
 */
export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user', console.error);
    }
  }
  return getUserDocument(user.uid);
};

/**
 * Fetch a user document, a.k.a. fetch user doc by user id
 * @param {*} uid
 * @returns
 */
export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    return firestore.doc(`users/${uid}`);
  } catch (error) {
    console.error('Error fetching user', error.message);
  }
};

export default firebase;

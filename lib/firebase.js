// It's all Version 9 adapted

import firebase from 'firebase/compat/app'

// import 'firebase/compat/auth';
// import 'firebase/compat/googleAuthProvider';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage';

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, where, getDocs, query, limit } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyArjpiOPSWtdqek7C2dsK4URoOQ1JsN2S0",
  authDomain: "landing2-9d868.firebaseapp.com",
  projectId: "landing2-9d868",
  storageBucket: "landing2-9d868.appspot.com",
  messagingSenderId: "510942818085",
  appId: "1:510942818085:web:0cf3cb76fac62a2df2f4cc"
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig)
// }

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const googleAuthProvider = new GoogleAuthProvider();

// export const firestore = firebase.firestore();
export const firestore = getFirestore(firebaseApp);
// export const storage = firebase.storage();
export const storage = getStorage(firebaseApp);
// export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const STATE_CHANGED = 'state_changed';


// Helper functions


/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  // const usersRef = collection(firestore, 'users');
  // const query = usersRef.where('username', '==', username).limit(1);

  const q = query(
    collection(firestore, 'users'), // ref to "users" collection
    where('username', '==', username),
    limit(1) // gt first hit, only 1 anyway
  )
  const userDoc = ( await getDocs(q) ).docs[0]; // get first element from arr which we need
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data?.createdAt.toMillis() || 0,
    updatedAt: data?.updatedAt.toMillis() || 0,
  };
}
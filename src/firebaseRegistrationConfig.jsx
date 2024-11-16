import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig2 = {
  apiKey: "AIzaSyDG94rN56vLFINCyr59uIrDKW7GhkznB2w",
  authDomain: "login-authentication78.firebaseapp.com",
  projectId: "login-authentication78",
  storageBucket: "login-authentication78.appspot.com",
  messagingSenderId: "67273361955",
  appId: "1:67273361955:web:af16131d9457b3020f3f96"
};
const registrationApp = !firebase.apps.some(app => app.name === 'REGISTRATION_APP') 
    ? firebase.initializeApp(firebaseConfig2, 'REGISTRATION_APP') 
    : firebase.app('REGISTRATION_APP');

const db2 = registrationApp.firestore();
export { db2 };

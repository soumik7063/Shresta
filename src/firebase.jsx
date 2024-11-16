import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

var firebaseConfig = {
  apiKey: "AIzaSyB4FHyZBghAYQICJSjWVw4jGNLIWzCggSo",
  authDomain: "otp-generator78.firebaseapp.com",
  projectId: "otp-generator78",
  storageBucket: "otp-generator78.appspot.com",
  messagingSenderId: "124714689510",
  appId: "1:124714689510:web:aff066d94aa5c164bb2c27"
};
firebase.initializeApp(firebaseConfig);
export default firebase
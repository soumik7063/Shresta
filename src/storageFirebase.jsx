import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const storageFirebaseConfig = {
  apiKey: "AIzaSyD1BpO-zPv0fRFt0w79e2CmsPj2-FVRmJk",
  authDomain: "txtimg-a35dd.firebaseapp.com",
  projectId: "txtimg-a35dd",
  storageBucket: "txtimg-a35dd.appspot.com",
  messagingSenderId: "365969519299",
  appId: "1:365969519299:web:dbd7454c9224422c606876"
};

const storageApp = getApps().find(app => app.name === "STORAGE_APP") || initializeApp(storageFirebaseConfig, "STORAGE_APP");
const imgDB = getStorage(storageApp);
const txtDB = getFirestore(storageApp);

export { imgDB, txtDB };

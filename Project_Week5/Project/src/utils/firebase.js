// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOChwMfUwnEVWrgCT5zvGSlz1li5ScNpA",
  authDomain: "netflicksgpt.firebaseapp.com",
  projectId: "netflicksgpt",
  storageBucket: "netflicksgpt.appspot.com",
  messagingSenderId: "259334898894",
  appId: "1:259334898894:web:ce29eb1864837e050bbc9f",
  measurementId: "G-TTGYMV8BR3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

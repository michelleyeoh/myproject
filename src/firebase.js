// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7URpuJUWlwytxj9y-bR3nIts-eDPyWOo",
  authDomain: "myeoh-32410.firebaseapp.com",
  projectId: "myeoh-32410",
  storageBucket: "myeoh-32410.appspot.com",
  messagingSenderId: "956108538647",
  appId: "1:956108538647:web:39515c3884f7ccb9af2d52",
  measurementId: "G-Y2D5EYET66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
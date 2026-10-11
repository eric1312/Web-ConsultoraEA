// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxy5HsJdvuwiWx3O_3CNv16Xg-QSKtyag",
  authDomain: "lista-de-cursos-ba510.firebaseapp.com",
  projectId: "lista-de-cursos-ba510",
  storageBucket: "lista-de-cursos-ba510.firebasestorage.app",
  messagingSenderId: "509245500205",
  appId: "1:509245500205:web:c0454232d48aa7c832c1a4",
  measurementId: "G-P80ZDR36EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

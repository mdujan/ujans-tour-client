import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByt-bifLxFxFS01PuiJbq5AFmgdXJ7wBE",
  authDomain: "b9a12-tourist.firebaseapp.com",
  projectId: "b9a12-tourist",
  storageBucket: "b9a12-tourist.appspot.com",
  messagingSenderId: "222729058035",
  appId: "1:222729058035:web:baea18f39ab571fc582986"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;



// apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
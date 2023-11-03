import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyBB9jsKjQYbecPZAXo7qbNfLvJOQapQEwE",
    authDomain: "green-puducherry.firebaseapp.com",
    projectId: "green-puducherry",
    storageBucket: "green-puducherry.appspot.com",
    messagingSenderId: "896098828351",
    appId: "1:896098828351:web:780f7cffc41520228d788a",
    measurementId: "G-4LRBHR7HD2"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getStorage(app);

  export default analytics;

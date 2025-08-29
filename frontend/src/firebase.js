import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE,
  authDomain: "mern-blog-bf808.firebaseapp.com",
  projectId: "mern-blog-bf808",
  storageBucket: "mern-blog-bf808.appspot.com",
  messagingSenderId: "551328642106",
  appId: "1:551328642106:web:831cd621e69ce0a3fe7103",
  measurementId: "G-D9X37FY6HW"
};

export const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
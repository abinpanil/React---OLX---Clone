import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyCMEW1TCuSA04s7EbzXDtvCIuIGCM_U4JQ",
  authDomain: "olx-clone-46f68.firebaseapp.com",
  projectId: "olx-clone-46f68",
  storageBucket: "olx-clone-46f68.appspot.com",
  messagingSenderId: "754851708809",
  appId: "1:754851708809:web:978ac0c3b1b826a41aab58",
  measurementId: "G-K9Y9JPMQKD"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;
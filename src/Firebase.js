
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, OAuthProvider} from 'firebase/auth'
import { getStorage } from 'firebase/storage'; 


const firebaseConfig = {
  apiKey: "AIzaSyBtnl6fILRpyQGdMeLUAalbYQUlV9mAads",
  authDomain: "harry-photos-b1ba8.firebaseapp.com",
  projectId: "harry-photos-b1ba8",
  storageBucket: "harry-photos-b1ba8.appspot.com",
  messagingSenderId: "403569531662",
  appId: "1:403569531662:web:bffe5337a0d6ea3745155f",
  databaseURL: "https://harry-photos-b1ba8-default-rtdb.firebaseio.com"
};


const firebaseapp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseapp);
const auth = getAuth(firebaseapp);
const googleProvider = new GoogleAuthProvider(firebaseapp)
const appleProvider = new OAuthProvider('apple.com')
export { storage, auth, googleProvider, appleProvider };



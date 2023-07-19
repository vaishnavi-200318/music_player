
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVXb6vGdmZW4VCQNfad0hSxv_vnxXgLbc",
  authDomain: "chat-143bc.firebaseapp.com",
  projectId: "chat-143bc",
  storageBucket: "chat-143bc.appspot.com",
  messagingSenderId: "226887354699",
  appId: "1:226887354699:web:a6457297c11a71657d00ce",
  measurementId: "G-BC2DYV6DHC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app , auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAOQHUQlmNG78SlGI8AlT-3XkxF3QNkOp0",
  authDomain: "insta-master-firebase.firebaseapp.com",
  projectId: "insta-master-firebase",
  storageBucket: "insta-master-firebase.appspot.com",
  messagingSenderId: "1021195441707",
  appId: "1:1021195441707:web:193167c8b8aaed7412fc6e",
  measurementId: "G-HQK463RHQR"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
import firebase from "firebase/compat";
import { getFirestore } from "firebase/firestore";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBkNlaS45dJyHR6sPIgAeueeuCLNZl-lmw",
  authDomain: "yiyi-cake.firebaseapp.com",
  databaseURL: "https://yiyi-cake.firebaseio.com",
  projectId: "yiyi-cake",
  storageBucket: "yiyi-cake.appspot.com",
  messagingSenderId: "487564214345",
  appId: "1:487564214345:android:871a9af692635010097f98",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  initializeAuth(firebase.app(), {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
}

export const db = getFirestore();

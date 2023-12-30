import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import firebase from "firebase/compat";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../config/firebase.config";

const useFirebaseAuth = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [userInformation, setUserInformation] = useState<DocumentData | null>(
    null
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(async (authUser) => {
      await AsyncStorage.setItem("user", JSON.stringify(authUser));

      if (!authUser?.phoneNumber) return;
      const userInfo = await getUserByPhoneNumber(authUser.phoneNumber);

      setUserInformation(userInfo);

      setUser(authUser);

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getUserByPhoneNumber = async (phoneNumber: string) => {
    const userQuery = query(
      collection(db, "users"),
      where("phoneNumber", "==", phoneNumber)
    );
    const querySnapshot = await getDocs(userQuery);

    if (!querySnapshot.empty) {
      return querySnapshot.docs[0].data();
    }

    return null;
  };

  const signIn = async (verification: string, otp: string) => {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verification,
      otp
    );

    try {
      await firebase.auth().signInWithCredential(credential);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const verifyPhoneNumber = async (
    phoneNumber: string,
    recaptchaVerifier: firebase.auth.RecaptchaVerifier
  ) => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    try {
      const verification = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        recaptchaVerifier
      );
      return verification;
    } catch (error) {
      console.error("Error verifying phone number:", error);
      throw error;
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return {
    loading,
    user,
    userInformation,
    signIn,
    verifyPhoneNumber,
    signOut,
    getUserByPhoneNumber,
  };
};

export default useFirebaseAuth;

import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// const faceBookProvider = new FacebookAuthProvider();
const provider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState([]);
  //   console.log(title);

  //==Google Login==//
  const googleLogIn = () => {
    return signInWithPopup(auth, provider);
  };

  //==FaceBook LogIn==//
  //   const faceBookLogIn = () => {
  //     return signInWithPopup(auth, faceBookProvider);
  //   };

  //   ==Create user with Email & Password== //
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   ==Login User==//
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //==Update Profile Details==//
  const updateUserProfile = (userDetails) => {
    return updateProfile(auth.currentUser, userDetails);
  };

  // ==Sign Out== //
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    title,
    setTitle,
    setUser,
    googleLogIn,
    createUser,
    loginUser,
    logOut,
    loading,
    updateUserProfile,
  };

  //   ===Set use=== //
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => {
      unsubscribe;
    };
  }, []);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

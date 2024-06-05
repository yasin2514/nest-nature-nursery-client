import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider).finally(() =>
      setLoading(false)
    );
  };

  // create user using email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false)
    );
  };

  // sign In
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password).finally(() =>
      setLoading(false)
    );
  };

  // sign Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth).finally(() => setLoading(false));
  };

  // update user profile
  const updateUserProfile = (name, photo) => {
    if (!auth.currentUser) {
      return Promise.reject(new Error("No user is currently signed in."));
    }
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      // get and set token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", { email: currentUser.email })
          .then((res) => {
            localStorage.setItem("token", res.data.token);
          });
      } else {
        localStorage.removeItem("token");
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    googleLogin,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

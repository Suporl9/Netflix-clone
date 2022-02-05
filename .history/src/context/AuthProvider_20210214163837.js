import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
const AuthContext = React.createContext();
export function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({children}) {
  const [currentuser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);     //when loading is tru that means we donot have any current user and in authstatechanged...
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email,password) {
      return auth.signInWithEmailAndPassword(email,password);
  }
  function logout(){
      return auth.signOut();
  }

  useEffect(() => {
    const Unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);   //loadig becomes false as there is a currentuser and is not null anymore and now in authcontext.provider
    });
    return Unsubscribe; //return to remove unneccesary behavior or prevent unnecessary memory leakage
  }, []);

  const value = {
    currentuser,
    signup,
    login,
    logout
  };
  return <AuthContext.Provider value={value}>{!loading &&children}</AuthContext.Provider>;   //
}

export default AuthProvider;

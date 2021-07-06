import React, { useState, useEffect, createContext } from "react";
import { app } from "../firebase/service-auth";
import Loading from "../../components/Loading";

export const AuthContext = createContext();

function Auth({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = app.auth().onAuthStateChanged((data) => {
      setCurrentUser(data);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {loading ? <Loading /> : children}
    </AuthContext.Provider>
  );
}

export default Auth;

import React, { createContext,useContext, useState, useEffect } from "react"
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  deleteUser,
  browserSessionPersistence,
  setPersistence
} from "firebase/auth";
import  {auth}  from "../components/firebase-config"




export const AuthContext = createContext({});

export const useAuthContext = () => {
  return useContext(AuthContext);
};



  export function UseAuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(false)
    
  
   
  
    useState(() => {
     
      const unsubscribe = onAuthStateChanged(auth, (res) => {
        if (res) {
          setCurrentUser(res);
        } else {
          setCurrentUser(null);
        }
        
        setLoading(false);
      });
      return unsubscribe;
    }, []);

    const login =  (email,password) => {
      return signInWithEmailAndPassword(auth, email, password)
    }

    const forgotPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
    };

    const logoutUser = () => {
      signOut(auth);
    };

    const deleteAccount = () => {
      deleteUser(currentUser)
    }

   const setLocal = () => {
     setPersistence(auth, browserSessionPersistence)
   }

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
      })
  
      return unsubscribe
    }, [])

    const contextValue = {
      currentUser,
      loading,
      login,
      forgotPassword,
      logoutUser,
      deleteAccount,
      setLocal

    }
  
    
  
    return (
      <AuthContext.Provider value={contextValue}>
        {!loading && children}
      </AuthContext.Provider>
    )
  }
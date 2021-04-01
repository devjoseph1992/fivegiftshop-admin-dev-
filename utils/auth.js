import React, { useState, useEffect, useContext, createContext } from 'react';
import firebase from '@/lib/firebase';

const authContext = createContext();

export function AuthProvider({ children }) {
 const auth = useProviderAuth();
 return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
 return useContext(authContext);
};

function useProviderAuth() {
 const [user, setUser] = useState(null);

 const signinWithGitHub = () => {
  return firebase
   .auth()
   .signInWithPopup(new firebase.auth.GithubAuthProvider())
   .then((response) => {
    setUser(response.user);
    return response.user;
   });
 };

 const signout = () => {
  return firebase
   .auth()
   .signOut()
   .then(() => {
    setUser(false);
   });
 };

 useEffect(() => {
  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
   if (user) {
    setUser(user);
   } else {
    setUser(false);
   }
  });

  return () => unsubscribe();
 }, []);

 return {
  user,
  signinWithGitHub,
  signout,
 };
}
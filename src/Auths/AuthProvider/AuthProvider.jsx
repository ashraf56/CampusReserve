import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../../firebase.config';


const auth = getAuth(app);
export let AuthService = createContext();
const Googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    let [user, setuser] = useState()
    let [Loading, setLoading] = useState(true);
    let AllUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    let googleSignin = () => {
        setLoading(true)
        return signInWithPopup(auth, Googleprovider)
    }
    let Signout = () => {
        return signOut(auth);
    }
    let Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    let updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    useEffect(() => {
        let Subscription = onAuthStateChanged(auth,
            RunningUser => {
                setuser(RunningUser);
                setLoading(false);
            }
        )
        return () => {
            Subscription();
        }
    }, [])
    const Authdata = {
        user, Loading, AllUser, googleSignin, Login, Signout, updateUser
    }
    return (
        <AuthService.Provider value={Authdata} >
            {children}
        </AuthService.Provider>
    );
};

export default AuthProvider;
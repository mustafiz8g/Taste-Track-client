import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";
import axios from "axios";


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

     const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password)
     }
     const loginUser = (email, password) => {
        setLoading(true)
         return signInWithEmailAndPassword(auth, email, password)
     }
     const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
     }
     // forget password 
     const forgetPassword = (email) => {
         setLoading(true)
        return sendPasswordResetEmail(auth, email)
        }
        //Update User 
        const updateUser = (updatedData) => {
            return updateProfile(auth.currentUser, updatedData)
        }
        
        const logOutUser = () => {
           setLoading(true)
           signOut(auth)
        }



     useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('state captured', currentUser?.email)

            if(currentUser?.email){
                const user = { email: currentUser.email };

                axios.post('https://taste-track-server.vercel.app/jwt', user , { withCredentials: true })
                .then(res =>{
                    
                    console.log('login ',res.data)
                    setLoading(false)
                } )
            }
            else{
                axios.post('https://taste-track-server.vercel.app/logout', {}, {
                    withCredentials: true
                })
                .then(res => {
                    console.log('logout', res.data)
                    setLoading(false)
                })
            }

                // put it in the right place

          
        })
        return () => {
            unsubscribe();
        }
     },[])

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        loginUser,
        logOutUser,
        loginWithGoogle,
        forgetPassword,
        updateUser,
       


    }
    return (
        <AuthContext.Provider value = {authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
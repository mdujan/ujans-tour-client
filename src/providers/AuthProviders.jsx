/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";
import useAxiosCommon from "../hook/useAxiosCommon";
// import { app } from "../firebase/firebase.config";




export const AuthContext =createContext(null);

// social auth providers:--> 
const googleProvider = new GoogleAuthProvider();


const AuthProviders = ({children}) => {
    const[user,setUser]=useState(null)
    // eslint-disable-next-line no-unused-vars
    const[loading,setLoading]=useState(true)
const axiosPublic= useAxiosCommon()
    // create User:--> 
    const createUser=(email, password,photoUrl)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password,photoUrl)
    }
    
        const signInUser = (email, password) =>{
            setLoading(true)
           return signInWithEmailAndPassword(auth, email, password)
        }
    
    //google login-->
    const googleLogin=()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
       
    }
    
    // LOGOUT:-->
    const logOut=()=>{
        setUser(null)
        setLoading(true)
       signOut(auth)
    };

// save user in db:
const saveUser = async user =>{
    const currentUser ={
        email:user?.email,
        name:user?.displayName,
        photoUrl:user?.photoURL,
        role:'tourist',
        status:'verified',
    }

    const {data} =await axios.put('http://localhost:5000/user',currentUser)
    return data
}


    // observer --:>
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
             if (currentUser) {
                
//  get token and store client :
             const userInfo= {email:currentUser.email} ;
             axiosPublic.post('/jwt',userInfo)                 
             .then(res =>{
                console.log(res.data)
         if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
               }
             })
             
            //    setUser(currentUser);
            //    setLoading(false)
            saveUser(currentUser)
             } else{
                localStorage.removeItem('access-token')
             }
                   setLoading(false)
           });
           return () =>unsubscribe();
     },[axiosPublic]);
    const values ={
        loading,
            user,
            createUser,
            signInUser,
            googleLogin,
            logOut
    }

    return (
        <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProviders;
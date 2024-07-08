import { createUserWithEmailAndPassword,  onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
// create context 
export const AuthContext = createContext(null);

// social provider
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  console.log('user her', user);
      // Create user function
  const createUser = (email, password) =>{
    // setLoading(true)
    return  createUserWithEmailAndPassword(auth, email, password)
 };

//  sign in User
const signInUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

// google log in

 //  googleLogin authentication here
 const googleLogin = () =>{
    return signInWithPopup(auth, googleProvider)
     }

    //  github authentication here
    const githubLogin = () =>{
        return signInWithPopup(auth, githubProvider)
    }

     //  logut 
const logOut = () =>{
    // setLoading(false)
    setUser(null)
    signOut(auth)
}


   // Observer
   useEffect(()=>{
            
    const unSubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
              setUser(user)
              
        }
      });
      return() =>{
        unSubscribe()
      }
},[])

    const travelInfo = {
        // Your travel information here
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user

    };

    return (
        <AuthContext.Provider value={travelInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

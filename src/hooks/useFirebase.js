import React, { useEffect, useState } from 'react'
import firebaseInit from '../firebase/firebase.init'
import { 
    getAuth,
    signOut ,
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
     GoogleAuthProvider,
     updateProfile,
     onAuthStateChanged,
    //  sendEmailVerification,
     } from "firebase/auth";


firebaseInit();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(true);
    const [check,setCheck]= useState(false)
  
    // const ClearError = () => {
    //   setTimeout(() => {
    //     setError("");
    //   }, 5000);
    // };
  
    // // clear error
    // useEffect(() => {
    //   ClearError();
    // }, [error]);
  
    //google sign in
  //google sign in 
  function signInWithGoogle(){
    return signInWithPopup(auth, googleProvider)
    .then((res) => {
          
      console.log(res.user);
      updateUserName(res.user.displayName,res.user.email)
    })
    .catch((err) => {setError(err.message)});
 }
  // get currently signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      else{
        setUser({})
      }
      // setLoading(false)
    });
    return () => unsubscribe;
  }, []);
  

  // adminnn
  useEffect(() => {
   fetch(`http://localhost:5000/isadmin?email=${user?.email}`)
   
   .then(res=>res.json())
   .then(data=>setCheck(data))
  }, [user]);

  console.log(check);
  console.log(user.email);
//add user
  const addUserName=(name,email)=>{
    const data = {name,email}
      fetch("http://localhost:5000/adduser",{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
      })
  }

//update user
  const updateUserName=(name,email)=>{
    const data = {name,email}
      fetch("http://localhost:5000/updateuser",{
        method:'PUT',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data)
      })
  }

    //signInWithEmailAndPassword >>
    function signInWithEmail (email,password,history,redirect)  {

      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          history.push (redirect)
          setUser(res.user);
        })
        .catch((err) => {setError(err.message)});
    };
  
    // sign out >>
    function logOut  () {
      signOut(auth)
        .then((result) => {
          setUser({});
        })
        .catch((err) => {
          setError(err.message);
        });
    };
 
// signUp
function signUpWithEmail  (name,email,password,history,redirect)  {
  // console.log(name,email,password);
   createUserWithEmailAndPassword(auth, email, password)
    .then((result)=>{
      history.push (redirect)
      updateProfile(auth.currentUser, {
        displayName: name 
      }).then(() => {
        console.log(result.user);
        addUserName(name,email)
      }).catch((error) => {
        console.log(error.message);
      });
      alert('user has been created')

    })
    .catch((err)=>{
      setError(err.message)
    })
};
   

    return {
      signInWithGoogle,
      user,
      setUser,
      error,
      auth,
      setError,
      loading,
      logOut,
      signUpWithEmail,
      signInWithEmail,
      check
    };
  };
  
  export default useFirebase;

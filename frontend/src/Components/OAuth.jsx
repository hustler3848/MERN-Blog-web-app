/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Button } from 'flowbite-react'
import { Link, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from 'react-icons/ai'
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { app } from '../firebase';
import {
  signInSuccess,
} from "../redux/user/userSlice";
import { useDispatch} from "react-redux";


function OAuth() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const auth = getAuth(app)
    const handleGoogleClick = async ()=>{
      const provider = new GoogleAuthProvider()
      provider.setCustomParameters({prompt: 'select_account'})
      try {
        const resultsFromGoogle = await signInWithPopup(auth, provider)
        const res = await fetch('http://localhost:3000/api/auth/google', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            googleUserName: resultsFromGoogle.user.displayName,
            imageUrl: resultsFromGoogle.user.photoURL,
            email: resultsFromGoogle.user.email,
            uid: resultsFromGoogle.user.uid
          })
        })

        const data = await res.json()
        if(res.ok){
          dispatch(signInSuccess(data))
          console.log(data);
         navigate('/')
        }
        console.log(resultsFromGoogle);
      } catch (error) {
        console.log(error);
      }
    }

  // const auth = getAuth(app)
  // const handleGoogleClick = async ()=> {
  //   const provider = new GoogleAuthProvider()
  //   provider.setCustomParameters({prompt: 'select_account'})
  //   try {
  //     const resultsFromGoogle = await signInWithPopup(auth, provider)
  //     const res = await fetch('http://localhost:3000/api/auth/google', {
  //       method: 'POST',
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify({
  //         googleUserName: resultsFromGoogle.user.displayName,
  //         imageUrl: resultsFromGoogle.user.photoURL,
  //         email: resultsFromGoogle.user.email
  //       })
  //     })
  //     const data= await res.json()
  //     if(res.ok){
  //       console.log(data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <Button onClick={handleGoogleClick} type='button'className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-slate-900 h-10 py-2 w-full' gradientDuoTone='pinkToOrange' outline> <AiFillGoogleCircle className='w-6 h-5 mr-2' /> Continue with Google</Button>
  )
}
 
export default OAuth
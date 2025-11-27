import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate.jsx'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase.jsx'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.jsx';

const Login = () => {
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null)

    const dispatch = useDispatch();
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMesage, setErrorMessage] = useState(null);

    const handleButtonClick = () => {
        //validate the form data

        // console.log(email.current.value);
        // console.log(password.current.value);
        // console.log(message);
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

        if (message) return;

        if (!isSignInForm) {
            //sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/128236746?v=4"
                    }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));


                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                        setErrorMessage(error.message);
                    });
                    // console.log(user);

                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                    // ..
                });
        } else {
            //sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);

                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
                    alt="hero-image"

                />
            </div>

            <form onSubmit={(e) => { e.preventDefault() }} className='w-3/12 absolute p-12  text-white my-36 mx-auto left-0 right-0 rounded-lg bg-black/80'>
                <h1 className=' font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
                )}
                <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                <input ref={password} type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <p className=' text-red-500 font-bold text-lg py-2 '>{errorMesage}</p>

                <button className='p-4 my-2 w-full bg-red-700 rounded-lg ' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer ' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign up Now" : "Already Registerd? Sign in now."}
                </p>
            </form>



        </div>

    )
}

export default Login

//     < img
// src = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
// alt = "netflix-logo"
// className = "w-44 absolute z-10 top-2 left-32 cursor-pointer"
//     />
//     <div>
//         <img
//             src="https://assets.nflxext.com/ffe/siteui/vlv3/6fd9d446-cd78-453a-8c9c-417ed3e00422/web/IN-en-20251117-TRIFECTA-perspective_2fe4e381-977f-49fd-a7f4-1da0bcf09429_large.jpg"
//             alt="hero-image"
//             className="w-full h-screen object-cover brightness-30"
//         />
//     </div>
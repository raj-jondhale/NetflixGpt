import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
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
                // className=' min-h-screen'
                />
            </div>

            <form className='w-3/12 absolute p-12  text-white my-36 mx-auto left-0 right-0 rounded-lg bg-black/80'>
                <h1 className=' font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && (<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />
                )}
                <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <button className='p-4 my-2 w-full bg-red-700 rounded-lg '>{isSignInForm ? "Sign In" : "Sign Up"}</button>
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
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase.jsx';
import { addUser, removeUser } from '../utils/userSlice.jsx';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const handleSignout = () => {
        signOut(auth).then(() => {
            // dispatch(removeUser());

        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate("/browse");
                // ...
            } else {
                // User is signed out
                // ...
                dispatch(removeUser());
                navigate("/");

            }
        });
        return () => unsubscribe();
    }, [])
    return (
        <div className='absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between'>
            <img
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="netflix-logo"
                className="w-44"
            />
            {user && (
                <div className='flex p-2'>

                    <img
                        className='w-12 h-12'
                        src={user?.photoURL}
                        alt="User Avatar"
                    />
                    <button
                        onClick={handleSignout}
                        className='text-white font-bold m-2'
                    >
                        (sign out)
                    </button>
                </div>
            )}
        </div>

    )
}

export default Header
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase.jsx';
import { addUser, removeUser } from '../utils/userSlice.jsx';
import { LOGO } from '../utils/constants.jsx';

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
                src={LOGO}
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
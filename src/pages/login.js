import React, { useEffect, useState } from 'react'
import firebase from "firebase/app";
import { auth } from "../firebaseConfig"
import { navigate } from "@reach/router"
const AuthForm = () => {
    const [profileData, setProfileData] = useState( {} );
    const [user, setUser] = useState( null )
    const [isLoading, setIsLoading] = useState( false )

    useEffect( () => {
        setIsLoading( true )
        // Checks whether the user is logged in / out on load
        auth.onAuthStateChanged( ( user ) => {
            if ( user ) {
                // User already logged in
                console.log( "user", user )
                setUser( user )
                navigate( `/dashboard` )
                setIsLoading( false )
            } else {
                setUser( null )
                setIsLoading( false )
                // No user is signed in.
            }
        } );
    }, [user] )

    const GoogleAuth = () => {
        return AuthLogin( new firebase.auth.GoogleAuthProvider() );
    }

    // Google Login
    const AuthLogin = ( provider ) => {
        return auth.signInWithPopup( provider ).then( result => {
            setProfileData( result.additionalUserInfo )
            // save user data to db if needed
        } );
    }



    return (
        <>
            {
                ( isLoading && !user ) ? "Loading..." :

                    ( !isLoading && user ) ?
                        <>
                            <h1>Logged in</h1>

                        </> : <button onClick={GoogleAuth}>Login</button>

            }

        </>

    );
};
export default AuthForm;


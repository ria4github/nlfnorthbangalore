import React from 'react'
import { auth } from "../firebaseConfig"
import { navigate } from "@reach/router"
export default function dashboard () {

    const signOut = () => {
        auth
            .signOut()
            .then( () => {
                console.log( "logged out" )
                navigate( `/login` )
            } )
            .catch( e => {
                console.log( "signOut -> e", e )
            } );
        return null;
    }
    return (
        <div>
            Dash Board
            <button onClick={signOut}>Sign out</button>
        </div>
    )
}

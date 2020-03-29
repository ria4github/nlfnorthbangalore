import React, { useEffect, useState } from 'react'
import firebase from "firebase";
import { auth } from "../firebaseConfig"

// /* eslint-disable react-hooks/rules-of-hooks */
// const firebaseConfig = {
//     apiKey: "AIzaSyBaBT_6t8clpPviECYUbJZasySwbf7Vo8o",
//     authDomain: "admission-athul.firebaseapp.com",
//     databaseURL: "https://admission-athul.firebaseio.com",
//     projectId: "admission-athul",
//     storageBucket: "admission-athul.appspot.com",
//     messagingSenderId: "618968630168",
//     appId: "1:618968630168:web:088795b616c9a8d8cd21ed"
// };

// let fire = firebase.initializeApp( firebaseConfig );

// let auth = fire.auth();

const AuthForm = props => {
    const [otp, otpSent] = useState( false );
    const [user, setUser] = useState( false );
    const [isDisabled, setDisabled] = useState( false );
    const [errorMessage, setErrorMessage] = useState();
    const [otpLoading, setOtpLoading] = useState();
    const [loading, setLoading] = useState( false );
    const [recaptcha, setRecaptcha] = useState( null );

    const [code, setCode] = useState( [] );
    const [phone_number, setUserNumber] = useState( [] );
    const [email, setUserEmail] = useState( [] );
    const [username, setUsername] = useState( [] );
    const [authMessage, setAuthMessage] = useState();

    useEffect( () => {
        if ( !recaptcha ) {
            let recap = new firebase.auth.RecaptchaVerifier( "recaptcha-container", {
                size: "invisible"
            } );
            setRecaptcha( recap );
        }
    }, [recaptcha] );

    useEffect( () => {
        auth.onAuthStateChanged( function ( user ) {
            if ( user ) {
                console.log( "user", user )
                // User is signed in.
                setUser( user )
            } else {
                setUser( null )
                // No user is signed in.
            }
        } );
    }, [user] )


    const signOut = () => {
        auth
            .signOut()
            .then( () => {
                console.log( "logged out" )

            } )
            .catch( e => {
                console.log( "signOut -> e", e )
            } );
        return null;
    }

    //Reset Function
    const reset = () => {
        otpSent( false );
        setUser( false );
        setDisabled( false );
    };

    //SignIn USer Function
    const signInUser = e => {
        setLoading( true );
        e.preventDefault();
        if ( !code.length ) {
            setErrorMessage( "Please enter Otp" );
        } else setErrorMessage();
        window.confirmationResult
            .confirm( code )
            .then( function ( result ) {
                console.log( "result", result )
                // signInContext( result.user.uid );
                if ( props.close ) {
                    props.close();
                }
            } )
            .catch( err => {
                if ( err.code === "auth/invalid-verification-code" ) {
                    setAuthMessage( "Invalid OTP, Please re-enter" );
                    setLoading( false );
                } else {
                    setAuthMessage( err.code );
                }
            } );
    };

    //SignUp USer Function
    const signUpUser = e => {
        setLoading( true );
        e.preventDefault();
        if ( !code.length ) {
            setErrorMessage( "Please enter Otp" );
        } else setErrorMessage();
        window.confirmationResult
            .confirm( code )
            .then( result => {
                console.log( "result", result )
                const user_data = {
                    user_name: username,
                    phone_number: phone_number,
                    email: email,
                    stored_cars: [],
                    address: {}
                };
                // signUpContext( user_data, result.user.uid );
                setLoading( false );
                if ( props.close ) {
                    props.close();
                }
            } )
            .catch( err => {
                if ( err.code === "auth/invalid-verification-code" ) {
                    setAuthMessage( "Invalid OTP, Please re-enter" );
                    setLoading( false );
                } else {
                    setAuthMessage( err.code );
                }
            } );
    };

    //SendOTP Function
    const sendOtp = () => {
        setDisabled( true );

        auth
            .signInWithPhoneNumber( phone_number, recaptcha )
            .then( function ( confirmationResult ) {
                console.log( "sendOtp -> confirmationResult", confirmationResult )
                otpSent( true );
                setOtpLoading( false );
                window.confirmationResult = confirmationResult;
            } )
            .catch( err => {
                setAuthMessage( err.code );
                reset();
                setOtpLoading( false );
            } );
    };

    //Check if User is already present
    const checkUser = e => {
        e.preventDefault();
        setOtpLoading( true );
        setDisabled( true );
        if ( phone_number.length !== 13 || isDisabled ) {
            setErrorMessage( "Invalid Phone number" );
            setOtpLoading( false );
        } else {
            setErrorMessage();
        }
        try {

            sendOtp();
        } catch ( error ) {
            console.log( "error", error )

        }

    };

    return (
        <>
            {
                user ? <>
                    Logged in
                    <button onClick={signOut}>Sign out</button>
                </> :
                    <div className="modal_body">
                        <div id="recaptcha-container" />
                        {!otp && (
                            <form onSubmit={checkUser}>
                                {errorMessage && errorMessage}
                                {authMessage && errorMessage}
                                <div className="form-row ent_num">
                                    <label>Phone number</label>
                                    <span>
                                        <pre>+91</pre>
                                        <input
                                            placeholder="xxxxxxxxxx"
                                            type="number"
                                            autoFocus
                                            maxLength="10"
                                            defaultValue={phone_number.toString().substring( 3 )}
                                            onChange={e => {
                                                setUserNumber( "+91" + e.target.value );
                                            }}
                                            onFocus={() => {
                                                setAuthMessage();
                                            }}
                                        />
                                    </span>
                                </div>
                                <div className="submit">
                                    {!isDisabled && phone_number.length === 13 ? (
                                        <button type="submit" id="send-otp-button">
                                            Submit
                                        </button>
                                    ) : null}
                                    {otpLoading ? "loading" : null}
                                </div>
                            </form>
                        )}

                        {user && otp && (
                            <form className="login" onSubmit={signInUser}>
                                {errorMessage && errorMessage}
                                {authMessage && authMessage}

                                <div className="form-row">
                                    <label>Phone number</label>
                                    <input value={phone_number} type="text" disabled />
                                    <span
                                        className="edit_ico"
                                        onClick={() => {
                                            reset();
                                        }}
                                    >
                                        edit
                            </span>
                                </div>
                                <div className="form-row">
                                    <label>OTP</label>
                                    <input
                                        type="number"
                                        placeholder="- - - - - -"
                                        className="otp"
                                        onKeyUp={e => {
                                            if ( 6 < e.target.value.length ) {
                                                setErrorMessage( "Invalid OTP, should be 6 digits" );
                                            } else {
                                                setErrorMessage();
                                            }
                                        }}
                                        onChange={e => {
                                            setCode( e.target.value );
                                        }}
                                    />
                                </div>
                                <div className="form-row">
                                    <p className="solid right-align" onClick={sendOtp}>
                                        Resend OTP
                </p>
                                </div>

                                <div className="submit">
                                    {!loading ? <button type="submit">Verify </button> : "Loading"}
                                </div>
                            </form>
                        )}

                        {!user && otp && (
                            <form onSubmit={signUpUser}>
                                {authMessage && authMessage}
                                {authMessage && authMessage}
                                <div className="form-row">
                                    <label>Phone number</label>
                                    <input value={phone_number} type="text" disabled />
                                    <span
                                        className="edit_ico"
                                        onClick={() => {
                                            reset();
                                        }}
                                    >
                                        edit
                            </span>
                                </div>
                                <div className="form-row">
                                    <label>OTP</label>
                                    <input
                                        type="number"
                                        placeholder="- - - - - -"
                                        className="otp"
                                        onKeyUp={e => {
                                            if ( 6 < e.target.value.length ) {
                                                setErrorMessage( "Invalid OTP, should be 6 digits" );
                                            } else {
                                                setErrorMessage();
                                            }
                                        }}
                                        onChange={e => {
                                            setCode( e.target.value );
                                        }}
                                        autoFocus
                                    />
                                </div>
                                <div className="form-row">
                                    <p className="solid right-align" onClick={sendOtp}>
                                        Resend OTP
                </p>
                                </div>
                                <div className="form-row">
                                    <label>Full name</label>
                                    <input
                                        placeholder="Enter your name"
                                        type="text"
                                        onChange={e => {
                                            setUsername( e.target.value );
                                        }}
                                    />
                                </div>
                                <div className="form-row">
                                    <label>Email</label>
                                    <input
                                        placeholder="Enter email address"
                                        type="email"
                                        onChange={e => {
                                            setUserEmail( e.target.value );
                                        }}
                                    />
                                </div>

                                <div className="submit">
                                    {loading ? "Loading" : <button type="submit">Verify</button>}
                                </div>
                            </form>
                        )}
                    </div>
            }
        </>

    );
};
export default AuthForm;


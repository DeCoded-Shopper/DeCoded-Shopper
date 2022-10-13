import React from "react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUsers } from "./init-firebase";

import Login from './Login';

const USER_REGEX = /^[A-z]+ [A-z]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^[0-9]{10}$/;

const LOCATION_REGEX = /^\d{10}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => 
{
    const navigate = useNavigate();
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [email,setEmail]=useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [phone, setPhone] = useState('');
    const [validPhone, setValidPhone] = useState(false);
    const [phoneFocus, setPhoneFocus] = useState(false);

    const [location, setLocation] = useState('');
    const [validLocation, setValidlocation] = useState(false);
    const [locationFocus, setLocationFocus] = useState(false);


    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    //These are functions for the user to validate their input
    useEffect(() => 
    {
        userRef.current.focus();
    }, [])
    
    //This is a function for the user to validate their full name input
    useEffect(() => 
    {
        setValidName(USER_REGEX.test(user));
    }, [user])

    //This is a function for the user to validate their password input
    useEffect(() => 
    {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])
    
    //This is a function for the user to validate their email input
    useEffect(()=>
    {
        setValidEmail(EMAIL_REGEX.test(email));
    },[email])

    //This is a function for the user to validate their phone number input
    useEffect(()=>
    {
        setValidPhone(PHONE_REGEX.test(phone));
    },[phone])

    //This is a function for the user to validate their location input
    useEffect(()=>
    {
        setValidlocation(LOCATION_REGEX.test(location));
    },[location])

    //This is a function for the user to validate their input
    useEffect(() => 
    {
        setErrMsg('');
    }, [user, pwd, matchPwd,phone,email,location])

    const handleSubmit = async (e) => 
    {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        
        const v3 = EMAIL_REGEX.test(email);
        const v4 = PHONE_REGEX.test(phone);
        
        const v5 = LOCATION_REGEX.test(location);
        
        if (!v1 || !v2 || !v3 || !v4 || !v5 ) {
            setErrMsg("Invalid Entry");
            return;
        }
        else
        {
            // create users on the database
            const response = createUsers(email,pwd,user,phone,location);
            
            // if registration is successful
            if(response === "done")
            { 
                navigate('/Login', {replace : true}); //change the pages 
            }
            // when registration is false
            else
            {
                alert("An error has occured");
            }
        }
    }

    return (
        <>
            {success ? (
                
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>

            ) : (
                //These are the conditions that a user should meet to register their account
                <section>
                    
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    
                    <h1>Register</h1>
                    
                    <form onSubmit={handleSubmit}>
                        
                        <label htmlFor="username">
                            FullName:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                        </label>
                        
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        
                        <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            4 to 24 characters.<br />
                            Enter both Name and Surname
                        </p>


                        <label htmlFor="email">
                            Email:
                            <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                        </label>
                        
                        <input
                            type="text"
                            id="email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                        
                        <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Enter a valid email.<br />
                        </p>
                        
                        <label htmlFor="phone">
                            Phone:
                            <FontAwesomeIcon icon={faCheck} className={validPhone ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPhone || !phone ? "hide" : "invalid"} />
                        </label>
                        
                        <input
                            type="text"
                            id="phone"
                            autoComplete="off"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            required
                            aria-invalid={validPhone ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setPhoneFocus(true)}
                            onBlur={() => setPhoneFocus(false)}
                        />
                        
                        <p id="uidnote" className={phoneFocus && phone && !validPhone ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Enter valid phone number.<br />
                            Phone number must be 10 digits.<br />
                        </p>


                        <label htmlFor="location">
                            Location:
                            <FontAwesomeIcon icon={faCheck} className={validLocation ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validLocation || !location ? "hide" : "invalid"} />
                        </label>
                        
                        <input
                            type="text"
                            id="location"
                            autoComplete="off"
                            onChange={(e) => setLocation(e.target.value)}
                            value={location}
                            required
                            aria-invalid={validLocation ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setLocationFocus(true)}
                            onBlur={() => setLocationFocus(false)}
                        />
                        
                        <p id="uidnote" className={locationFocus && location && !validLocation ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Enter a valid location.<br />
                        
                        </p>


                        <label htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        
                        <input
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <button type="submit" disabled={!validName || !validPwd ||!validEmail||!validLocation||!validPhone ||!validMatch ? true : false}>Sign Up</button>

                    </form>
                    
                    <p>
                        Already registered?<br />
                        <span className="line">
                            <a href="./login">Sign In</a>
                        </span>
                    </p>

                </section>
            )}
        </>
    )
}

export default Register
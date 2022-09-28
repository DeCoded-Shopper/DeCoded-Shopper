import React from "react";
import {AuthContext} from "../context/AuthProvider";
import { useRef, useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { logout } from '../components/init-firebase';

const ProfilePage = () => {
    const { currentUser } = useContext(AuthContext);

    return(
        <>
            <section>
                <p>MY PROFILE</p>
                <br></br>
                {currentUser && (
                    <>
                        <br></br>
                        <p>{currentUser.email}</p>
                    </>
                )}
            <button type="submit" onClick={logout}>Log out</button>
            </section>
        </>
    )
}
export default ProfilePage;

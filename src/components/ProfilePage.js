import React, { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../components/init-firebase";
import { ColectionDatabase } from "../components/init-firebase";
import { onValue, get } from "firebase/database";

const ProfilePage = () => {
  const [Values, setValues] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    get(ColectionDatabase).then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        //console.log([childSnapshot.val().title,childSnapshot.val().category]);
        setValues(childSnapshot.val());
      });
    });
  }, []);
  {
    Object.keys(Values).map((key) => {
      console.log({ key: Values[key] });
    });
  }

  return (
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

        <button type="submit" onClick={logout}>
          Log out
        </button>
      </section>
    </>
  );
};
export default ProfilePage;

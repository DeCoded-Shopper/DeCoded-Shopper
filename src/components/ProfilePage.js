import React, { useState } from "react";
import { AuthContext } from "../context/AuthProvider";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../components/init-firebase";
import { get, ref } from "firebase/database";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [Values, setValues] = useState([]);
  const { currentUser, logout } = useContext(AuthContext);

  if (!currentUser) {
    return <h1>please log in first</h1>;
  }
  //A condition to show the user's information on the profile page
  if (currentUser) {
    const ColectionDatabase = ref(database, "users/" + currentUser.uid);
    get(ColectionDatabase).then((snapshot) => {
      setValues(snapshot.val());
    });
  } else {
    return null;
  }

  return (
    //This allows for user to see their information and also be able to logout.
    <>
      <section>
        <p>MY PROFILE</p>
        <br></br>

        {currentUser && (
          <>
            <br></br>
            <p>{Values.email}</p>
            <p>{Values.fullname}</p>
            <p>{Values.phoneNumber}</p>
          </>
        )}

        <button
          data-testid="logout-button"
          type="submit"
          onClick={() => {
            logout().then(() => {
              navigate("/Products", { replace: true });
            });
          }}
        >
          Log out
        </button>
      </section>
    </>
  );
};

export default ProfilePage;

import React, { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { database } from "../components/init-firebase";
import { get, ref } from "firebase/database";

const ProfilePage = () => {
  const { currentUser, logout } = useContext(AuthContext);
  if (!currentUser) {
    return <h1>please log in first</h1>;
  }

  const [Values, setValues] = useState([]);
  if (currentUser) {
    const ColectionDatabase = ref(database, "users/" + currentUser.uid);
    useEffect(() => {
      get(ColectionDatabase).then((snapshot) => {
        console.log(snapshot.val());
        setValues(snapshot.val());
      });
    }, []);
  }
  const navigate = useNavigate();

  return (
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
          type="submit"
          onClick={() => {
            navigate("/Products", { replace: true });
            {
              logout();
            }
          }}
        >
          Log out
        </button>
      </section>
    </>
  );
};
export default ProfilePage;

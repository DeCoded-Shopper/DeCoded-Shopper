import React, { useState, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ColectionDatabase, database } from "../components/init-firebase";
import { onValue, get, ref } from "firebase/database";

const ProfilePage = () => 
{
  
  const navigate = useNavigate();
  const [Values, setValues] = useState([]);
  const { currentUser, logout } = useContext(AuthContext);
  
  if (!currentUser) 
  
  {
    return <h1>please log in first</h1>;
  }

  //A condition to show the user's information on the profile page
  if (currentUser) 
  {
    const ColectionDatabase = ref(database, "users/" + currentUser.uid);

      get(ColectionDatabase).then((snapshot) => {
        console.log(snapshot.val());
        setValues(snapshot.val());
        // snapshot.forEach((childSnapshot) => {
        //   //console.log([childSnapshot.val().title,childSnapshot.val().category]);
        //   setValues(childSnapshot.val());
        // });
      });
    } 

    else
    {
      return null;
    }

  // useEffect(() => {
  // if (currentUser) 
  // {
  //   const ColectionDatabase = ref(database, "users/" + currentUser.uid);

  //     get(ColectionDatabase).then((snapshot) => {
  //       console.log(snapshot.val());
  //       setValues(snapshot.val());
  //       // snapshot.forEach((childSnapshot) => {
  //       //   //console.log([childSnapshot.val().title,childSnapshot.val().category]);
  //       //   setValues(childSnapshot.val());
  //       // });
  //     });
  //   }
  // }, []);
  
  

  // {
  //   Object.keys(Values).map((key) => {
  //     console.log({ key: Values[key] });
  //   });
  // }

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

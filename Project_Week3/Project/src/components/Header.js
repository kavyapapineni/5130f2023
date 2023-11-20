import { onAuthStateChanged, signOut } from "@firebase/auth";
import React, { useEffect } from "react";

import { auth } from "../utils/firebase";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component unmounts.
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute z-10 px-8 py-2 bg-gradient-to-b from-black w-screen flex justify-between">
      <h2 className="text-[#ff4c46] bg-red text-3xl w-69 px-8 py-2 bg-gradient-to-b from-black">
        THE AI FILM FACTORY
      </h2>

      {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" src={user.photoURL} alt="signout-logo" />
          <button className="font-bold text-white" onClick={handleSignOut}>
            {" "}
            (Signout){" "}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

import React from "react";
import NetflixTitle from "../assets/icons/NetflixTitle";
import { FrontNavbar, SignupButton } from "../styles";
import { useHistory, useLocation } from "react-router";

function FrontNav() {
  let history = useHistory();
  let { pathname } = useLocation();
  return (
    <FrontNavbar>
      <NetflixTitle />
      {pathname === "/signin" ? (
        <SignupButton onClick={() => history.push("/signup")}>
          Sign Up
        </SignupButton>
      ) : (
        <SignupButton onClick={() => history.push("/signin")}>
          Sign In
        </SignupButton>
      )}
    </FrontNavbar>
  );
}

export default FrontNav;

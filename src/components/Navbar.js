import React, { useEffect, useState, useContext } from "react";
import firebase from "firebase";
import NetflixTitle from "../assets/icons/NetflixTitle";
import { useHistory } from "react-router";
import { Navbar, NavbarList, UserIcon, UserModel } from "../styles";
import { AuthContext } from "../services/context/Auth";

function Nav() {
  const [show, handleShow] = useState(false);
  const [visible, setVisible] = useState(false);
  const { setCurrentUser } = useContext(AuthContext);
  let history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <Navbar show={show}>
      <NetflixTitle />
      <NavbarList>
        <UserIcon
          onClick={() => {
            setVisible(!show);
          }}
        />
        {visible ? (
          <UserModel>
            <ul>
              <li
                onClick={() => {
                  firebase
                    .auth()
                    .signOut()
                    .then((response) => {
                      setCurrentUser();
                      history.push("/");
                    });
                }}>
                Logout
              </li>
            </ul>
          </UserModel>
        ) : (
          ""
        )}
      </NavbarList>
    </Navbar>
  );
}

export default Nav;

import React, { useState, useContext, useRef, useEffect } from "react";
import { useHistory } from "react-router";
import FrontNav from "../components/FrontNav";
import { HomeContainer, LoginContainer, InputSubmit } from "../styles";
import { AuthContext } from "../services/context/Auth";
import BrowseFooter from "../components/BrowseFooter";
import firebase from "firebase";

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validatePass, setValidatePass] = useState();
  // const [verified, setVerified] = useState(false);
  const [errorMes, setErrorMes] = useState("");
  const { setCurrentUser } = useContext(AuthContext);
  let history = useHistory();

  let userEmail = useRef();
  let userPassword = useRef();
  let validatePassword = useRef();

  // For signin purpose
  const loginIn = () => {
    if (email && password && validatePass) {
      if (validatePass === password) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((response) => {
            setCurrentUser(response);
            history.push("/main");
          })
          .catch((err) => {
            setErrorMes(err.message);
          });
      } else {
        setErrorMes("Passwords don't match");
      }
    }
  };
  useEffect(() => {
    setErrorMes("");
    console.log(userPassword.current.value, validatePassword.current.value);
    if (password === validatePass) {
      // setVerified(true);
    }
    // return setVerified(false);
  }, [password, validatePass]);

  return (
    <>
      <FrontNav />
      <HomeContainer
        backgroundImage={`${process.env.REACT_APP_NETFLIX_BACKGROUND_IMAGES}`}>
        <LoginContainer>
          <span
            style={{
              paddingTop: "20px",
              textAlign: "left",
              fontSize: "25px",
            }}>
            Sign Up
          </span>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
              marginTop: "20px",
            }}>
            <label
              htmlFor="email"
              style={{
                marginBottom: "10px",
                position: "absolute",
                top: "2px",
                left: "20px",
                color: "black",
                fontSize: "12px",
              }}>
              Email or Phone Number
            </label>
            <input
              ref={userEmail}
              type="email"
              className="inputText"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              position: "relative",
            }}>
            <label
              htmlFor="password"
              style={{
                marginBottom: "10px",
                position: "absolute",
                top: "22px",
                left: "40px",
                color: "black",
                fontSize: "12px",
              }}>
              Password
            </label>
            <input
              ref={userPassword}
              type="password"
              className="inputPassword"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              position: "relative",
            }}>
            <label
              htmlFor="password"
              style={{
                marginBottom: "10px",
                position: "absolute",
                top: "22px",
                left: "40px",
                color: "black",
                fontSize: "12px",
              }}>
              Verify Password
            </label>
            <input
              ref={validatePassword}
              type="password"
              className="inputPassword"
              onChange={(e) => setValidatePass(e.target.value)}
            />
          </div>
          <div>
            <p style={{ color: "red", fontSize: "12px" }}>
              {errorMes ? errorMes : ""}
            </p>
          </div>

          <InputSubmit onClick={loginIn}>Sign In</InputSubmit>
        </LoginContainer>
      </HomeContainer>
      <BrowseFooter />
    </>
  );
}

export default SignIn;

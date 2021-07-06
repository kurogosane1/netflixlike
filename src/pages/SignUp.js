import { useState, useContext } from "react";
import { useHistory } from "react-router";
import FrontNav from "../components/FrontNav";
import { HomeContainer, LoginContainer, InputSubmit } from "../styles";
import BrowseFooter from "../components/BrowseFooter";
import { AuthContext } from "../services/context/Auth";
import firebase from "firebase";
import dotenv from "dotenv";

dotenv.config();

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { setCurrentUser } = useContext(AuthContext);
  let history = useHistory();

  // For signin purpose
  const loginIn = () => {
    if (email && password) {
      console.log("email: " + email + " password: " + password);
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {
          setCurrentUser(response);
          history.push("/main");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  return (
    <>
      <FrontNav />
      <HomeContainer
        backgroundImage={`${process.env.REACT_APP_NETFLIX_BACKGROUND_IMAGES}`}>
        <LoginContainer>
          <span
            style={{ paddingTop: "20px", textAlign: "left", fontSize: "25px" }}>
            Sign In
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
              type="password"
              className="inputPassword"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <InputSubmit onClick={loginIn}>Sign In</InputSubmit>
          <div>
            <p
              style={{
                textAlign: "left",
                fontSize: "12px",
                marginTop: "12px",
              }}>
              For Demo purpose please input
            </p>
            <p
              style={{
                textAlign: "left",
                fontSize: "12px",
                marginTop: "12px",
              }}>
              "guest@email.com" as username
            </p>
            <p
              style={{
                textAlign: "left",
                fontSize: "12px",
                marginTop: "12px",
              }}>
              "guestpassword" as password
            </p>
          </div>
        </LoginContainer>
      </HomeContainer>
      <BrowseFooter />
    </>
  );
}

export default SignUp;

import styled from "styled-components";

// import NetFlixFront from "../assets/NetFlixFront.jpeg";

export const Button = styled.button`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 5px;
  background: linear-gradient(
    350deg,
    rgba(133, 151, 252, 1) 0%,
    rgba(0, 37, 255, 1) 45%
  );
  color: #ffffff;
  font-size: 1rem;
  font-family: "Bebas Neue", cursive;
  font-weight: 100;
`;

export const UserIcon = styled.div`
  cursor: pointer;
  background: linear-gradient(
    350deg,
    rgba(133, 151, 252, 1) 0%,
    rgba(0, 37, 255, 1) 45%
  );
  width: 40px;
  height: 40px;
  border-radius: 5px;
  position: relative;
`;

export const UserModel = styled.div`
  position: absolute;
  top: 70px;
  cursor: pointer;
  border: 1px solid #ffff;
  background-color: #080707;
  backdrop-filter: blur(20px);
  padding: 10px;
  border-radius: 10px;
  margin: 10px;
  transition: 0.5s ease;
  & > ul {
    list-style: none;
    font-family: "Open Sans", sans-serif;
  }
  &:before {
    content: "";
    /* padding: 10px; */
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    background-color: #080707;
    backdrop-filter: blur(20px);
    /* border: 1px solid #ffff; */
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`;

export const Rows = styled.div`
  display: flex;
  /* align-items: center; */
  /* justify-content: flex-start; */
  padding: 20px;
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Columns = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: space-evenly;
  background-color: red;
  overflow-x: hidden;
  overflow-y: none;
  margin-left: 20px;
`;

export const Navbar = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  background-color: ${(props) => (props.show ? "#080707" : "transparent")};
  transition-timing-function: ease-in;
  transition: all 0.5s;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  box-sizing: border-box;
  padding: 20px;
  /* margin-left: 20px;
  margin-right: 20px; */
  z-index: 1000;
`;

export const NavbarList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

// Front Page Navbar
export const FrontNavbar = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  display: flex;
  background-color: transparent;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  box-sizing: border-box;
  padding: 20px;
  z-index: 1000;
`;

export const MoviePoster = styled.div`
  height: 300px;
  width: 200px;
`;

export const MovieImage = styled.img.attrs(({ src }) => ({
  src: src,
}))`
  width: 100%;
  margin-right: 15px;
  object-fit: contain;
  max-height: ${(props) => (props.isLarge ? "27vw" : "25vw")};
  transition: transform 450ms;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
    z-index: 10;
  }
  @media (max-width: 768px) {
    max-height: ${(props) => (props.isLarge ? "30.5vw" : "20.5vw")};
  }
  @media (min-width: 1298px) {
    max-height: ${(props) => (props.isLarge ? "15vw" : "15vw")};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h1`
  padding-left: 20px;
  margin-top: 20px;
  font-size: 1.4vw;
  margin-top: 10px;
  font-family: "Open Sans", sans-serif;
`;

export const Header = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: center;
  background-color: transparent;
  display: flex;
  width: 100%;
  align-items: center;
  background-size: cover;
  margin-top: -70px;
  height: 50vh;
  padding: 20px;

  @media (max-width: 768px) {
    height: 30vh;
  }
  @media (min-width: 1298px) {
    height: 60vh;
    background-position: center;

    object-fit: contain;
  }
`;
export const BannerContainer = styled.div`
  height: 40%;
  color: white;
  font-family: "Open Sans", sans-serif;

  & > h1 {
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 4.5vw;
    background: transparent;
  }
  & > span {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 450px;
    background: transparent;
  }

  @media (min-width: 1298px) {
    & > h1 {
      font-size: 2.5vw;
    }
  }
`;
export const BannerOverview = styled.h3`
  width: 45rem;
  color: white;
  background-color: transparent;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 1.3vw;
  max-width: 360px;
  height: 80px;
  font-family: "Open Sans", sans-serif;

  @media (min-width: 1298px) {
    font-size: 1vw;
    max-width: 20.5vw;
  }
`;

export const BannerButton = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  background: #090909b2;
  padding: 0.5rem 0 0.5rem 0;
  color: white;
  border-radius: 10px;
  border: none;
  margin-right: 2rem;
  outline: none;
  font-family: "Open Sans", sans-serif;
  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

export const BrowserFoot = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-evenly;
  background-color: black;
  color: #808080;
  font-family: "Open Sans", sans-serif;
  line-height: 2;
  font-size: 1.1vw;

  @media (min-width: 960px) {
    font-size: 0.58vw;
    padding-left:500px;
    padding-right:500px;
  }
`;

export const FooterPara = styled.p`
  font-size: 1.1vw;
  @media (min-width: 768px) {
    font-size: 0.58vw;
  }
`;

export const FootRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const FootCol = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: space-evenly;
`;

// Front Page for Login Purpose
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(${(props) => props.backgroundImage});
  background-color: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  font-family: "Open Sans", sans-serif;
  background-size: cover;
  object-fit: contain;
  height: 100vh;
`;

export const Letters = styled.h1`
  font-size: 4vw;
  text-align: left;
  margin-bottom: 20px;

  @media (min-width: 750px) {
    font-size: 2vw;
  }
`;

export const LetterHeading = styled.h3`
  font-size: 2.5vw;
  text-align: left;

  @media (min-width: 760px) {
    font-size: 1.7vw;
  }
`;

// Front Page for front page
export const FrontContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-image: url(${(props) => props.backgroundImage});
  background-color: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  font-family: "Open Sans", sans-serif;
  background-size: cover;
  object-fit: contain;
  height: 55vh;
  border-bottom: solid 10px #2d2d2d;
`;
export const FrontIntContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55vh;
  background: cover;
  background-color: #00000076;
  font-family: "Open Sans", sans-serif;
`;

export const FrontSubCont = styled.div`
  flex-wrap: wrap;
  max-width: 950px;
  display: flex;
  flex-direction: column;
`;

// Front Page internal body container
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  border-bottom: solid 10px #2d2d2d;
  @media (max-width: 560px) {
    flex-wrap: wrap-reverse;
  }
`;
export const SubSubCont = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 560px;
  font-family: "Open Sans", sans-serif;
`;
export const SubSubContainer = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 960px;
  font-family: "Open Sans", sans-serif;
`;

export const SignUpButton = styled.button`
  height: 50px;
  width: 200px;
  font-size: 1.5vw;
  background-color: red;
  color: white;
  outline: none;
  border: none;

  @media (min-width: 960px) {
    height: 50px;
    font-size: 0.8vw;
    padding: 10px;
  }
`;

export const TextHeadingFront = styled.h1`
  font-size: 4vw;
  @media (min-width: 960px) {
    font-size: 2vw;
  }
`;

export const TextSpanFront = styled.span`
  font-size: 2vw;
  margin-bottom: 20px;
  @media (min-width: 960px) {
    font-size: 1vw;
  }
`;

export const TextSideSpanFront = styled.span`
  font-size: 1.2vw;
  margin-bottom: 20px;
  @media (min-width: 960px) {
    font-size: 0.58vw;
  }
`;

export const AddInputFront = styled.input.attrs((props) => ({
  type: "text",
  name: "Email Address",
  placeholder: "Email Address",
}))`
  max-width: 960px;
  width: 100%;
  height: 50px;
  padding-left: 20px;
  font-size: 1.4vw;
  @media (min-width: 960px) {
    font-size: 0.9vw;
  }
`;

export const FrontPara = styled.p`
  font-size: 2.5vw;
  text-align: left;
  @media (min-width: 960px) {
    font-size: 1.2vw;
  }
`;

// Front Page for Login Container
export const LoginContainer = styled.div`
  background-color: #080707ce;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px;
  object-fit: contain;
  line-height: 2;
  /* justify-content: space-evenly; */
  height: 458px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  position: relative;
`;

export const InputTextContainer = styled.input.attrs({
  type: `${(props) => props.type}`,
})`
  background: white;
  height: 60px;
  padding-left: 20px;
  padding-top: 10px;
  border-radius: 5px;
  border: none;
  text-align: left;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  width: 320px;
  :focus {
    outline: none;
    padding-left: 20px;
    padding-top: 10px;
    margin: none;
  }
  :active {
    outline: none;
    padding-left: 20px;
    padding-top: 10px;
  }
`;

export const InputPasswordContainer = styled.input.attrs({
  type: "password",
})`
  background: white;
  height: 60px;
  padding-left: 20px;
  padding-top: 10px;
  border-radius: 5px;
  border: none;
  text-align: left;
  font-size: 18px;
  font-family: "Open Sans", sans-serif;
  width: 320px;
  :focus {
    outline: none;
    padding-left: 20px;
    padding-top: 10px;
    margin: none;
  }
  :active {
    outline: none;
    padding-left: 20px;
    padding-top: 10px;
  }
`;

export const InputLabel = styled.label.attrs({
  value: `${(props) => props.labelled}`,
})`
  margin-bottom: "10px";
  position: "absolute";
  top: "22px";
  left: "42px";
  color: "black";
  font-size: "12px";
`;

export const InputSubmit = styled.button.attrs({ type: "submit" })`
  cursor: pointer;
  border-radius: 6px;
  width: 320px;
  padding: 20px;
  margin-top: 10px;
  outline: none;
  border: none;
  background-color: red;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  transition: ease 0.2s;
  &:active {
    background-color: #930000;
  }
  &:disabled {
    background-color: #93000064;
    cursor: none;
  }
`;

export const GoBack = styled.button.attrs({ type: "button" })`
  cursor: pointer;
  border-radius: 6px;
  width: 320px;
  padding: 20px;
  margin-top: 10px;
  outline: none;
  border: none;
  background-color: red;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  transition: ease 0.2s;
  &:active {
    background-color: #930000;
  }
`;

export const SignupButton = styled.button.attrs({ type: "button" })`
  cursor: pointer;
  border-radius: 6px;
  width: 100px;
  padding: 8px;

  outline: none;
  border: none;
  background-color: red;
  color: white;
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  transition: ease 0.2s;
  &:active {
    background-color: #930000;
  }
`;

// Loading pages

// Main loading component
export const LoadContainer = styled.div`
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;
  justify-content: center;
  align-items: center;
  transition: 1s ease-out;
`;

// Main Container Loading component in Loading Container
export const LoadSubContainer = styled.div`
  height: 40%;
  width: 30%;
  padding: 200px;
`;

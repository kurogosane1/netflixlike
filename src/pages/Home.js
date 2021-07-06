import React from "react";
import FrontNav from "../components/FrontNav";
import { useHistory } from "react-router";
import {
  FrontContainer,
  FrontIntContainer,
  FrontSubCont,
  SubContainer,
  SubSubCont,
  Letters,
  SignUpButton,
  TextHeadingFront,
  TextSpanFront,
  TextSideSpanFront,
  AddInputFront,
  FrontPara,
} from "../styles";
import BrowseFooter from "../components/BrowseFooter";

function Home() {
  let history = useHistory();
  return (
    <>
      <FrontNav />
      <FrontContainer
        backgroundImage={`${process.env.REACT_APP_NETFLIX_BACKGROUND_IMAGES}`}>
        <FrontIntContainer>
          <FrontSubCont>
            <TextHeadingFront>Unlimited movies, TV</TextHeadingFront>
            <TextHeadingFront>shows, and more.</TextHeadingFront>
            <TextSpanFront>Watch anywhere. Cancel anytime.</TextSpanFront>
            <TextSideSpanFront>
              Ready to watch? Enter your email to create or restart your
              membership.
            </TextSideSpanFront>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "960px",
              }}>
              <AddInputFront />
              <SignUpButton
                onClick={() => {
                  history.push("/signin");
                }}>
                Get Started
              </SignUpButton>
            </div>
          </FrontSubCont>
        </FrontIntContainer>
      </FrontContainer>
      <SubContainer>
        <SubSubCont>
          <Letters>Enjoy on your TV.</Letters>
          <FrontPara>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more
          </FrontPara>
        </SubSubCont>
        <img
          src={
            "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
          }
          alt=""
          style={{ maxWidth: "50vw" }}
        />
      </SubContainer>
      <SubContainer>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
          alt=""
          style={{ maxWidth: "50vw" }}
        />
        <SubSubCont>
          <Letters>Download your shows to watch offline.</Letters>
          <FrontPara>
            Save your favorites easily and always have something to watch.
          </FrontPara>
        </SubSubCont>
      </SubContainer>
      <SubContainer>
        <SubSubCont>
          <Letters>Watch everywhere</Letters>
          <FrontPara>
            Stream unlimited movies and TC shows on your phone, tablet, laptop,
            and TV without paying more.
          </FrontPara>
        </SubSubCont>
        <img
          src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
          alt=""
          style={{ maxWidth: "50vw" }}
        />
      </SubContainer>
      <SubContainer>
        <img
          src="https://occ-0-1562-116.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
          alt=""
          style={{ maxWidth: "50vw" }}
        />
        <SubSubCont>
          <Letters>Create profiles for kids.</Letters>
          <FrontPara>
            Send kids on adventures with their favorite characters in a space
            made just for them - free with your membership.
          </FrontPara>
        </SubSubCont>
      </SubContainer>
      <FrontIntContainer
        style={{ height: "20vh", borderBottom: "solid 10px #2d2d2d" }}>
        <span
          style={{
            fontSize: "1.vw",
            marginBottom: "20px",
          }}>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "960px",
          }}>
          <AddInputFront />
          <SignUpButton
            onClick={() => {
              history.push("/signin");
            }}>
            Get Started
          </SignUpButton>
        </div>
      </FrontIntContainer>
      <BrowseFooter />
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import {
  Header,
  BannerContainer,
  BannerOverview,
  BannerButton,
} from "../styles/index";

import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const Banner = ({ fetchURL }) => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState();

  useEffect(() => {
    setLoading(true);
    async function GetData() {
      const request = await axios.get(
        `${process.env.REACT_APP_URL}${fetchURL}`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      setLoading(false);
      return request;
    }
    GetData();
  }, [fetchURL]);

  const reduceLength = (str, num) => {
    console.log(loading);
    return str?.length > num ? str.substr(0, num - 1) + " . . ." : str;
  };

  return movie ? (
    <Header
      backgroundImage={`${process.env.REACT_APP_IMAGE_EXTENSION}${movie.backdrop_path}`}>
      <BannerContainer>
        <h1>{movie.title || movie.name || movie.original_name}</h1>
        <div>
          <BannerButton>Play</BannerButton>
          <BannerButton>Info</BannerButton>
        </div>
        <BannerOverview>{reduceLength(movie?.overview, 150)}</BannerOverview>
      </BannerContainer>
    </Header>
  ) : (
    <h1>Loading</h1>
  );
};

export default Banner;

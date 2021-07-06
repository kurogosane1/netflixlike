import React, { useState, useEffect } from "react";
import { Rows, MovieImage, Container, Text } from "../styles";
import axios from "axios";
import dotenv from "dotenv";
import YouTube from "react-youtube";
const movieTrailer = require("movie-trailer");

dotenv.config();

const RowLines = (props) => {
  const { title, fetchURL, isLarge } = props;
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    setLoading(true);
    async function GetData() {
      const request = await axios.get(
        `${process.env.REACT_APP_URL}${fetchURL}`
      );
      setMovies(request.data.results);
      setLoading(false);
      return request;
    }
    return GetData();
  }, [fetchURL]);

  const options = {
    height: "290",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function handleClick(movie) {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_name || movie?.title)
        .then((url) => {
          console.log(url);
          console.log(new URL(url).search);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <>
      <Container>
        <Text>{title}</Text>
        <Rows>
          {movies &&
            movies?.map((data) => {
              return (
                <MovieImage
                  key={data.id}
                  src={`${process.env.REACT_APP_IMAGE_EXTENSION}${
                    isLarge ? data.backdrop_path : data.poster_path
                  }`}
                  isLarge={isLarge}
                  alt={data.title}
                  onClick={() => handleClick(data)}
                />
              );
            })}
        </Rows>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
      </Container>
    </>
  );
};

export default RowLines;

import React from "react";
import RowLines from "../components/Rows";
import requests from "../request";
import Banner from "../components/Banner";
import BrowseFooter from "../components/BrowseFooter";
import Nav from "../components/Navbar";

const Mains = () => {
  return (
    <>
      <Nav />
      <Banner fetchURL={requests.fetchTrending} />
      <RowLines
        title="Netflix Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <RowLines title="Trending" fetchURL={requests.fetchTrending} />
      <RowLines title="Top Rated" fetchURL={requests.fetchTopRated} />
      <RowLines title="Action" fetchURL={requests.fetchActionMovies} />
      <RowLines title="Comedies" fetchURL={requests.fetchComedyMovies} />
      <RowLines title="Horror" fetchURL={requests.fetchHorrorMovies} />
      <RowLines title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <RowLines title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <BrowseFooter />
    </>
  );
};
export default Mains;

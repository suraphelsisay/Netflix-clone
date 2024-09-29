import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/Request";

function Rowlist() {
  return (
    <>
      <Row
        key="netflix-originals"
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow={true}
      />
      <Row
        key="trending-now"
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
      />
      <Row
        key="top-rated"
        title="Top Rated"
        fetchUrl={requests.fetchTopRatedMovies}
      />
      <Row
        key="action-movies"
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        key="comedy-movies"
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        key="horror-movies"
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        key="romance-movies"
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row key="tv-shows" title="TV Shows" fetchUrl={requests.fetchTVShow} />
      <Row
        key="documentaries"
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
      />
    </>
  );
}

export default Rowlist;

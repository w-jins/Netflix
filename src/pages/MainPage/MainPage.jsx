import React from "react";
import Row from "../../components/Row";
import Banner from "../../components/Banner";
import requests from "../../api/requests";

export default function MainPage() {
  const props = [
    {
      title: "NETFLIX ORIGINALS",
      id: "NO",
      fetchUrl: requests.fetchNetflixOriginals,
      isLargeRow: true,
    },
    {
      title: "Trending Now",
      id: "TN",
      fetchUrl: requests.fetchTrending,
      isLargeRow: false,
    },
    {
      title: "Top Rated",
      id: "TR",
      fetchUrl: requests.fetchTopRated,
      isLargeRow: false,
    },
    {
      title: "Action Movies",
      id: "AM",
      fetchUrl: requests.fetchActionMovies,
      isLargeRow: false,
    },
    {
      title: "Comedy Movies",
      id: "CM",
      fetchUrl: requests.fetchComedyMovies,
      isLargeRow: false,
    },
  ];
  return (
    <div>
      <Banner />
      {props.map((data) => (
        <Row {...data} />
      ))}
    </div>
  );
}

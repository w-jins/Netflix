import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "../../api/axios";
import "../../styles/SearchPage.css";
import { useDebounce } from "../../hooks/useDebounce";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const nav = useNavigate();

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      console.log(request);
      setSearchResults(request.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageURL =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <div
                  onClick={() => nav(`/${movie.id}`)}
                  className="movie__column-poster"
                >
                  <img
                    src={movieImageURL}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
        })}
      </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>NO MOVIE</p>
        </div>
      </section>
    );
  };
  return renderSearchResults();
}

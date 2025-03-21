import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import "../styles/Row.css";
import MovieModal from "./MovieModal/MovieModal";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Row({ title, fetchUrl, isLargeRow, id }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  useEffect(() => {
    fetchMoiveData();
  }, []);

  const fetchMoiveData = async () => {
    const request = await axios.get(fetchUrl);
    console.log(request);
    setMovies(request.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };
  return (
    <section className="row">
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            spaceBetween: 6,
          },
          998: {
            slidesPerView: 5,
            spaceBetween: 5,
          },
          625: {
            slidesPerView: 4,
            spaceBetween: 4,
          },
          0: {
            slidesPerView: 3,
            spaceBetween: 3,
          },
        }}
      >
        <div id={id} className="row__posters">
          {movies.map((data) => (
            <SwiperSlide>
              <img
                key={data.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? data.poster_path : data.backdrop_path
                }`}
                alt={data.name}
                onClick={() => handleClick(data)}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}

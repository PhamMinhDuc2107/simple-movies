import React from "react";
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";

import { fetcher } from "../../config";

// https://api.themoviedb.org/3/movie/now_playing?api_key=60f59f367a291b1bf614b20e78aec83e
const MovieList = ({ type }) => {
   const { data } = useSWR(
      `https://api.themoviedb.org/3/movie/${type}?api_key=60f59f367a291b1bf614b20e78aec83e`,
      fetcher
   );
   const movies = data?.results || [];
   return (
      <>
         <Swiper spaceBetween={40} slidesPerView={4}>
            {movies &&
               movies.length > 0 &&
               movies.map((item) => (
                  <SwiperSlide key={item.id}>
                     <MovieCard item={item}></MovieCard>
                  </SwiperSlide>
               ))}
         </Swiper>
      </>
   );
};

export default MovieList;

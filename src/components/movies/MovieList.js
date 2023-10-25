import React from "react";
import MovieCard from "./MovieCard";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import LoadingCardSkeleton from "../loading/LoadingCardSkeleton";
import { fetcher, tmbdApi } from "../../config";

// https://api.themoviedb.org/3/movie/now_playing?api_key=60f59f367a291b1bf614b20e78aec83e
const MovieList = ({ type }) => {
   const { data, error } = useSWR(tmbdApi.getMovieList(type), fetcher);
   let loading = !data && !error;
   const movies = data?.results || [];
   return (
      <>
         {loading && (
            <Swiper spaceBetween={40} slidesPerView={4}>
               <SwiperSlide>
                  <LoadingCardSkeleton></LoadingCardSkeleton>
               </SwiperSlide>
               <SwiperSlide>
                  <LoadingCardSkeleton></LoadingCardSkeleton>
               </SwiperSlide>
               <SwiperSlide>
                  <LoadingCardSkeleton></LoadingCardSkeleton>
               </SwiperSlide>
               <SwiperSlide>
                  <LoadingCardSkeleton></LoadingCardSkeleton>
               </SwiperSlide>
            </Swiper>
         )}
         <Swiper spaceBetween={40} slidesPerView={4}>
            {movies &&
               !loading &&
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

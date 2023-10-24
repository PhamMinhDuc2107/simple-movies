import React from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../components/movies/MovieCard";

const MovieDetailPage = () => {
   const { id } = useParams();
   let { data } = useSWR(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`,
      fetcher
   );

   if (!data) return null;
   let { backdrop_path, poster_path, title, genres, overview } = data;
   return (
      <div className="px-5">
         <div className="relative w-full h-[600px]">
            <div className="absolute w-full h-full bg-black bg-opacity-50 insert-0 "></div>
            <img
               src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
               alt=""
               className="object-cover w-full h-full "
            />
         </div>
         <div className="w-full h-[400px] max-w-[800px] mx-auto -translate-y-2/4 rounded-lg relative z-10 mb-10">
            <img
               src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
               alt=""
               className="object-cover w-full h-full rounded-lg"
            />
         </div>
         <h1 className="text-3xl font-bold text-center text-white -mt-[200px] mb-10">
            {title}
         </h1>
         <div className="flex items-center justify-center mb-8 gap-x-3">
            {genres &&
               genres.length > 0 &&
               genres.map((item) => (
                  <div
                     className="px-4 py-2 border rounded-lg border-primary text-primary"
                     key={item.id}
                  >
                     {item.name}
                  </div>
               ))}
         </div>
         <p className="text-sm text-center text-white leading-relaxed max-w-[600px] mx-auto mb-10">
            {overview}
         </p>
         <MovieCredits></MovieCredits>
         <MovieVideo></MovieVideo>
         <MovieSimilar></MovieSimilar>
      </div>
   );
};
function MovieCredits() {
   const { id } = useParams();
   let { data } = useSWR(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`,
      fetcher
   );

   if (!data) return null;
   let { cast } = data;
   if (!cast || cast.length <= 0) return null;
   return (
      <div className="mb-10">
         <h2 className="mb-10 text-2xl text-center text-white">Cast</h2>
         <div className="grid grid-cols-4 gap-5">
            {cast.slice(0, 4).map((item) => (
               <div className="cart-item" key={item.id}>
                  <img
                     src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                     className="w-full h-[350px] object-cover rounded-lg"
                  />
                  <span className="inline-block mt-4 text-xl text-white">
                     {item.name}
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
}
function MovieVideo() {
   const { id } = useParams();
   let { data } = useSWR(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`,
      fetcher
   );
   if (!data) return null;
   let { results } = data;
   if (!results || results.length <= 0) return null;
   return (
      <div className="mb-10">
         {results.slice(0, 2).map((item) => (
            <div className="w-full aspect-video" key={item.id}>
               <iframe
                  src={`https://www.youtube.com/embed/${item.key}`}
                  title={item.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-[850px]"
               ></iframe>
            </div>
         ))}
      </div>
   );
}
function MovieSimilar() {
   const { id } = useParams();
   let { data } = useSWR(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`,
      fetcher
   );

   if (!data) return null;
   let { results } = data;
   if (!results || results.length <= 0) return null;
   return (
      <div className="py-10 ">
         <h2 className="mb-10 text-3xl font-medium text-white">
            Similar movies
         </h2>
         <Swiper spaceBetween={40} slidesPerView={4}>
            {results.map((item) => (
               <SwiperSlide key={item.id}>
                  <MovieCard item={item}></MovieCard>
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
}

export default MovieDetailPage;

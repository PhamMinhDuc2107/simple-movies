import React from "react";
import MovieList from "../components/movies/MovieList";
const HomePage = () => {
   return (
      <>
         <section className="mt-20 movies-layout page-container">
            <h2 className="mb-10 text-2xl font-bold text-white capitalize">
               Now Playing
            </h2>
            <MovieList type={"now_playing"}></MovieList>
         </section>
         <section className="mt-20 movies-layout page-container">
            <h2 className="mb-10 text-2xl font-bold text-white capitalize">
               Top Rated
            </h2>
            <MovieList type={"top_rated"}></MovieList>
         </section>
         <section className="my-20 movies-layout page-container">
            <h2 className="mb-10 text-2xl font-bold text-white capitalize">
               Trending
            </h2>
            <MovieList type={"popular"}></MovieList>
         </section>
      </>
   );
};

export default HomePage;

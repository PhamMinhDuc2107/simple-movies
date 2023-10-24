import React, { Fragment, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcher } from "../config";
import MovieCard from "../components/movies/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

const itemsPerPage = 20;
const MoviePage = () => {
   const [pageCount, setPageCount] = useState(0);
   let [nextPage, setNextPage] = useState(1);
   const [query, setQuery] = useState("");
   let [itemOffset, setItemOffset] = useState(0);
   const [url, setUrl] = useState(
      `https://api.themoviedb.org/3/movie/popular?api_key=60f59f367a291b1bf614b20e78aec83e&page=${nextPage}`
   );

   const filter = useDebounce(query, 1000);
   const { data, error } = useSWR(url, fetcher);
   const loading = !data && !error;

   let movies = data?.results || null;
   useEffect(() => {
      if (filter) {
         setUrl(
            `https://api.themoviedb.org/3/search/movie?api_key=60f59f367a291b1bf614b20e78aec83e&query=${filter}&page=${nextPage}`
         );
      } else {
         setUrl(
            `https://api.themoviedb.org/3/movie/popular?api_key=60f59f367a291b1bf614b20e78aec83e&page=${nextPage}`
         );
      }
   }, [data, filter, nextPage]);
   useEffect(() => {
      if (data && data.total_results) {
         setPageCount(Math.ceil(data.total_results / itemsPerPage));
      }
   }, [data, pageCount]);
   const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % +data.total_results;
      setItemOffset(newOffset);
      setNextPage(event.selected + 1);
   };

   return (
      <Fragment>
         <div className=" page-container">
            <div className="flex items-center mb-5 text-white">
               <input
                  type="text"
                  className="flex-1 px-5 py-3 rounded-lg outline-none bg-slate-800"
                  placeholder="Search..."
                  onChange={(e) => setQuery(e.target.value)}
               />
            </div>
            {loading && (
               <div className="  mx-auto rounded-full w-10 h-10 border-t-transparent border-[5px] border-primary border-solid transition-all  animate-spin"></div>
            )}
            <div className="grid grid-cols-4 gap-5 ">
               {movies &&
                  movies.length > 0 &&
                  movies.map((item) => (
                     <MovieCard key={item.id} item={item}></MovieCard>
                  ))}
            </div>
            <ReactPaginate
               breakLabel="..."
               nextLabel=">"
               onPageChange={handlePageClick}
               pageRangeDisplayed={3}
               pageCount={pageCount}
               previousLabel="<"
               renderOnZeroPageCount={null}
               className="movie-navigation"
               activeClassName="bg-primary border-primary text-white rounded-lg"
            />
         </div>
      </Fragment>
   );
};

export default MoviePage;

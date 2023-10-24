import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
   const { id, title, vote_average, release_date, poster_path } = item;
   const navigate = useNavigate();
   return (
      <>
         <div className="flex flex-col p-3 text-white rounded-md select-none movie-cart bg-slate-800">
            <img
               src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
               alt={title}
               className="w-full h-[300px] object-cover rounded-md mb-5"
            />
            <div className="flex flex-col flex-1">
               <h3 className="font-medium hidden-text">{title}</h3>
               <div className="flex items-center justify-between mb-10 text-sm opacity-40">
                  <span>{new Date(release_date).getFullYear()}</span>
                  <span>{vote_average}</span>
               </div>
               <button
                  onClick={() => navigate(`/movies/${id}`)}
                  className="w-full px-6 py-3 mt-auto font-medium capitalize rounded-lg bg-primary"
               >
                  Watch now
               </button>
            </div>
         </div>
      </>
   );
};

export default MovieCard;

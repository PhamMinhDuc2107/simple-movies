import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { tmbdApi } from "../../config";

const MovieCard = ({ item }) => {
   const { id, title, vote_average, release_date, poster_path } = item;
   const navigate = useNavigate();
   return (
      <>
         <div className="flex flex-col p-3 text-white rounded-md select-none movie-cart bg-slate-800">
            <img
               src={tmbdApi.getImg(poster_path)}
               alt={title}
               className="w-full h-[300px] object-cover rounded-md mb-5"
            />
            <div className="flex flex-col flex-1">
               <h3 className="font-medium hidden-text">{title}</h3>
               <div className="flex items-center justify-between mb-10 text-sm opacity-40">
                  <span>{new Date(release_date).getFullYear()}</span>
                  <span>{vote_average}</span>
               </div>
               <Button onClick={() => navigate(`/movies/${id}`)}>
                  Watch now
               </Button>
            </div>
         </div>
      </>
   );
};
export default MovieCard;

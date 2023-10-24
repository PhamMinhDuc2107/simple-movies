import React from "react";
import { useNavigate } from "react-router-dom";

const BannerItem = ({ item }) => {
   const { title, poster_path, id } = item;
   const navigate = useNavigate();
   return (
      <div className="relative w-full h-full bg-white rounded-lg">
         <div className="absolute z-[1] inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent rounded-lg"></div>
         <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
            className="object-cover w-full h-full rounded-lg"
         />
         <div className="absolute bottom-0 z-10 text-white left-5">
            <h2 className="mb-3 text-3xl font-bold">{title}</h2>
            <div className="flex items-center mb-8 gap-x-3">
               <div className="px-4 py-2 border rounded-md border-gray0">
                  Action
               </div>
               <div className="px-4 py-2 border rounded-md border-gray0">
                  Action
               </div>
               <div className="px-4 py-2 border rounded-md border-gray0">
                  Adventure
               </div>
            </div>
            <button
               onClick={() => navigate(`/movies/${id}`)}
               className="px-6 py-3 mb-5 font-medium rounded-lg bg-primary"
            >
               Watch now
            </button>
         </div>
      </div>
   );
};

export default BannerItem;

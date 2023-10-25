import React from "react";
import Loading from "./Loading";

const LoadingCardSkeleton = () => {
   return (
      <>
         <div className="flex flex-col p-3 text-white rounded-md select-none movie-cart bg-slate-800">
            <Loading
               width="100%"
               height="300px"
               radius="8px"
               className="mb-5"
            ></Loading>
            <div className="flex flex-col flex-1">
               <Loading width="100%" height="20px" className="mb-5"></Loading>
               <div className="flex items-center justify-between mb-10 text-sm opacity-40">
                  <span>
                     <Loading width="50px" height="10px"></Loading>
                  </span>
                  <span>
                     <Loading width="30px" height="10px"></Loading>
                  </span>
               </div>
               <Loading width="100%" height="40px"></Loading>
            </div>
         </div>
      </>
   );
};

export default LoadingCardSkeleton;

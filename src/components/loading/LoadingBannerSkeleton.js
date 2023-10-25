import React from "react";
import Loading from "./Loading";

const LoadingBannerSkeleton = () => {
   return (
      <div className="relative w-full h-full bg-white rounded-lg">
         <div className="absolute z-[1] inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent rounded-lg"></div>
         <Loading width="100%" height="100%"></Loading>
         <div className="absolute bottom-0 z-10 text-white left-5">
            <Loading
               width="100px"
               height="30px"
               className="mb-3 text-3xl font-bold"
            ></Loading>
            <div className="flex items-center mb-8 gap-x-3">
               <Loading
                  width="100px"
                  height="40px"
                  className="border rounded-md border-gray"
               ></Loading>
               <Loading
                  width="100px"
                  height="40px"
                  className="border rounded-md border-gray"
               ></Loading>
               <Loading
                  width="100px"
                  height="40px"
                  className="border rounded-md border-gray"
               ></Loading>
            </div>
            <Loading width="336px" height="40px" className="mb-10"></Loading>
         </div>
      </div>
   );
};

export default LoadingBannerSkeleton;

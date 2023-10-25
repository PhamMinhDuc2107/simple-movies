import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import useSWR from "swr";
import { fetcher } from "../../config";
import BannerItem from "./BannerItem";
import "./Banner.scss";
import { Autoplay, Scrollbar } from "swiper/modules";
import LoadingBannerSkeleton from "../loading/LoadingBannerSkeleton";
const Banner = () => {
   const { data, error } = useSWR(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=60f59f367a291b1bf614b20e78aec83e`,
      fetcher
   );
   let loading = !data && !error;
   const movies = data?.results || [];
   return (
      <section className=" banner page-container  h-[700px] overflow-hidden">
         {loading && (
            <Swiper>
               <SwiperSlide>
                  <LoadingBannerSkeleton></LoadingBannerSkeleton>
               </SwiperSlide>
            </Swiper>
         )}
         <Swiper
            slidesPerView={1}
            grabCursor="true"
            loop={true}
            scrollbar={{
               hide: false,
            }}
            autoplay={{
               delay: 5000,
               disableOnInteraction: false,
            }}
            modules={[Autoplay, Scrollbar]}
         >
            {movies &&
               !loading &&
               movies.length > 0 &&
               movies.map((item) => (
                  <SwiperSlide key={item.id}>
                     <BannerItem item={item}></BannerItem>
                  </SwiperSlide>
               ))}
         </Swiper>
      </section>
   );
};

export default Banner;

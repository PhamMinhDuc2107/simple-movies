import { Route, Routes } from "react-router-dom";

import "./App.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Main from "./components/layout/Main";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import Banner from "./components/banner/Banner";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
   return (
      <>
         <Routes>
            <Route element={<Main />}>
               <Route
                  path="/"
                  element={
                     <>
                        <Banner />
                        <HomePage />
                     </>
                  }
               ></Route>
               <Route path="/movies" element={<MoviePage />}></Route>
               <Route path="/movies/:id" element={<MovieDetailPage />}></Route>
            </Route>
         </Routes>
      </>
   );
}

export default App;

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";
import NotFound from "./pages/NotFound";
import { exact } from "prop-types";

const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));

function App() {
   return (
      <Suspense fallback={<></>}>
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
               <Route
                  path="/movies"
                  element={<MoviePage />}
                  exact={true}
               ></Route>
               <Route
                  path="/movies/:id"
                  element={<MovieDetailPage />}
                  exact={true}
               ></Route>
               <Route path="*" element={<NotFound />}></Route>
            </Route>
         </Routes>
      </Suspense>
   );
}

export default App;

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = `60f59f367a291b1bf614b20e78aec83e`;
const tmbdEndpoint = `https://api.themoviedb.org/3/movie/`;
const tmdbEndpointSearch = `https://api.themoviedb.org/3/search/movie`;
export const tmbdApi = {
   getMovieList: (type = "movie", params = "") =>
      tmbdEndpoint + type + `?api_key=${apiKey}${params}`,
   getMovieDetail: (id) => tmbdEndpoint + id + `?api_key=${apiKey}`,
   getMovieInfo: (id, type) => tmbdEndpoint + id + `/${type}?api_key=${apiKey}`,
   getMovieSearch: (filter, nextPage) =>
      tmdbEndpointSearch +
      `?api_key=${apiKey}` +
      `&query=${filter}&page=${nextPage}`,
   getImg: (poster_path, type = "w500") =>
      `https://image.tmdb.org/t/p/${type}/${poster_path}`,
};

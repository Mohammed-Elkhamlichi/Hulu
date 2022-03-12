const apiKey = process.env.apiKey;
const BaseApiUrl = process.env.BaseApiUrl;

const requests = {
  fetchTrending: {
    title: "Trending",
    url: `${BaseApiUrl}/trending/all/week?api_key=${apiKey}`,
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `${BaseApiUrl}/movie/top_rated&api_key=${apiKey}`,
  },
  fetchActionMovies: {
    title: "Action ",
    url: `${BaseApiUrl}/discover/movie?api_key=${apiKey}&with_genres=28`,
  },
  fetchComedyMovies: {
    title: "Action",
    url: `${BaseApiUrl}/discover/movie?api_key=${apiKey}&with_genres=35`,
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `${BaseApiUrl}/discover/movie?api_key=${apiKey}&with_genres=27`,
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `${BaseApiUrl}/discover/movie?api_key=${apiKey}&with_genres=10749`,
  },
  fetchMystery: {
    title: "My Stery",
    url: `${BaseApiUrl}/discover/movie?api_key=${apiKey}&with_genres=9648`,
  },
};
export default requests;

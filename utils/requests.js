const apiKey = process.env.apiKey;

const requests = {
    fetchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${apiKey}`,
    },
    fetchTopRated: {
        title: "Top Rated",
        url: `/movie/top_rated&api_key=${apiKey}`,
    },
    fetchActionMovies: {
        title: "Action ",
        url: `/discover/movie?api_key=${apiKey}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: "Action",
        url: `/discover/movie?api_key=${apiKey}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie?api_key=${apiKey}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
    },
    fetchMystery: {
        title: "My Stery",
        url: `/discover/movie?api_key=${apiKey}&with_genres=9648`,
    },
    fetchTest: {
        title: "Test",
        url: `/discover/movie?api_key=${apiKey}&with_genres=80`,
    },
};
export default requests;

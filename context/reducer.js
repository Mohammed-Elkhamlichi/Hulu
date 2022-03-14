// ! initial state
export const initialState = {
    getList: [],
    getGenres: [],
    getAllByGenres: [],
    getSearch: [],
    getTrending: [],
    getDev: "Mohammed ELkhamlichi",
};

// ! reducer action type
const actionTypes = {
    GET_LIST: "GET_MOVIES_LIST",
    GET_GENRES: "GET_MOVIES_GENRES",
    GET_SEARCH: "GET_SEARCH",
    GET_TRENDING: "GET_TRENDING",
};

// ! reducer function
export const reducer = (state, action) => {
    switch (action.type) {
        // ! the case of geting all genres
        case actionTypes.GET_MOVIES_GENRES:
            return { ...state, getGenres: action.genres };

        // ! the case of geting all movies an tv's
        case actionTypes.GET_MOVIES_LIST:
            return {
                ...state,
                movies: "Get List",
            };

        // ! the case of geting the search results
        case actionTypes.GET_SEARCH:
            return { ...state, getSearch: "Get Search" };

        // ! the case of geting all trending movies and tv's
        case actionTypes.GET_TRENDING:
            return { ...state, getTrending: "Get Trending" };

        default:
            return state;
    }
};

export const initialState = {
    movies: [],
    genres: [],
    dev: "Mohammed ELkhamlichi",
};

const actionTypes = {
    GET_MOVIES_GENRES: "GET_MOVIES_GENRES",
    GET_MOVIES_LIST: "GET_MOVIES_LIST",
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.GET_MOVIES_GENRES:
            return { ...state, genres: action.genres };

        case actionTypes.GET_MOVIES_LIST:
            return {
                ...state,
                movies: [{ id: 1, title: "the title of this movie" }],
            };

        default:
            return state;
    }
};

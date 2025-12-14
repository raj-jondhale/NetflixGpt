import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieResults: null,
        isLoading: false,
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        setGptLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        clearGptResults: (state) => {
            state.movieNames = null;
            state.movieResults = null;
        },
        addGptMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
            state.isLoading = false;
        }
    }

});


export const { toggleGptSearchView, setGptLoading, clearGptResults, addGptMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
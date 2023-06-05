import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
        anime: {}
    },
    reducers: {
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
        getAnime: (state, action) => {
            state.anime = action.payload;
        },
    },
});

export const { getApiConfiguration, getGenres, getAnime } = homeSlice.actions;

export default homeSlice.reducer;
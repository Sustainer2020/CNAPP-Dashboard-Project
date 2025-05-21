import { createSlice } from "@reduxjs/toolkit";

const searchQuery = createSlice({
    name: "searchQuery",
    initialState: {
        value: "",
    },
    reducers: {
        updateSearchQuery: (state, actions) => {
            state.value = actions.payload.search;
        },
    },
});

export const { updateSearchQuery } = searchQuery.actions;
export default searchQuery.reducer;

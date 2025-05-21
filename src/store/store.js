import { configureStore } from "@reduxjs/toolkit";
import widgetDataReducer from "./slices/widgetSlice";
import modalStateReducer from "./slices/modalStateSlice";
import searchQueryReducer from "./slices/searchQuerySlice";

export default configureStore({
    reducer: {
        widgetData: widgetDataReducer,
        modalToggle: modalStateReducer,
        searchQuery: searchQueryReducer,
    },
});

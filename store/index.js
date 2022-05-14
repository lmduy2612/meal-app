import {configureStore} from '@reduxjs/toolkit';
import viewedReducer from "./slices/viewed";
import favoriteReducer from "./slices/favorite";

export default configureStore({
    reducer: {
        viewed: viewedReducer,
        favorite: favoriteReducer,
    },
});

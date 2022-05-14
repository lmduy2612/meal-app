import {createSlice} from '@reduxjs/toolkit';

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        items: [],
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const {id} = action.payload;
            const item = state.items.find(item => item === id);
            if (!item) {
                state.items = [...new Set([id, ...state.items])];
            } else {
                state.items = state.items.filter(item => item !== id);
            }
        },
        removeProductFavorite: (state, action) => {
            const {id} = action.payload;
            state.items = state.items.filter(item => item !== id);
        },
        removeAllProductFavorite: (state) => {
            state.items = [];
        },
    },
})

export const {toggleFavorite, removeProductFavorite, removeAllProductFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;

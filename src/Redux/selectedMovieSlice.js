import { createSlice} from '@reduxjs/toolkit';

const selectedMovieSlice = createSlice({
    name: 'Selected movie',
    initialState:{
        details: null
    },
    reducers: {
        selectMovie: (state, action) => {
            state.details = action.payload;
          },
    }
});

export const {selectMovie} = selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;
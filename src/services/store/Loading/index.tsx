import { createSlice } from "@reduxjs/toolkit";

interface loadingStateProps {
    loading: boolean;
}

const initialState: loadingStateProps = {
    loading: false,
};

const loadingSlice = createSlice({
    name: "loadingReducer",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;

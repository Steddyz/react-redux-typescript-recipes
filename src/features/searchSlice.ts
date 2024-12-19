import { createSlice, isAction, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  filter: string;
}

const initialState: SearchState = {
  filter: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setFitler(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { setFitler } = searchSlice.actions;

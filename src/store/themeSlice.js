import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "appTheme",
  initialState: {
    mode: "white",
    textColor: "black",
  },
  reducers: {
    initialMode: (state) => {
      state.mode === "white"
        ? ((state.mode = "black"), (state.textColor = "white"))
        : ((state.mode = "white"), (state.textColor = "black"));
    },
  },
});

export const { initialMode } = themeSlice.actions;
export default themeSlice;

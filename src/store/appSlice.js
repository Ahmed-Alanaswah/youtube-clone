const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
  name: "app",
  initialState: {
    openSideBar: true,
  },
  reducers: {
    openSideBarHandler: (state, action) => {
      state.openSideBar = !state.openSideBar;
    },
  },
});

export const { openSideBarHandler } = appSlice.actions;
export default appSlice.reducer;

const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
  name: "app",
  initialState: {
    openSideBar: true,
    closeSideBar: false,
  },
  reducers: {
    openSideBarHandler: (state, action) => {
      state.openSideBar = !state.openSideBar;
    },

    closeSideBarHandler: (state) => {
      state.closeSideBar = true;
    },
  },
});

export const { openSideBarHandler, closeSideBarHandler } = appSlice.actions;
export default appSlice.reducer;

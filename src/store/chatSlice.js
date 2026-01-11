const { createSlice } = require("@reduxjs/toolkit");

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    chatList: [],
  },
  reducers: {
    handleAddChat: (state, action) => {
      state.chatList.splice(15, 1);
      state.chatList.unshift(action.payload);
    },
  },
});

export const { handleAddChat } = chatSlice.actions;
export default chatSlice.reducer;

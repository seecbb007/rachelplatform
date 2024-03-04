import { createSlice } from "@reduxjs/toolkit";

export const chatbotReducer = createSlice({
  name: "chatbot",
  initialState: {
    displayChat: false,
    textareaInputValue: "",
    chatMessage: [],
  },
  reducers: {
    setDisplayChat: (state, action) => {
      state.displayChat = action.payload;
    },
    setTextareaInputValue: (state, action) => {
      state.textareaInputValue = action.payload;
    },
    setChatMessage: (state, action) => {
      state.chatMessage.push(action.payload);
    },
  },
});
export const { setDisplayChat, setTextareaInputValue, setChatMessage } =
  chatbotReducer.actions;
export default chatbotReducer.reducer;

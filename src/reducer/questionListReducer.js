import { createSlice } from "@reduxjs/toolkit";

export const questionListRedcuer = createSlice({
  name: "questionList",
  initialState: {
    buyHomeQuestionList: [],
  },
  reducers: {
    setBuyHomeQuestionList: (state, action) => {
      state.buyHomeQuestionList.push(action.payload);
    },
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import chatbotReducer from "./reducer/chatbotReducer";

export default configureStore({
  reducer: {
    chatbotReducer,
  },
});
// import mainReducer from "./reducer/mainReducer";
// let store = createStore(mainReducer);
// export default store;

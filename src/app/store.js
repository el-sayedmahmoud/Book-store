import { configureStore } from "@reduxjs/toolkit";
import screenReducer from "../features/screen/screenSlice";
import templateReducer10 from "../features/templateData/templateSlice";

export const store = configureStore({
  reducer: {
    screen: screenReducer,
    template: templateReducer10,
  },
});

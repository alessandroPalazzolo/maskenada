import { configureStore } from "@reduxjs/toolkit";
import bodyLinkReducer from "./slices/bodyLinkSlice";

export default configureStore({
    reducer: {
        bodyLink: bodyLinkReducer,
    }
});
import { createSlice } from "@reduxjs/toolkit";

const bodyLinkSlice = createSlice({
    name: "bodyLink",
    initialState: {
        selected: ""
    },
    reducers: {
        selectLink: (state, action) => {
            state.selected = action.payload;
        },
        unselectLink: (state) => {
            state.selected = "";
        }
    }
});

export const { selectLink, unselectLink } = bodyLinkSlice.actions;
export default bodyLinkSlice.reducer;
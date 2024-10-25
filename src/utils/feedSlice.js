import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name:"feed",
    initialState: [],
    reducers: {
        addFeed : (state,action) => {
            return action.payload;
        },
        removeUserFeed: (state,action) => {
            const newFeed = state.filter((feed)=>feed._id !== action.payload);
            return newFeed;
        }
    }
})

export const {addFeed,removeUserFeed} = feedSlice.actions;
export default feedSlice.reducer;
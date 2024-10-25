import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import feedSlice from "./feedSlice";
import connectionSlice from "./connectionsSlice";
import requestsSlice from "./requestsSlice";
const reduxStore = configureStore({
    reducer : {
        user:userSlice,
        feed:feedSlice,
        connections: connectionSlice,  // add your other slices here
        requests: requestsSlice
    }
})

export default reduxStore;
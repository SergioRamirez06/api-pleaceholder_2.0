import { configureStore } from "@reduxjs/toolkit";
import { getJsonPleaceholder } from "../apis/getPleaceholder";


export const store = configureStore({
    reducer: {
        [getJsonPleaceholder.reducerPath]: getJsonPleaceholder.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(getJsonPleaceholder.middleware)
})
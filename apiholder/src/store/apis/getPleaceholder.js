import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getJsonPleaceholder = createApi({
    reducerPath: 'pleaceholder',
    
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => '/photos'
        })

    })
})

export const { useGetTodosQuery } = getJsonPleaceholder;
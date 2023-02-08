import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000"}),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "products",
        }),

        getAllServices: builder.query({
            query: () => "services",
        }),

        getAllAddons: builder.query({
            query: (serviceid) => `addons/${serviceid}`,
        }),

       
    }),
});

export const { useGetAllProductsQuery, useGetAllServicesQuery, useGetAllAddonsQuery } = productsApi
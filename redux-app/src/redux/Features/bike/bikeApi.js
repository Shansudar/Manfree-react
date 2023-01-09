import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const bikeApi = createApi({
  reducerPath: "bike-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006/" }),
  endpoints: (builder) => ({
    getAllBikes: builder.query({ query: () => "/bikes" }),
    deleteBike: builder.mutation({
      query: (id) => ({ url: `/bikes/${id}`, method: "DELETE" }),
    }),
    createBike: builder.mutation({
      query: (body) => ({ url: "/bikes", body, method: "POST" }),
    }),
  }),
});

export default bikeApi;

export const {
  useGetAllBikesQuery,
  useCreateBikeMutation,
  useDeleteBikeMutation,
} = bikeApi;

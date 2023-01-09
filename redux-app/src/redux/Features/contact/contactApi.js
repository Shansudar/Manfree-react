import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const contactApi = createApi({
  reducerPath: "contact-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006" }),
  endpoints: (builder) => ({
    getContacts: builder.query({ query: () => "/contacts" }),
    getContact: builder.query({ query: (id) => `/contacts/${id}` }),
    addContact: builder.mutation({
      query: (body) => ({
        url: "/contacts",
        method: "POST",
        body,
      }),
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
    }),
    updateContact: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/contacts/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export default contactApi;

export const {
  useGetContactQuery,
  useGetContactsQuery,
  useAddContactMutation,
    useDeleteContactMutation,
  useUpdateContactMutation
} = contactApi;

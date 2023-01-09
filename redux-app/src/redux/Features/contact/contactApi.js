import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const contactApi = createApi({
  reducerPath: "contact-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3006" }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    getContact: builder.query({
      query: (id) => `/contacts/${id}`,
      providesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
      query: (body) => ({
        url: "/contacts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    updateContact: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/contacts/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export default contactApi;

export const {
  useGetContactQuery,
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactApi;

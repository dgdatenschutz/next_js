import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ContactDetails {
  phone_number?: string;
  email_1?: string;
  email_2?: string;
  email_3?: string;
  email_4?: string;
  address?: string;
}
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://gcbadmin.cert-authority.com/",
    prepareHeaders: (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getLegalDocuments: builder.query<any[], void>({
      query: () => ({
        url: "/api/legal-documents",
        responseType: "blob",
      }),
    }),
    getAgreements: builder.query<any[], void>({
      query: () => "/api/agreements",
    }),

    getContactDetails: builder.query<ContactDetails, void>({
      query: () => "/api/contact-details",
    }),
    postContact: builder.mutation<void, {}>({
      query: (contactForm) => ({
        url: "/api/send-contact-form",
        method: "POST",
        body: contactForm,
      }),
    }),
    postComplaint: builder.mutation<void, {}>({
      query: (complaint) => ({
        url: "/api/create-complaint",
        method: "POST",
        body: complaint,
      }),
    }),

    postAuditor: builder.mutation<void, {}>({
      query: (auditor) => ({
        url: "/api/create-auditor",
        method: "POST",
        body: auditor,
      }),
    }),
  }),
});

export const {
  useGetLegalDocumentsQuery,
  useGetContactDetailsQuery,
  useGetAgreementsQuery,
  usePostContactMutation,
  usePostComplaintMutation,
  usePostAuditorMutation,
} = apiSlice;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type signupParams, type signinParams } from "../types/authTypes";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    postSignin: builder.mutation<string, signinParams>({
      query: ({ email, password }) => ({
        url: "/signin",
        method: "POST",
        body: { email, password },
      }),
      transformResponse: (response) => JSON.stringify(response),
      transformErrorResponse: (error) => error.data,
    }),
    postSignup: builder.mutation<string, signupParams>({
      query: ({ name, email, password }) => ({
        url: "/signup",
        method: "POST",
        body: { name, email, password },
      }),
      transformErrorResponse: (error) => error.data,
    }),
  }),
});

export const { usePostSigninMutation, usePostSignupMutation } = authApi;

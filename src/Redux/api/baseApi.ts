import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const BASEURL = "https://womens-backend.vercel.app/api/"; //"https://womens-backend.vercel.app/api/";
//  http://localhost:8000 ||
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASEURL,
    prepareHeaders: (headers) => {
      const authString = localStorage.getItem("womensAuth");
      const auth = authString ? JSON.parse(authString) : null;
      const token = auth ? auth.accessToken : null;
      if (token) {
        headers.set("Authorization", `${token}`);
      }
      headers.set("Content-Type", "application/json");

      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["auth", "order", "review"],
});

export default baseApi;

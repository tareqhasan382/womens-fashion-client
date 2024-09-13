import baseApi from "../api/baseApi";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    orders: build.query({
      query: () => ({
        url: "/orders",
        method: "GET",
      }),
      providesTags: ["order"],
    }),
  }),
});

export const { useOrdersQuery } = orderApi;

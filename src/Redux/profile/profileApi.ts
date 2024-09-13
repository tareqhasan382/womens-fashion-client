import baseApi from "../api/baseApi";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profile: build.query({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const { useProfileQuery } = profileApi;

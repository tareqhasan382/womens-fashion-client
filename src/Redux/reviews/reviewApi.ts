import baseApi from "../api/baseApi";
// product: Types.ObjectId;
// user: Types.ObjectId;
// rating: number;
// comment: string;
export interface Review {
  product: string;
  rating: number;
  comment: string;
}
export interface ReviewResponse {
  _id: string;
  product: string;
  user: {
    name: string;
    image: string;
  };
  rating: number;
  comment: string;
}
export interface Reviews {
  data: ReviewResponse[];
  message: string;
  statusCode: number;
  success: boolean;
}

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createReview: build.mutation<Review, Partial<ReviewResponse>>({
      query: (newData) => ({
        url: "/create-review",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["review"],
    }),
    // Read all
    reviews: build.query({
      query: (id) => ({
        url: `/reviews/${id}`,
        method: "GET",
      }),
      providesTags: ["review"],
    }),
  }),
});

export const { useCreateReviewMutation, useReviewsQuery } = productApi;

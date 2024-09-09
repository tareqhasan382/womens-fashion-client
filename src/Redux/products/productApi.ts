import baseApi from "../api/baseApi";
type QueryParams = {
  limit: number;
  page: number;
  category?: string;
  sortField?: string;
  sortOrder?: string;
};
export interface ProductResponse {
  _id: string;
  review: string[];
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  images: string[];
  colors: string[];
  sizes: string[];
  category: string;
  brand: string;
  stock: number;
  status: boolean;
}
export interface Products {
  data: ProductResponse[];
  message: string;
  statusCode: number;
  success: boolean;
}
export interface Product {
  data: ProductResponse;
  message: string;
  statusCode: number;
  success: boolean;
}
export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Read all stocks
    products: build.query<Products, QueryParams>({
      query: (arg: QueryParams) => ({
        url: "/products",
        method: "GET",
        params: arg,
      }),
      // providesTags: ["product"],
    }),

    flatSale: build.query<Products, void>({
      query: () => ({
        url: "/flatSale",
        method: "GET",
      }),
      // providesTags: ["product"],
    }),
    // Read single stock by id
    product: build.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
      // providesTags: ["product"],
    }),
  }),
});

export const { useProductsQuery, useProductQuery, useFlatSaleQuery } =
  productApi;

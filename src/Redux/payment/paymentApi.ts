import baseApi from "../api/baseApi";
interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
}
interface Product {
  product: string;
  quantity?: number;
}
interface PaymentData {
  customer?: Customer;
  products?: Product[];
  totalPrice?: number;
}
// result?.data?.data?.GatewayPageURL

interface SslCommerzResponse {
  // data: {
  //   GatewayPageURL: string;
  //   directPaymentURL: string;
  //   directPaymentURLBank: string;
  //   directPaymentURLCard: string;
  //   failedreason: string;

  //   storeLogo: string;
  // };
  data: string | URL;
  status: boolean;
}

export const pymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createPayment: build.mutation<SslCommerzResponse, PaymentData>({
      query: (newData) => ({
        url: "/create-payment",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["review"],
    }),
    // Read all
    // reviews: build.query({
    //   query: (id) => ({
    //     url: `/reviews/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: ["review"],
    // }),
  }),
});

export const { useCreatePaymentMutation } = pymentApi;

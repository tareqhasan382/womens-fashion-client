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

interface SslCommerzResponse {
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
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useCreatePaymentMutation } = pymentApi;

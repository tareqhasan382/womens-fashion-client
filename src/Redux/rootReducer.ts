import baseApi from "./api/baseApi";
import authSlice from "./auth/authSlice";
import cardSlice from "./cardSlice";
import favoritesSlice from "./favoritesSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authSlice,
  cart: cardSlice,
  favorite: favoritesSlice,
};

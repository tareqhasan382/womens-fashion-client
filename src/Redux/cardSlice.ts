// /* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
  _id: string;
  name: string;
  size?: string;
  images: string[];
  price: number;
  color?: number;
  quantity?: number;
  discountedPrice: number;
}
interface ICart {
  products: IProduct[];
}

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return [];
  }
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
};
const initialState: ICart = {
  // foods: [],
  products: getFromLocalStorage("cartItem"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (item: IProduct) => item._id === action.payload._id
      );

      if (existing) {
        // Item already exists in the cart, increase quantity
        existing.quantity = existing.quantity! + 1;
        toast.info(` Increase SuccessFully`);
        // existing.total += action.payload.price;
      } else {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
        toast.success(`Add to Cart SuccessFully`);
      }

      localStorage.setItem("cartItem", JSON.stringify(state.products));
    },
    //Remove One Cart
    increaseQuantity: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (item: IProduct) => item._id === action.payload._id
      );
      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! + 1;
        toast.warning(` Increase to Cart SuccessFully`);
      } else {
        state.products = state.products.filter(
          (item: IProduct) => item._id !== action.payload._id
        );
        toast.error(` Deleted to Cart SuccessFully`, { icon: false });
      }
      localStorage.setItem("cartItem", JSON.stringify(state.products));
    },
    //Remove One Cart
    removeOne: (state, action: PayloadAction<IProduct>) => {
      const existing = state.products.find(
        (item: IProduct) => item._id === action.payload._id
      );
      if (existing && existing.quantity! > 1) {
        existing.quantity = existing.quantity! - 1;
        toast.warning(` Decrease to Cart SuccessFully`);
      } else {
        state.products = state.products.filter(
          (item: IProduct) => item._id !== action.payload._id
        );
        toast.error(` Deleted to Cart SuccessFully`, { icon: false });
      }
      localStorage.setItem("cartItem", JSON.stringify(state.products));
    },

    //==========
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter(
        (item: IProduct) => item._id !== action.payload._id
      );
      localStorage.setItem("cartItem", JSON.stringify(state.products));
      toast.error(`Deleted to Cart SuccessFully`, {
        icon: false,
      });
    },
    clearCart: (state) => {
      state.products = [];
      localStorage.removeItem("cartItem");
    },
  },
});
export const { addToCart, removeOne, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;

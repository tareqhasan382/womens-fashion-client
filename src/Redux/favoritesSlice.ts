import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IProduct {
  _id: string;
  name: string;
  size?: string;
  images: string[];
  price: number;
  color?: number;
  discountedPrice: number;
}

interface FavoritesState {
  favoriteProducts: IProduct[];
}

export const getFromLocalStorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return [];
  }
  const storedData = localStorage.getItem(key);
  return storedData ? JSON.parse(storedData) : [];
};

const initialState: FavoritesState = {
  favoriteProducts: getFromLocalStorage("favorites"),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      console.log("product:", product);
      // Check if the product is already in the favorites
      const existingIndex = state.favoriteProducts.findIndex(
        (p) => p._id === product._id
      );

      if (existingIndex >= 0) {
        // If product is found, remove it from favorites
        state.favoriteProducts.splice(existingIndex, 1);
      } else {
        // If product is not found, add it to favorites
        state.favoriteProducts.push(product);
      }

      // Update localStorage
      localStorage.setItem("favorites", JSON.stringify(state.favoriteProducts));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;

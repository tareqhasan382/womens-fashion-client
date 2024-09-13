import React from "react";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { CalculateDiscountPrice } from "../utils/CalculateDiscountPrice";
import { addToCart } from "../Redux/cardSlice";
import { toggleFavorite } from "../Redux/favoritesSlice";

const FavoritesCart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { favoriteProducts } = useAppSelector((state) => state.favorite);

  return (
    <div className=" my-10 lg:px-24 px-2 ">
      {favoriteProducts.length ? (
        <div>
          {favoriteProducts.map((item) => (
            <div key={item._id} className=" flex gap-6 items-center ">
              <img
                src={item.images[0]}
                alt="favoriteProducts image"
                className=" w-[120px] h-auto "
              />
              <div>
                <h1>{item.name} </h1>
                <h1>
                  BDT
                  <span className=" px-2 ">
                    {CalculateDiscountPrice(item.price, item.discountedPrice)}
                  </span>
                  <span className=" pl-10 line-through">
                    {" "}
                    {item.discountedPrice > 0 && item.price}
                  </span>
                </h1>
                <button
                  onClick={() => dispatch(addToCart(item))}
                  className=" bg-black text-white font-semibold px-5 py-2 rounded-full mt-2 "
                >
                  Add to card
                </button>
                <button
                  onClick={() => dispatch(toggleFavorite(item))}
                  className=" bg-black text-red-500 font-semibold px-5 py-2 rounded-full mt-2 ml-3 "
                >
                  x
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1 className=" font-semibold text-center ">
            Nothing added to Favorite
          </h1>
        </div>
      )}
    </div>
  );
};

export default FavoritesCart;

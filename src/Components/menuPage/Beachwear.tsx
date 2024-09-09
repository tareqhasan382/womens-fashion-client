import React, { useState } from "react";
import loadingImage from "../../assets/loading.gif";
import { useProductsQuery } from "../../Redux/products/productApi";
import { CalculateDiscountPrice } from "../../utils/CalculateDiscountPrice";
import { useAppDispatch } from "../../Redux/hooks";
import { BiShoppingBag } from "react-icons/bi";
import { addToCart } from "../../Redux/cardSlice";
type QueryParams = {
  limit: number;
  page: number;
  filterField?: string;
};
const Beachwear: React.FC = () => {
  const dispatch = useAppDispatch();
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [limit] = useState<number>(20);
  const [page] = useState<number>(1);
  const [filterField] = useState<string>("Beachwear");

  const query: QueryParams = {
    limit,
    page,
    filterField,
  };
  const { data, isLoading } = useProductsQuery(query);

  const handleMouseEnter = (productId: string) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };
  return (
    <>
      {isLoading ? (
        <div className=" w-full h-full flex items-center justify-center mx-auto">
          <img src={loadingImage} alt="loading" />
        </div>
      ) : (
        <div className=" w-full h-full flex flex-col items-center justify-center mx-auto mb-20 ">
          <h1 className=" uppercase text-xl font-bold my-5 ">Beachwear</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 my-16">
            {data?.data && data.data.length > 0 ? (
              data.data.map((product) => (
                <div
                  key={product._id}
                  className=" relative bg-white shadow-lg shadow-slate-300 rounded-lg transform transition-transform hover:scale-105 p-2 "
                  onMouseEnter={() => handleMouseEnter(product._id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-80 object-contain rounded-md mb-4"
                  />
                  <h1 className="text-lg font-bold text-gray-800 text-center ">
                    {product.name}
                  </h1>
                  <div className=" flex flex-row items-center justify-around ">
                    <p className="text-red-500 font-semibold mt-2">
                      BD
                      {CalculateDiscountPrice(
                        product.price,
                        product.discountedPrice
                      )}
                    </p>
                    <p className="line-through lg:text-lg text-sm lg:font-semibold font-normal text-gray-500">
                      BD {product.price.toFixed(2)}
                    </p>
                  </div>
                  {/* Show cart only when this product is hovered */}
                  {hoveredProductId === product._id && (
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className=" duration-300 w-[90%] h-[50px] absolute right-2 bg-gray-800 text-white p-2 rounded-md flex items-center justify-center font-bold text-center bottom-28  "
                    >
                      <BiShoppingBag size={24} className=" mx-2 " /> Add to Cart
                    </button>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center text-gray-500 col-span-full">
                <h1>No products available</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Beachwear;

// Beachwear;

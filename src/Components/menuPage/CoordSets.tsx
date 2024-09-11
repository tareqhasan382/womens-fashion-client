import React, { useState } from "react";
import loadingImage from "../../assets/loading.gif";
import { useProductsQuery } from "../../Redux/products/productApi";
import { CalculateDiscountPrice } from "../../utils/CalculateDiscountPrice";
import { useAppDispatch } from "../../Redux/hooks";
import { BiHeart, BiShoppingBag } from "react-icons/bi";
import { addToCart } from "../../Redux/cardSlice";
import { Link } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";
type QueryParams = {
  limit: number;
  page: number;
  filterField?: string;
};
const CoordSets: React.FC = () => {
  const dispatch = useAppDispatch();
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [limit] = useState<number>(20);
  const [page] = useState<number>(1);
  const [filterField] = useState<string>("coordsets");

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
          <h1 className=" uppercase text-xl font-bold my-5 ">Co ord Sets</h1>
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
                  <div className="absolute right-4 block top-5">
                    {hoveredProductId === product._id && (
                      <div className=" flex flex-col gap-2  ">
                        <button
                          onClick={() => dispatch(addToCart(product))}
                          className=" text-black hover:bg-gray-800 hover:text-white duration-300 p-3 rounded-full flex items-center justify-center font-bold right-0"
                        >
                          <BiShoppingBag size={24} />
                        </button>
                        <button className="text-black hover:bg-gray-800 hover:text-white duration-300 p-3 rounded-full flex items-center justify-center font-bold right-0">
                          <BiHeart size={24} />
                        </button>
                        <Link to={`/details/${hoveredProductId}`}>
                          {" "}
                          <button className="text-black hover:bg-gray-800 hover:text-white duration-300 p-3 rounded-full flex items-center justify-center font-bold right-0">
                            <BsFillEyeFill size={24} />
                          </button>
                        </Link>
                      </div>
                    )}
                  </div>
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

export default CoordSets;

//CoordSets;

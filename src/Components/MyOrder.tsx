/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useOrdersQuery } from "../Redux/order/orderApi";
import loadingImage from "../assets/loading.gif";
import { useAppSelector } from "../Redux/hooks";
import { Link } from "react-router-dom";

const MyOrder: React.FC = () => {
  const auth = useAppSelector((state) => state.auth);
  const { data, isLoading, isError } = useOrdersQuery(undefined);

  return (
    <>
      {isLoading ? (
        <div className=" w-full h-full flex items-center justify-center mx-auto">
          <img src={loadingImage} alt="loading" />
        </div>
      ) : (
        <div className=" my-10 lg:mx-20 ">
          <h1 className=" text-center font-bold text-2xl ">MyOrder page</h1>
          {auth?.user ? (
            <div className=" my-10  ">
              {data?.data.length ? (
                <div>
                  {data?.data.map((item: any) => (
                    <div
                      key={item._id}
                      className=" p-5 flex flex-col gap-3 rounded "
                    >
                      <h1>
                        <span className=" font-semibold capitalize ">
                          status:
                        </span>
                        <span
                          className={`px-3 py-1 ${
                            item.status === "Paid" && "bg-green-600 rounded"
                          } ${item.status === "Cancelled" && "bg-rose-600"} ${
                            item.status === "Pending" && "bg-orange-600 rounded"
                          } text-white uppercase`}
                        >
                          {item?.status}
                        </span>
                      </h1>

                      <div className=" flex flex-wrap gap-4 ">
                        {item?.products &&
                          item?.products.map((product: any) => (
                            <div key={product._id}>
                              <img
                                src={product?.product?.images[0]}
                                alt="product image"
                                className=" w-[80px] h-auto object-contain "
                              />
                              <h1>{product?.product?.name} </h1>
                              <h1>
                                <span className=" font-semibold capitalize ">
                                  BDT:
                                </span>
                                {product?.product?.price}{" "}
                              </h1>
                              <h1>
                                <span className=" font-semibold capitalize ">
                                  quantity:
                                </span>{" "}
                                {product?.quantity}{" "}
                              </h1>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className=" my-10 w-full h-auto flex flex-col items-center justify-center ">
                  {!isError && (
                    <h1 className=" text-2xl font-bold ">Order is empty</h1>
                  )}
                  {isError && (
                    <h1 className=" text-2xl font-bold text-red-500 ">
                      Unauthorized
                    </h1>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className=" w-full h-full flex items-center justify-center mx-auto my-10 ">
              <Link
                to="/login"
                className=" w-[220px] h-[40px] bg-blue-500 text-white hover:bg-blue-400 duration-500 text-center flex items-center justify-center rounded text-xl "
              >
                Please Login
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default MyOrder;

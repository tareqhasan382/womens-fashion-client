import React, { useState } from "react";
import { useAppSelector } from "../Redux/hooks";
import { CalculateDiscountPrice } from "../utils/CalculateDiscountPrice";
import { toast } from "react-toastify";
import { IProduct } from "../Redux/cardSlice";
import { useCreatePaymentMutation } from "../Redux/payment/paymentApi";
import { Link } from "react-router-dom";

const Checkout: React.FC = () => {
  const [createPayment] = useCreatePaymentMutation();
  const { products } = useAppSelector((state) => state.cart);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const { user } = useAppSelector((state) => state.auth);
  const totalPrice: number = products
    .map((item: IProduct) => {
      // Ensure item.price is a string before using replace
      const numericPrice: number = CalculateDiscountPrice(
        item.price,
        item.discountedPrice
      ); // parseFloat(String(item.price));
      return item.quantity! * numericPrice;
    })
    .reduce(
      (accumulator: number, currentValue: number) => accumulator + currentValue,
      0
    );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !phone || !address) {
      return toast.error("required input field");
    }
    const data = {
      customer: { name, email, phone, address },
      products: products.map((item) => ({
        product: item._id,
        quantity: item.quantity,
      })),
      totalPrice: totalPrice,
    };

    const result = await createPayment(data);
    // console.log("result:", result);
    // console.log("result?.data?.data:", result?.data?.data);
    // console.log("result?.data?.status:", result?.data?.status);
    const paymentUrl = result?.data?.data;
    if (paymentUrl) {
      window.location.replace(paymentUrl);
    } else {
      return toast.error("Failed to retrieve payment URL");
    }

    // console.log(result?.data?.status);
  };
  return (
    <div className=" w-full h-full flex items-center justify-center mx-auto mt-10 ">
      <div className=" lg:w-1/2 w-full h-auto mx-auto py-5 px-2 ">
        <h1 className=" text-xl font-bold text-center my-2 ">Checkout</h1>
        <form
          onSubmit={handleSubmit}
          className=" p-5 w-full outline outline-gray-200 rounded "
        >
          <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-2 ">
            <input
              type="text"
              placeholder="your name"
              className=" w-full p-2 outline outline-black rounded "
              //   value={user.name}
              //   onChange={handleChange}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="your email"
              className=" w-full p-2 outline outline-black rounded "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone phone"
              className=" w-full p-2 outline outline-black rounded "
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="text"
              placeholder="Adress"
              className=" w-full p-2 outline outline-black rounded "
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <h1 className=" text-xl font-bold text-center my-2 capitalize mt-8 ">
            order summary
          </h1>
          <div className=" w-full h-auto outline outline-gray-200 rounded ">
            <div className=" w-full py-3 px-3 font-bold text-sm flex items-center justify-between bg-gray-200 ">
              <h1>product</h1>
              <h1>quantity</h1>
              <h1>price</h1>
            </div>
            <div>
              {products.map((product) => (
                <div
                  key={product._id}
                  className=" w-full py-3 px-3 font-bold text-sm flex items-center justify-between "
                >
                  <h1>{product.name}</h1>
                  <h1>{product.quantity}</h1>
                  <h1>
                    {CalculateDiscountPrice(
                      product.price,
                      product.discountedPrice
                    )}
                  </h1>
                </div>
              ))}
              <div className=" w-full h-[1px] bg-gray-200 m-2 "></div>
              <div className=" w-full flex items-center justify-between font-bold text-xl p-2 capitalize ">
                <h1>total price</h1>
                <h1>BD {totalPrice}</h1>
              </div>
              <div className=" w-full flex justify-between p-2 ">
                <div></div>

                {user ? (
                  <button
                    type="submit"
                    className=" my-2 px-4 rounded-md py-2 font-bold bg-green-600 text-white cursor-pointer  "
                  >
                    procced to payment
                  </button>
                ) : (
                  <Link to="/login">
                    <button className=" capitalize my-2 px-4 rounded-md py-2 font-bold bg-green-600 text-white cursor-pointer  ">
                      login now
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

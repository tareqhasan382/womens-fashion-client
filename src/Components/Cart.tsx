import { Link, useNavigate } from "react-router-dom";
import emptyCart from "../assets/emptyCart.png";
import {
  addToCart,
  IProduct,
  removeFromCart,
  removeOne,
} from "../Redux/cardSlice";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { BiMinusCircle, BiPlusCircle, BiTrash } from "react-icons/bi";
import { CalculateDiscountPrice } from "../utils/CalculateDiscountPrice";
interface CartPageProps {
  close: () => void;
}
const Cart: React.FC<CartPageProps> = ({ close }) => {
  //=======================Get data=================================
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { products } = useAppSelector((state) => state.cart);
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

  return (
    <div className="bg-white w-full min-h-full pb-20 mb-5 rounded ">
      <div className=" w-full flex flex-col ">
        {/* <h1 className=" text-lg font-bold ">Cart Page</h1> */}

        <div className=" flex flex-col h-auto justify-between gap-6 w-full ">
          {/*=============== single cart ===================*/}
          <div className=" h-auto flex flex-col w-full gap-2 ">
            {products.length <= 0 ? (
              <div className=" flex flex-col w-full ">
                <img
                  className="w-80 rounded-lg p-4 mx-auto"
                  src={emptyCart}
                  alt="emptyCart"
                />
                <h3 className=" uppercase text-lg font-bold ">
                  Your cart feels lonely.
                </h3>
                <article className=" justify-center py-4 ">
                  Your Shopping cart lives to serve. Give it purpose - fill it
                  with books , shop, electronics, etc. and make it happy.
                </article>
                <Link to="/">
                  <button className=" bg-black text-white text-lg font-bold px-6 py-2 rounded-md ">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            ) : (
              <div className=" gap-2 w-full p-1 ">
                {products.map((item: IProduct) => (
                  <div
                    key={item._id}
                    className=" bg-white duration-300 h-auto flex items-center justify-between outline rounded-md outline-1 outline-black "
                  >
                    <img
                      src={item?.images[0]}
                      alt="img"
                      className=" w-[70px] h-[70px] pl-2 "
                    />
                    <div className=" pl-2 flex flex-col ">
                      <p className="  ">
                        <span className=" font-normal ">{item.name} </span>
                      </p>
                      <p>
                        BD:
                        <span className="text-base font-bold">
                          {CalculateDiscountPrice(
                            item.price,
                            item.discountedPrice
                          )}
                        </span>
                      </p>
                      <p>
                        quantity:{" "}
                        <span className="text-base font-bold">
                          {item.quantity}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col p-2 gap-1 ">
                      <BiPlusCircle
                        onClick={() => dispatch(addToCart(item))}
                        size={30}
                        className="hover:text-green-400 text-green-500 cursor-pointer"
                      />

                      <BiMinusCircle
                        onClick={() => dispatch(removeOne(item))}
                        size={30}
                        className="hover:text-orange-300 text-orange-400 cursor-pointer"
                      />
                      <BiTrash
                        onClick={() => dispatch(removeFromCart(item))}
                        size={30}
                        className="hover:text-rose-400 text-red-500 cursor-pointer"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/*==================== Order Now ====================*/}
          {products.length > 0 && (
            <div className=" top-0 w-full p-1">
              <div className=" relative top-0  flex flex-col text-lg items-center justify-center py-2 gap-5 ">
                {/* <p className=" ">Order Now</p> */}
                <p>
                  <span className=" font-bold ">{`Total Price: $${totalPrice.toFixed(
                    2
                  )}`}</span>
                </p>

                <button
                  onClick={() => {
                    navigate("/checkout");
                    close();
                  }}
                  className=" pl-2 w-full rounded-md h-10 font-bold bg-black text-white cursor-pointer "
                >
                  proceed checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

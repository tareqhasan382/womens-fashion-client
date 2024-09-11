import React from "react";
import Cart from "./Cart";

interface CartPageProps {
  open: boolean;
  onClose: () => void;
}

const CartPage: React.FC<CartPageProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-end bg-black bg-opacity-50">
      <div className="bg-white text-black w-[350px] h-screen shadow-lg p-5 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black font-bold text-xl"
        >
          &times;
        </button>
        <h1 className="text-2xl font-bold mb-4">My Bag</h1>
        <div className="flex flex-col w-full h-[90%] ">
          <div className="flex-1 select-none overflow-y-scroll no-scrollbar ">
            {/* Cart items content */}
            {/* <p className="p-2">Cart is empty</p> */}
            <Cart close={onClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

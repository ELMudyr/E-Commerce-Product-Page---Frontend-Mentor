import React from "react";
import Product from "../assets/image-product-1-thumbnail.jpg";
import Clear from "../assets/icon-delete.svg";

interface CartItem {
  id: number;
  quantity: number;
}

interface CartProps {
  onClose: () => void;
  quantity: number;
  cartItems: CartItem[];
}

const Cart: React.FC<CartProps> = ({ onClose, cartItems }) => {
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.quantity * 125, 0);
  };

  const resetCart = () => {};

  return (
    <div className="fixed  top-[4rem] right-[10%] w-[20rem] bg-white px-5 py-7 rounded-xl shadow-lg ">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-lg font-[700]">Cart</h1>
        <button className="text-primary-Orange" onClick={onClose}>
          Close
        </button>
      </div>
      <div className="flex gap-3 items-center my-7">
        <img
          src={Product}
          alt="Product"
          className="object-contain w-12 rounded"
        />
        <div>
          <h1 className="text-sm text-Neutral-DarkGrayishBlue">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-sm text-Neutral-DarkGrayishBlue">
            $125.00 x {cartItems.length}{" "}
            <span className="font-[700] text-Neutral-VeryDarkBlue">
              ${getTotalPrice()}
            </span>
          </p>
        </div>
        <img
          className="object-contain w-fit cursor-pointer"
          onClick={resetCart}
          src={Clear}
          alt="clear"
        />
      </div>
      <button className="bg-primary-Orange gap-3 ] hover:opacity-70 text-white font-[700] justify-center items-center py-3 flex rounded-lg m-auto w-full">
        Checkout
      </button>
    </div>
  );
};

export default Cart;

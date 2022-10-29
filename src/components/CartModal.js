import { useEffect, useState } from "react";
import { CardCart } from "./CardCart";

export const CartModal = ({
  visible,
  onCloseModalCart,
  selectedProduct,
  onPlusQty,
  onMinusQty,
  total,
  onDeleteProduct,
}) => {
  return (
    <div
      className="box-content w-[30.5rem] h-[45rem] fixed bottom-24 right-1 z-50 "
      hidden={!visible}
    >
      <div className=" h-full bg-gray-200  m-5 rounded-lg">
        <div className="flex justify-between p-2">
          <p className="text-slate-600">Cart</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              onCloseModalCart();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <hr className=" bg-gray-100 h-0.5" />
        <div className="overflow-y-scroll   w-full h-[39.5rem] ">
          {selectedProduct.map((el, i) => (
            <CardCart
              product={el}
              onPlusQty={onPlusQty}
              key={i}
              onMinusQty={onMinusQty}
              onDeleteProduct={onDeleteProduct}
            />
          ))}
        </div>
        <hr className=" bg-gray-100 h-0.5" />
        <div className=" pl-2 flex justify-between ">
          <p className=" my-auto  text-slate-600 ">
            Total price : <span>${total}</span>
          </p>
          <button
            type="button"
            className=" px-2 py-1.5 rounded-md  bg-[#9657f3] hover:bg-[#6a35b9] m-1 text-white"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

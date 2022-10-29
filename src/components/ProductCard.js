export const ProductCard = ({ product, onAddProduct, disabled }) => {
  return (
    <div className="flex flex-col justify-between border-2 rounded-md drop-shadow-2xl bg-white">
      <div className=" p-5">
        <img src={product?.thumbnail} className=" md:max-h-40 mx-auto" />
      </div>
      <div>
        <hr className=" bg-gray-100 h-0.5" />
        <div className="px-5 text-left">
          <h1 className=" text-slate-700 text-xl mt-2">{product?.title}</h1>
          <p className=" text-slate-400 text-md mt-1">
            {product?.description?.slice(0, 60)}...
          </p>
          <p className=" text-slate-400 text-md my-3">
            Price :{" "}
            <span className="font-bold text-slate-500">${product?.price}</span>
          </p>
        </div>
        <div className="text-left mt-2 flex justify-between px-5 pb-5">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              onAddProduct(product);
            }}
            className="text-[#9657f3] hover:text-[#6a35b9] flex gap-2 font-semibold cursor-pointer disabled:text-gray-400"
            disabled={disabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            ADD TO CART
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

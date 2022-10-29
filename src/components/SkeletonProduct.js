export const SkeletonProduct = () => {
  return (
    <div className="flex flex-col justify-between border-2 rounded-md drop-shadow-2xl bg-white">
      <div className=" p-5">
        <div className=" bg-slate-400 box-content w-full h-64 animate-pulse rounded-sm mt-2"></div>
      </div>
      <div>
        <hr className=" bg-gray-100 h-0.5" />
        <div className="px-5 text-left">
          <div className=" bg-slate-400 box-content w-40 h-7 animate-pulse rounded-sm mt-2"></div>
          <div className=" bg-slate-400 box-content w-full h-3 animate-pulse rounded-sm mt-2"></div>
          <div className=" bg-slate-400 box-content w-full h-3 animate-pulse rounded-sm mt-2"></div>

          <div className="my-auto bg-slate-400 box-content w-20 h-4 animate-pulse rounded-sm mt-2"></div>
        </div>
        <div className="text-left mt-2 flex justify-between px-5 pb-5 ">
          <div className=" bg-slate-400 box-content w-32 h-7 animate-pulse rounded-sm mt-2"></div>

          <div className=" bg-slate-400 box-content w-10 h-7 animate-pulse rounded-sm mt-2"></div>
        </div>
      </div>
    </div>
  );
};

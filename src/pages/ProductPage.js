import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../components/ProductCard";
import { getProduct } from "../stores/actions";
import { SkeletonProduct } from "../components/SkeletonProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartModal } from "../components/CartModal";
import { FloatingActionButtonCart } from "../components/FloatingActionButtonCart";
export const ProductPage = () => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [visibleCart, setVisibleCart] = useState(false);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    getTotalPrice();
  }, [selectedProduct]);
  const getTotalPrice = () => {
    let result = 0;
    selectedProduct.forEach((element) => {
      result += element.qty * element.price;
    });
    setTotal(result);
  };
  const addCart = (product) => {
    toast.success(`Success add ${product.title} to 🛒`, {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    product.qty = 1;
    setSelectedProduct([...selectedProduct, product]);
    getTotalPrice();
  };
  const deleteProduct = (id) => {
    let newArray = selectedProduct.filter((el) => el.id !== id);
    setSelectedProduct(newArray);
    getTotalPrice();
  };
  const plusQty = (id) => {
    const gotcha = selectedProduct.find((el) => el.id == id);
    gotcha.qty++;
    setSelectedProduct(selectedProduct);
    getTotalPrice();
  };
  const minQty = (id) => {
    const gotcha = selectedProduct.find((el) => el.id == id);
    gotcha.qty--;
    setSelectedProduct(selectedProduct);
    getTotalPrice();
  };
  const { products, loading } = useSelector((state) => state.productReducer);
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  if (loading) {
    return (
      <div className=" m-5  ">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
          <SkeletonProduct />
          <SkeletonProduct />
          <SkeletonProduct />
          <SkeletonProduct />
          <SkeletonProduct />
          <SkeletonProduct />
          <SkeletonProduct />
          <SkeletonProduct />
        </div>
      </div>
    );
  }
  return (
    <Fragment>
      <CartModal
        onPlusQty={plusQty}
        onMinusQty={minQty}
        visible={visibleCart}
        selectedProduct={selectedProduct}
        onCloseModalCart={() => {
          setVisibleCart(false);
        }}
        total={total}
        onDeleteProduct={deleteProduct}
      />

      <div className="flex m-5 justify-center ">
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-2 ">
          {products.map((el, i) => {
            const findInCart = selectedProduct.find(
              (element) => el.id == element.id
            );
            return (
              <ProductCard
                product={el}
                key={i}
                onAddProduct={addCart}
                disabled={findInCart ? true : false}
              />
            );
          })}
        </div>
      </div>
      <FloatingActionButtonCart
        selectedProduct={selectedProduct}
        onShowModalCart={() => {
          setVisibleCart(!visibleCart);
        }}
      />
    </Fragment>
  );
};

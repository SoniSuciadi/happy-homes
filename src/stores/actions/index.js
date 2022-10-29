import axios from "axios";
export const getProduct = () => {
  return async (dispatch) => {
    dispatch({
      type: "ChangeLoading",
      payload: true,
    });
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ChangeLoading",
      payload: false,
    });
    dispatch({
      type: "Get/Product",
      payload: data.products,
    });
  };
};

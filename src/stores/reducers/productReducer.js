const initialValue = {
  products: [],
  loading: false,
};

const productReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "Get/Product":
      return {
        ...state,
        products: action.payload,
      };
    case "ChangeLoading":
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;

const initialState = {
  products: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "GET_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

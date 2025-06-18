const initialState = {
  products: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
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
    case "ADD_TO_CART":
      const res = state.cart.find((item) => item.id === action.payload._id);
      if (!res) {
        let result = [...state.cart, action.payload];
        localStorage.setItem("cart", JSON.stringify(result));
        return { ...state, cart: result };
      }
    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (el) => el._id !== action.payload._id
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    default:
      return state;
  }
};

/* eslint-disable no-fallthrough */
/* eslint-disable no-case-declarations */
const initialState = {
  products: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  dark: true,
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
    case "INCREMENT_QUANTITY":
      const incrementedCart = state.cart.map((el) => {
        if (el._id === action.payload._id) {
          return { ...el, quantity: el.quantity + 1 };
        }
        return el;
      });
      localStorage.setItem("cart", JSON.stringify(incrementedCart));
      return { ...state, cart: incrementedCart };
    case "DECREMENT_QUANTITY":
      const decrementedCart = state.cart.map((el) => {
        if (el._id === action.payload._id) {
          return { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 };
        }
        return el;
      });
      localStorage.setItem("cart", JSON.stringify(decrementedCart));
      return { ...state, cart: decrementedCart };
    case "DARK_MODE":
      return {
        ...state,
        dark: !state.dark,
      };
    default:
      return state;
  }
};

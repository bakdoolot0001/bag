const initialState = {
  products: [],
  cart: JSON.parse(localStorage.getItem("cart")) || [],
  favorite: JSON.parse(localStorage.getItem("favorite")) || [],
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
    case "ADD_TO_FAVORITE":
      const result = state.favorite.find((el) => el.id === action.payload._id)
      if (!result) {
        let resultFav = [...state.favorite, action.payload];
        localStorage.setItem("favorite", JSON.stringify(resultFav));
        return { ...state, favorite: resultFav };
      }
    case "REMOVE_FROM_FAVORTIE":
      const updatedFavorite = state.favorite.filter(
        (el) => el._id !== action.payload._id
      );
      localStorage.setItem("favorite", JSON.stringify(updatedFavorite));
      return { ...state, favorite: updatedFavorite };
    default:
      return state;
  }
};

// 1. spread data into all components
import { createContext, useReducer } from "react";

// 2. default value of context
const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

// 5. reducer function
function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    // check if we already have the item in item array
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    // if the item already exists
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      // update quantity property
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    // if there is not item in items array
    else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    // ... remove an item from the state
    // update items in immutable way
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    // check the quantity of the item

    const updatedItems = [...state.items];
    // if quantity is equal to 1, remove the item
    if (existingCartItem.quantity === 1) {
      // remove an item at the index
      updatedItems.splice(existingCartItemIndex, 1);
    } // if quantity is bigger than 1, reduce the quantity
    else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

// 3. wrap around components and make context available to them and actural data management and state management
export function CartContextProvider({ children }) {
  // 4. manage state and make complex state simpler and make it easy to move state management logic out of the functoin
  // 6. connect cart logic to different components
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] }); // initial state value

  // 7. pass cart context state to cartContext provider component
  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;

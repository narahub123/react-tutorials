// import { forwardRef, useImperativeHandle, useRef, useContext } from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Cart from "./Cart";
// import { CartContext } from "../store/shopping-cart-context";

const CartModal = forwardRef(function Modal(
  // { cartItems, onUpdateCartItemQuantity, title, actions },
  { title, actions },
  ref
) {
  const dialog = useRef();

  // const { items, updateItemQuantity } = useContext(CartContext);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      {/* wrap the component actually not necessary  */}
      {/* <Cart items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity} /> */}
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default CartModal;

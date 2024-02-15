// use modal component from anywhere component tree but always inject dialog when it's visible
// in speific area of real dom that developer control upfront

import { useEffect, useRef } from "react";
// 1. import createPortal
import { createPortal } from "react-dom";

export default function Modal({ children, open, className = "" }) {
  // 3. open prop controls if the dialog is open or not
  const dialog = useRef();

  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    }
  }, [open]);

  // 2. create portal createPortal(rendered component, where the component is rendered)
  return createPortal(
    // 4. control open prop
    // 4-1 built property make grey area behind the modal and that protect interacting whilst the dialog is open
    // <dialog open={open}>
    // 4-2 forwordRef()
    // 4-3 useEffect() and useRef()
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

import { forwardRef, useImperativeHandle, useRef } from "react";
// import useRef bcoz we need a separate ref for reaching out to the dialog
// bcoz the idea is to detach the dialog element, which is used in the result modal
// component from any other outer components
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  const dialog = useRef();
  // to define properties and methods that should be accessible on the component from outside the component
  // useImperativeHanle works with forwardRef
  // first argument is a value from forwardRef
  // second argument must be a function that return an object which groups all the properties and methods
  // that should be exposed by the component to other components
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    // dialog by default is invisible
    <dialog ref={dialog} className="result-modal">
      <h2>You {result} </h2>
      <p>
        The target time was <strong>{targetTime}</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;

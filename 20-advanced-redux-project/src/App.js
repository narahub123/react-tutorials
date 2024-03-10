import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"; // useSelector : extract data from Redux

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { uiActions } from "./store/ui-slice"; // for dispatch
import Notification from "./components/UI/Notification";

// 5.1 avoid sending cart when it runs for the first time
let isInitial = true;

function App() {
  // 3.1 dispatch show notification action
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  // 4.1use notification state
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    // 1.1 asynchronous operation to get response
    const sendCartData = async () => {
      // 3.2 loading state notification
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!",
        })
      );

      const response = await fetch(
        "https://realtime-demo-51a6e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      // 1.2 validation
      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      // 3.3 success state notification
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    };

    // 5.2 prevent sending data for the first time
    if (isInitial) {
      isInitial = false;
      return;
    }

    // the reason why the error code out of sendata is due to handling all kind of errors
    // 3.4 error state notification
    sendCartData().catch((error) => {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    });
    // 3.5 add dependency
  }, [cart, dispatch]);

  return (
    // 4.2 add notification component to use it conditionally
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

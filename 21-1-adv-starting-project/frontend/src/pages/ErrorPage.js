import React from "react";
import { useRouteError } from "react-router-dom";

import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError(); // give an error object
  // the shape of the object now depends on whether you threw a response
  // or any other kind of object or data

  // error.stauts; // in the case of throwing response

  // generic error handling code
  let title = "An error occurred!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
};

export default ErrorPage;

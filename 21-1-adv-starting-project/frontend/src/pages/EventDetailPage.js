import React from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <>
      <h1>Event Detail Page</h1>
      {params.id}
    </>
  );
};

export default EventDetailPage;

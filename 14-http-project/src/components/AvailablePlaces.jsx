import { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false); // loading state
  const [availablePlaces, setAvailablePlaces] = useState([]); // data state
  const [error, setError] = useState(); // error state

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        // statuscode 200, 300 error 400, 500
        if (!response.ok) {
          throw new Error("Failed to fetch places");
        }

        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message:
            error.message || "Could not fetch places, please try again later",
        });
      }

      setIsFetching(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="An Error occurred!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

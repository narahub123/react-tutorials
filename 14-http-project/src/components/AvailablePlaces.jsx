import { useState, useEffect } from "react";
import Places from "./Places.jsx";

const places = localStorage.getItem("places");

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);

  // useEffect function executes right after component funtions executes
  // only if the dependencies changed
  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((response) => {
        return response.json();
      })
      .then((resData) => {
        setAvailablePlaces(resData.places); // it causes the component function executes again
      });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

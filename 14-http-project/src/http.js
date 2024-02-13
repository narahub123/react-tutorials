export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  // statuscode 200, 300 error 400, 500
  if (!response.ok) {
    throw new Error("Failed to fetch places");
  }

  return resData.places;
}

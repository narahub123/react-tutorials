import { useEffect, useState } from "react";

// load meals data from backend
export default function Meals() {
  // 4. set up states: initially the meals should be an empty array
  const [loadedMeals, setLoadMeals] = useState([]);

  // 8. call fetchMeal function using useEffect to avoid infinite loop
  // call a function after rendering component
  // allow to define dependencies array that control when the side effect function will run
  useEffect(() => {
    // 1. fetch meals data from backend
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        //...
      }

      // 2. extract json data and convert to javascript object and values
      const meals = await response.json();

      // 5. after loading the meals, update loadMeals state
      setLoadMeals(meals);
    }

    // 7 can't call it immediately bcoz it may cause infinite loop
    fetchMeals();
  }, []);
  // side effect runs only if the dependencies change => prevent infinite loop

  // 3. meals data is not available instantly when the component function executes
  // -> we need state
  // 6. output meals data
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
}

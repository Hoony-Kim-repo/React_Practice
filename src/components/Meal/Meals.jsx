import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/meals`);

    if (!response.ok) {
      return;
    }

    const data = await response.json();

    setMeals(data);
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;

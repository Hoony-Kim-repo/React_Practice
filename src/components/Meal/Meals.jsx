import useHttp from "../../hooks/useHttp";
import Error from "../Error/Error";
import MealItem from "./MealItem";

const requestConfig = {};

const Meals = () => {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp(`${import.meta.env.VITE_SERVER_URL}/meals`, requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;

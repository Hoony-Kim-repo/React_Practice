import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

const MealItem = (prop) => {
  const { meal } = prop;

  return (
    <li className="meal-item" key={meal.id}>
      <article>
        <img
          src={`${import.meta.env.VITE_SERVER_URL}/${meal.image}`}
          alt={meal.name}
        />

        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>

        <p className="meal-item-actions">
          <Button>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;

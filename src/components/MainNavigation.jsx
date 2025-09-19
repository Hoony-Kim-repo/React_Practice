import { NavLink } from "react-router-dom";
import css from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? css.active : undefined)}
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

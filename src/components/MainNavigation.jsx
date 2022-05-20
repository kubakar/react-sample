import { Link } from "react-router-dom";
import css from "./MainNavigation.module.css"; // in JSX, you import css

import { useContext } from "react";
import FavsCtx from "../store/favs-ctx";

function MainNaviagation() {
  const favsCtx = useContext(FavsCtx); // subscribe / start reading

  return (
    // css elements are properties now (scoped to this component)
    <header className={css.header}>
      <div className={css.logo}>React Headers</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites
              <span className={css.badge}>{favsCtx.totalFavorites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNaviagation;

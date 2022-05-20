import css from "./Meetup.module.css";
import Card from "../ui/Card";

import { useContext } from "react";
import FavsCtx from "../../store/favs-ctx";

// https://reactjs.org/docs/hooks-reference.html#usecontext
// useContext(MyContext) only lets you read the context and subscribe to its changes.
// You still need a <MyContext.Provider> above in the tree to provide the value for this context.
function MeetupItem(props) {
  const favsCtx = useContext(FavsCtx); // subscribe / start reading
  const itemIsFavorite = favsCtx.checkIfFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) favsCtx.removeFavorite(props.id);
    else
      favsCtx.addFavorite({
        id: props.id,
        image: props.image,
        title: props.title,
        address: props.address,
        description: props.description,
      });
  }

  return (
    <li className={css.item}>
      <Card>
        <div className={css.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={css.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={css.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove" : "Add"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;

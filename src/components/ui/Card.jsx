import css from "./Card.module.css";

// wrapper (takes content inside)
function Card(props) {
  return <div className={css.card}>{props.children}</div>;
}

export default Card;

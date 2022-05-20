import css from "./Meetup.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={css.list}>
      {props.items.map((item) => (
        <MeetupItem
          key={item.id} // needed for list element
          id={item.id}
          image={item.image}
          title={item.title}
          address={item.address}
          description={item.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;

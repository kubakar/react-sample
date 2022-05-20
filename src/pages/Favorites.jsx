import { useContext } from "react";
import FavsCtx from "../store/favs-ctx";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favsCtx = useContext(FavsCtx); // subscribe / start reading

  let content;

  content =
    favsCtx.totalFavorites === 0 ? (
      <p>No meetups...</p>
    ) : (
      <MeetupList items={favsCtx.favorites} />
    );

  return (
    // taken from context
    <div>
      <h1>FavoritesPage</h1>

      {content}
    </div>
  );
}

export default FavoritesPage;

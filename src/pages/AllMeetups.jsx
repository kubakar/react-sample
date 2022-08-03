import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

const getJSON = function (url, errorMsg = "Something went wrong...") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// data is mapped into component list
// let loadedMeetups = []; // alternative with global data

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const url =
    "https://api-test-b97d6-default-rtdb.europe-west1.firebasedatabase.app/meetups.json";

  useEffect(() => {
    setIsLoading(true); // next call
    getJSON(url)
      .then((data) => {
        const newData = Object.keys(data).map((k) => ({
          id: k,
          ...data[k],
        }));
        console.log(newData);

        setIsLoading(false); // fetching done
        // loadedMeetups = [...newData]; // alternative with global data
        setLoadedMeetups(newData);
      })
      .catch((err) => {
        setIsLoading(false);
        console.warn(err);
        throw new Error("Meetups fetch error"); // HTTP error
      });
  }, []); // 2nd arg - array of dependecies (when to execute)

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <div>
      <div>
        <h1>All Meetups</h1>
        {/* {DUMMY_DATA.map((entry) => {
            return <li key={entry.id}>{entry.title}</li>;
          })} */}
        <MeetupList items={loadedMeetups} />
      </div>
    </div>
  );
}

export default AllMeetupsPage;

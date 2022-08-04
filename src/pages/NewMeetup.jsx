import { useEffect, useState } from "react";
import NewMeetupForm from "../components/meetups/NewMeetUpForm";
import { useNavigate } from "react-router-dom";
import Todo from "../components/Todo";

function NewMeetupPage() {
  let navigate = useNavigate();

  const addMeetupHandler = function (data) {
    // send HTTP req.
    console.log(data);

    const url =
      "https://api-test-b97d6-default-rtdb.europe-west1.firebasedatabase.app/meetups.json";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((result) => {
        navigate("/", { replace: true });
      })
      .catch((e) => console.warn(e)); // navigate to different page when data is fetched
  };

  const [counter, setCounter] = useState({ value: 0, trigger: false });

  useEffect(() => {
    setCounter({
      value: +document.getElementById("qwe").childElementCount,
      trigger: false,
    }); // init

    console.log(counter);

    // cleanup function runs before each execution except the first one!
    return () => {
      console.warn("USE_EFFECT CLEANUP");
    };
  }, [counter.trigger]); // will execute every time counter trigger is changed

  return (
    <div>
      <h1>NewMeetupPage</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      <br />
      <hr />
      <div id="qwe">
        <h1>My TodoCards -{` ${counter.value - 1}`}</h1>
        <Todo text="React" newId="R" onAction={setCounter} />
        <Todo text="Angular" newId="A" onAction={setCounter} />
        <Todo text="Vue" newId="V" onAction={setCounter} />
      </div>
    </div>
  );
}

export default NewMeetupPage;

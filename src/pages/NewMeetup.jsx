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

  return (
    <div>
      <h1>NewMeetupPage</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
      <br />
      <hr />
      <div>
        <h1>My Todos</h1>
        <Todo text="React" newId="R" />
        <Todo text="Angular" newId="A" />
        <Todo text="Vue" newId="V" />
      </div>
    </div>
  );
}

export default NewMeetupPage;

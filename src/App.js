import { Route, Routes, useRoutes } from "react-router-dom";
import React from "react";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNaviagation from "./components/MainNavigation";

// const App = () => {
//   let routes = useRoutes([
//     { path: "/", element: <AllMeetupsPage /> },
//     { path: "/new-meetup", element: <NewMeetupPage /> },
//     { path: "/favorites", element: <FavoritesPage /> },
//     // ...
//   ]);
//   return routes;
// };

function App() {
  return (
    <div>
      <MainNaviagation />
      <div className="narrow">
        <Routes>
          <Route path="/" element={<AllMeetupsPage />}></Route>
          <Route path="/new-meetup" element={<NewMeetupPage />}></Route>
          <Route path="/favorites" element={<FavoritesPage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

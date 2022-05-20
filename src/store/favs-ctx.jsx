import { createContext, useState } from "react";

// React Componet without initial value
// defaultValue argument is only used when a component does not have a matching Provider above it in the tree
// https://stackoverflow.com/questions/49949099/react-createcontext-point-of-defaultvalue
const FavsCtx = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: () => {
    console.log("No <Provider> above in the tree!");
  }, // handler methods added
  removeFavorite: () => {
    console.log("No <Provider> above in the tree!");
  },
  checkIfFavorite: () => {},

  // methods can be added to help autocompletion with IDE
}); // React Componet with initial value

// updating context values (with 'value' prop) and providing it to other components (by wrapping)
// React Component
export function FavsCtxProvider(props) {
  const [stateFavorites, setStateFavorites] = useState([]);

  function addFavsHandler(newEntry) {
    // context modifiers methods

    // passing a callback will guarantee proper order of execution if you mutate/depend on prev. state
    // callback argument is current state
    setStateFavorites((prevFavs) => {
      return [...prevFavs, newEntry];
    });
  }

  function removeFavsHandler(entryId) {
    setStateFavorites((prevFavs) => {
      return prevFavs.filter((e) => e.id !== entryId);
    });
  }

  function itemIsFavHandler(entryId) {
    return stateFavorites.some((meetup) => meetup.id === entryId);
  }

  // passed to children elements
  const updatedContext = {
    favorites: stateFavorites,
    totalFavorites: stateFavorites.length,
    addFavorite: addFavsHandler, // handler methods added
    removeFavorite: removeFavsHandler,
    checkIfFavorite: itemIsFavHandler,
  };

  return (
    <FavsCtx.Provider value={updatedContext}>{props.children}</FavsCtx.Provider>
  );
}

export default FavsCtx;
// 2 things exported : Context Provider & Context itself

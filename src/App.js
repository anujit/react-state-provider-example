import React from "react";
import useStore, { StoreProvider } from "./useStore";
import Meat from "./Meat";

const data = [
  {
    name: "Chicken",
    available: true
  },
  {
    name: "Pork",
    available: false
  },
  {
    name: "Fish",
    available: true
  }
];

// This is not possible, you an't abstract out
// the store logic and top level and then pass it down the tree
// since useStore can only be called in a component
// const [meatState, dispatch] = useStore();

// const addMeat = (newMeat) => {
//   dispatch({ type: "ADD_MEAT", payload: newMeat });
// };

function App() {
  return (
    <StoreProvider initialState={{ meat: data }}>
      <Meat />
    </StoreProvider>
  );
}

export default App;

import React, { createContext, useContext } from "react";

const MeatReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case "ADD_MEAT":
      newState = {
        meat: [
          ...state.meat,
          {
            name: action.payload
          }
        ]
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

// first you need to create context,...
// give it a meaningful name, like storeContext..
// since this context is for store
const StoreContext = createContext();

// why do we need this provider?
// Provider is the "tunnel" through which...
// the component tree can interact with your context..
// like set some value to context and consume it...
export const StoreProvider = ({ children, initialState = {} }) => {
  // Use the initialState as the state of the tree

  const [meatState, dispatch] = React.useReducer(MeatReducer, initialState);

  const contextValue = React.useMemo(() => [meatState, dispatch], [
    meatState,
    dispatch
  ]);

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

//Our component tree should be able to...
// read the latest value of the storeContext
// For that, we export a custom hook which...
// uses useContext, since useContext is the api to...
// read context value
export default function useStore() {
  return useContext(StoreContext);
}

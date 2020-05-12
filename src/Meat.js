import React from "react";
import useStore from "./useStore";

export default function Meat() {
  const [{ meat }, dispatch] = useStore();
  const [newMeat, setNewMeat] = React.useState("");

  const handleMeatChange = e => {
    setNewMeat(e.target.value);
  };

  const addMeat = () => {
    dispatch({ type: "ADD_MEAT", payload: newMeat });
  };

  return (
    <div>
      <input type="text" value={newMeat} onChange={handleMeatChange} />
      <button type="button" onClick={addMeat}>
        Add Meat
      </button>
      {
        <ul>
          {meat.map(meat => (
            <li key={meat.name}>{meat.name}</li>
          ))}
        </ul>
      }
    </div>
  );
}

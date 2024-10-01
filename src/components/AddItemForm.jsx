import { useState } from "react";
import { Button } from "./ButtonGroup";

const AddItemForm = () => {
  const [itemText, setItemText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(itemText);
      }}
    >
      <h2>Add an item</h2>
      <input
        type="text"
        onChange={(e) => setItemText(e.target.value)}
        value={itemText}
      />
      <Button label="Add to list" className="btn" />
    </form>
  );
};

export default AddItemForm;

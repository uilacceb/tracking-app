import { useContext, useState } from "react";
import { Button } from "./ButtonGroup";
import { itemContext } from "../lib/itemContext";

const AddItemForm = () => {
  const [itemText, setItemText] = useState("");
  const { setItemList, itemList } = useContext(itemContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(itemText);
        const newItem = {
          name: itemText,
          packed: false,
        };
        setItemList([...itemList, newItem]);
        // setItemList((prev) => [...prev, newItem]);
        setItemText("");
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

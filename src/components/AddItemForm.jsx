import { useContext,  useState } from "react";
import { Button } from "./ButtonGroup";
import { itemContext } from "../lib/itemContext";

const AddItemForm = () => {
  const [itemText, setItemText] = useState("");
  const { setItemList, itemList } = useContext(itemContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemText);
    if (itemText.trim() === "") {
      alert("Item cannot be empty");

      return;
    }
    const newItem = {
      name: itemText,
      packed: false,
    };
    setItemList([...itemList, newItem]);
    // setItemList((prev) => [...prev, newItem]);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        type="text"
        onChange={(e) => setItemText(e.target.value)}
        value={itemText}
        autoFocus
      />
      <Button label="Add to list" className="btn" />
    </form>
  );
};

export default AddItemForm;

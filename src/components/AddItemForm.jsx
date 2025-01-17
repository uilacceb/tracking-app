import { useRef, useState } from "react";
import { Button } from "./ButtonGroup";
import { useItemsContext } from "../lib/hooks";

const AddItemForm = () => {
  const [itemText, setItemText] = useState("");
  const { setItemList, itemList } = useItemsContext();
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(itemText);
    if (itemText.trim() === "") {
      alert("Item cannot be empty");
      inputRef.current.focus();
      return;
    }
    const newItem = {
      id: new Date().getTime(),
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
        ref={inputRef}
        type="text"
        onChange={(e) => setItemText(e.target.value)}
        value={itemText}
        placeholder="toothbrush..."
      />
      <Button label="Add to list" className="btn" />
    </form>
  );
};

export default AddItemForm;

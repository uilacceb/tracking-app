import { useContext } from "react";
import { initialItems } from "../lib/constants";
import { itemContext } from "../lib/itemContext";

const ButtonGroup = () => {
  const { itemList, setItemList } = useContext(itemContext);
  const setComplete = () => {
    const updatedList = itemList.map((item) => {
      return { ...item, packed: true }; // Return a new object with packed set to false
    });
    setItemList(updatedList);
    console.log(updatedList);
  };
  const setImcomplete = () => {
    const updatedList = itemList.map((item) => {
      return { ...item, packed: false }; // Return a new object with packed set to false
    });
    setItemList(updatedList);
    console.log(updatedList);
  };
  const resetToInitial = () => {
    setItemList(initialItems);
  };
  const removeAllItems = () => {
    setItemList([]);
  };
  return (
    <section className="button-group">
      {/* {buttons.map((text, index) => {
        return (
          <Button key={index} className="btn btn--secondary" label={text} />
        );
      })} */}
      <Button
        className="btn btn--secondary"
        label="Mark all as complete"
        onClick={setComplete}
      ></Button>
      <Button
        className="btn btn--secondary"
        label="Mark all as incomplete"
        onClick={setImcomplete}
      ></Button>
      <Button
        className="btn btn--secondary"
        label="Reset to initial"
        onClick={resetToInitial}
      ></Button>
      <Button
        className="btn btn--secondary"
        label="Remove all items"
        onClick={removeAllItems}
      ></Button>
    </section>
  );
};

export const Button = ({ label, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default ButtonGroup;

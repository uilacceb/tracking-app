import { initialItems } from "../lib/constants";
import { useItemsContext } from "../lib/hooks";

const ButtonGroup = () => {
  const { itemList, setItemList } = useItemsContext();
  const handleMarkComplete = () => {
    const updatedList = itemList.map((item) => {
      return { ...item, packed: true }; // Return a new object with packed set to false
    });
    setItemList(updatedList);
    console.log(updatedList);
  };
  const handleMarkIncomplete = () => {
    const updatedList = itemList.map((item) => {
      return { ...item, packed: false }; // Return a new object with packed set to false
    });
    setItemList(updatedList);
    console.log(updatedList);
  };
  const handleResetToInitial = () => {
    setItemList(initialItems);
  };
  const handleRemoveAllItems = () => {
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
        onClick={handleMarkComplete}
      ></Button>
      <Button
        className="btn btn--secondary"
        label="Mark all as incomplete"
        onClick={handleMarkIncomplete}
      ></Button>
      <Button
        className="btn btn--secondary"
        label="Reset to initial"
        onClick={handleResetToInitial}
      ></Button>
      <Button
        className="btn btn--secondary"
        label="Remove all items"
        onClick={handleRemoveAllItems}
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

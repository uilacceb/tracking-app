import { useContext } from "react";
import { itemContext } from "../lib/itemContext";

const Counter = () => {
  const { itemList } = useContext(itemContext);
  const newList = itemList.filter((item) => item.packed === true);

  return (
    <p>
      <b>{newList.length}</b> / {itemList.length} packed
    </p>
  );
};

export default Counter;

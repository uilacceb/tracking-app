import { useItemsContext } from "../lib/hooks";

const Counter = () => {
  const { itemList } = useItemsContext();
  const newList = itemList.filter((item) => item.packed === true);

  return (
    <p>
      <b>{newList.length}</b> / {itemList.length} packed
    </p>
  );
};

export default Counter;

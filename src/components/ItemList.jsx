import { useContext } from "react";
import { itemContext } from "../lib/itemContext";
import EmptyView from "./EmptyView";

const ItemList = () => {
  const { itemList } = useContext(itemContext);
  return (
    <ul className="item-list">
      {itemList.length === 0 ? (
        <EmptyView />
      ) : (
        itemList.map((item, id) => {
          return <Item key={id} item={item} />;
        })
      )}
    </ul>
  );
};

const Item = ({ item }) => {
  const { itemList, setItemList } = useContext(itemContext);

  const handleDeleteItem = (id) => {
    const newItemList = itemList.filter((item) => item.id !== id);
    setItemList(newItemList);
    console.log(`item id ${item.id} is deleted`);
  };

  const handleToggleItem = (id) => {
    const newItemList = itemList.map((item) => {
      return item.id === id ? { ...item, packed: !item.packed } : item;
    });
    setItemList(newItemList);
  };
  return (
    <li className="item">
      <label>
        <input
          onChange={() => handleToggleItem(item.id)}
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
};

export default ItemList;

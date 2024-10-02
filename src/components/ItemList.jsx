import { useContext, useState } from "react";
import { itemContext } from "../lib/itemContext";
import EmptyView from "./EmptyView";
import Select from "react-select";

const ItemList = () => {
  const { itemList } = useContext(itemContext);
  const [sortBy, setSortBy] = useState("default");
  const sortingOptions = [
    { value: "default", label: "Sort by default" },
    { value: "packed", label: "Sort by packed" },
    { value: "unpacked", label: "Sort by unpacked" },
  ];

  const sortedList = [...itemList].sort((a, b) => {
    if (sortBy === "packed") {
      return b.packed - a.packed;
    }
    if (sortBy === "unpacked") {
      return a.packed - b.packed;
    }

    return;
  });

  return (
    <ul className="item-list">
      {itemList.length > 0 ? (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      ) : null}
      {itemList.length === 0 ? (
        <EmptyView />
      ) : (
        sortedList.map((item, id) => {
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

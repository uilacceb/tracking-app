import { useContext } from "react";
import { itemContext } from "../lib/itemContext";

const ItemList = () => {
  const { itemList } = useContext(itemContext);
  return (
    <ul>
      {itemList.map((item, index) => {
        return <Item key={index + 1} item={item} />;
      })}
    </ul>
  );
};

const Item = ({ item }) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={item.packed} />
        {item.name}
      </label>
      <button>❌</button>
    </li>
  );
};

export default ItemList;

const defaultItems = [
  { name: "good mood", packed: true },
  { name: "passport", packed: false },
  { name: "phone charger", packed: false },
];

const ItemList = () => {
  return (
    <ul>
      {defaultItems.map((item, index) => {
        return <Item key={index} item={item} />;
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
    </li>
  );
};

export default ItemList;

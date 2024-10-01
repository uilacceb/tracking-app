import { Button } from "./ButtonGroup";

const AddItemForm = () => {
  return (
    <form>
      <h2>Add an item</h2>
      <input type="text" />
      <Button label="Add to list" className="btn" />
    </form>
  );
};

export default AddItemForm;

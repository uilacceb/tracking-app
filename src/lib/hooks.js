import { useContext } from "react";
import { itemContext } from "../context/itemContext";

export const useItemsContext = () => {
  const context = useContext(itemContext);
  return context;
};

import { useEffect, useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";
import { itemContext } from "./lib/itemContext";

function App() {
  const itemFromLocalStorage = JSON.parse(localStorage.getItem("itemList"));
  const [itemList, setItemList] = useState(
    itemFromLocalStorage || initialItems
  ); // if itemFromLocalStorage is null, it will return the initialItems
  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }, [itemList]);

  return (
    <>
      <BackgroundHeading />
      <itemContext.Provider
        value={{
          itemList,
          setItemList,
        }}
      >
        <main>
          <Header />
          <ItemList />
          <Sidebar />
        </main>
      </itemContext.Provider>
      <Footer />
    </>
  );
}

export default App;

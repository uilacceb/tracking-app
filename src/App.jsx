import { useEffect, useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import Sidebar from "./components/Sidebar";
import { initialItems } from "./lib/constants";
import { itemContext } from "./context/itemContext";
import Logo from "./components/Logo";
import Counter from "./components/Counter";

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

      <main>
        <itemContext.Provider
          value={{
            itemList,
            setItemList,
          }}
        >
          <Header>
            <Logo />
            <Counter />
          </Header>

          <ItemList />
          <Sidebar />
        </itemContext.Provider>
      </main>

      <Footer />
    </>
  );
}

export default App;

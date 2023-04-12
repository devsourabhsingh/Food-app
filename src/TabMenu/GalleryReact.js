import React, { useState } from "react";
import "../TabMenu/Tab.css";
import Menu from "./Menu";
import MenuNew from "./MenuNew";
import CatMenu from "./CatMenu";
const AllCatValue = [
  ...new Set(
    Menu.map((currElem) => {
      return currElem.category;
    })
  ),
  "All",
];
console.log(AllCatValue);
const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(AllCatValue);
  const filterItem = (categItem) => {
    if(categItem==="All"){
      setItems(Menu);
      return;

    }
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });
    setItems(updateItems);    
  };
  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        order your favourite dish
      </h1>
      <hr />
      <CatMenu filterItem={filterItem} catItems={catItems} />
      <MenuNew items={items} />
    </>
  );
};

export default GalleryReact;

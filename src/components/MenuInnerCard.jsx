import React from "react";

import MenuCardItem from "./MenuCardItem";
const MenuInnerCard = ({ data }) => {
  return (
    <>
      {data.itemCards.map((itemCard) => {
        return (
         <MenuCardItem itemCard={itemCard}/>
        );
      })}
    </>
  );
};

export default MenuInnerCard;

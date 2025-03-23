import React from "react";

import MenuCardItem from "./MenuCardItem";
const MenuInnerCard = ({ data,isOpen }) => {
  return (
    <>
      { isOpen===data.title && data.itemCards.map((itemCard) => {
        return (
          
         <MenuCardItem itemCard={itemCard} isOpen={isOpen}/>
        );
      })}
    </>
  );
};

export default MenuInnerCard;

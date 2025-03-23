import React from "react";
import { MENU_BASE_IMAGE_URL } from "../utils/Constants";
import MyStore from "../utils/MyStore";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
const MenuCardItem = ({ itemCard, isOpen }) => {
  const dispatch = useDispatch()
  const handleAddToCart = ()=>{
    const addedItem = dispatch(addItem(itemCard.card.info.name))
    console.log(addItem)
  }
  return (
    isOpen && (
      <div className="menuCardItem" key={itemCard.card.info.id}>
        <div className="menuCardContent">
          <p className="font-bold">{itemCard.card.info.name}</p>
          <hr />
          <p>
            ₹
            {itemCard.card.info.price || itemCard.card.info.defaultPrice
              ? (itemCard.card.info.price || itemCard.card.info.defaultPrice) /
                100
              : "N/A"}
          </p>
          <p>
            <i
              class="fa-solid fa-star text-success me-2"
              style={{ fontSize: "14px" }}
            ></i>
            <span className="text-success fs-6 me-1">
              {itemCard.card.info.ratings.aggregatedRating.rating &&
                itemCard.card.info.ratings.aggregatedRating.rating}
            </span>{" "}
            <span className="fs-6">
              {itemCard.card.info.ratings.aggregatedRating.ratingCount && (
                <span className="text-amber-900 text-xl">
                  ({itemCard.card.info.ratings.aggregatedRating.ratingCountV2})
                </span>
              )}
            </span>
          </p>
          <div className="menuCardDescription line-clamp-2">
            {itemCard.card.info.description && itemCard.card.info.description}
          </div>
        </div>
        <div className="thumbnail">
          {itemCard.card.info.imageId ? (
            <img
              src={MENU_BASE_IMAGE_URL + itemCard.card.info.imageId}
              alt="Image not available"
            />
          ) : (
            <div className="noImage d-flex flex-column justify-content-center align-items-center">
              <p>No Image</p>
              <i class="fa-solid fa-bowl-food text-success fs-1"></i>
            </div>
          )}
          <button
            className="addBtn btn-info text-success p-1"
            onClick={handleAddToCart}
          >
            Add
          </button>
        </div>
      </div>
    )
  );
};

export default MenuCardItem;

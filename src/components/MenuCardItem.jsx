import React from 'react'
import { MENU_BASE_IMAGE_URL } from "../utils/Constants";
const MenuCardItem = ({itemCard}) => {
  return (
    <div className="menuCardItem" key={itemCard.card.info.id}>
    <div className="menuCardContent">
      <p>{itemCard.card.info.name}</p>
      <p>
        ₹
        {itemCard.card.info.price || itemCard.card.info.defaultPrice
          ? (itemCard.card.info.price ||
              itemCard.card.info.defaultPrice) / 100
          : "N/A"}
      </p>
      <p>
        <i
          class="fa-solid fa-star text-success me-2"
          style={{ fontSize: "14px" }}
        ></i>
        <span className="text-success fs-6 me-1">
          {itemCard.card.info.ratings.aggregatedRating.rating&&itemCard.card.info.ratings.aggregatedRating.rating}
        </span>{" "}
        <span className="fs-6">
          ({itemCard.card.info.ratings.aggregatedRating.ratingCountV2})
        </span>
      </p>
      <div className="menuCardDescription">
        <p>{itemCard.card.info.description}</p>
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
      <button className="addBtn btn-info text-success p-1">Add</button>
    </div>
  </div>
  )
}

export default MenuCardItem
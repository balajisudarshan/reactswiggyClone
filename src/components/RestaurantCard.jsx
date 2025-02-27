function RestaurantCard({ obj }) {
  const BASE_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="card" key={obj.info.id}>
      <div className="image">
        <img src={BASE_URL + obj.info.cloudinaryImageId} alt="image logo" />
      </div>
      <div className="content">
        <p className="boldTxt">{obj.info.name}</p>
        <p className="boldTxt">
          {obj.info.avgRating} | {obj.info.sla.slaString}
        </p>
        <p className="lightTxt">
          <span className="cuisines">{obj.info.cuisines.join(", ")}</span>
        </p>
        <p className="lightTxt">{obj.info.locality}</p>
      </div>
    </div>
  );
}
export default RestaurantCard;

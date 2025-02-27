import RestaurantCard  from "./RestaurantCard";
import Shimmer from "./Shimmer";
function RestaurantContainer({ data }) {
  return (
    <div className="itemCardHolder">
      {data.length > 0 ? (
        data.map((item) => <RestaurantCard key={item.info.id} obj={item} />)
      ) : (
        <Shimmer />
      )}
    </div>
  );
}
export default RestaurantContainer;
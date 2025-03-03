import { useEffect, useState } from "react";

import RestaurantContainer from "./RestaurantContainer";
import NavBar from "./NavBar";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import Shimmer from "./Shimmer";

// Notification Component to display offline status message
function Notification() {
  return (
    <div className="offlineNotification">
      <p>You are currently offline. Swiggy may not be available. 🕗</p>
    </div>
  );
}

function Home() {
  const [data, setData] = useState([]);
  const status = useOnlineStatus();  // Track online status using the custom hook

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4425987&lng=79.98645599999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const data = await response.json();
        setData(
          data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        );
        console.log(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []); // Fetch data only once on component mount

  return (
    <div>
     
      
      {status ? <RestaurantContainer data={data} /> : <Notification />}  
    </div>
  );
}

export default Home;

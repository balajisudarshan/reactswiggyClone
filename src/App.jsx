import { useEffect, useState } from "react";
import "./App.css";
import RestaurantContainer from "./components/RestaurantContainer";
import NavBar from "./components/NavBar";

function Notification(status){
  return(
    <div className="offlineNotification">
      <p>You are currently offline. Swiggy may not be available. 🕗</p>
    </div>
  )
}
function App() {
  const [status,setStatus] = useState(navigator.onLine)
  const [data, setData] = useState([]);

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
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    window.addEventListener('online',()=>{
      setStatus(true)
    })
    window.addEventListener('offline',()=>{
      setStatus(false)
    })
  },[status])
  return (
    <div>
      <NavBar />
      
      {status?<RestaurantContainer data={data} />:<Notification/>}
         
    </div>
  );
}

export default App;

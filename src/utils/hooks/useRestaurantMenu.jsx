import { useState, useEffect } from "react";

function useRestaurantMenu(id) {
  const [restaurantData, setRestaurantData] = useState([]);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.4338728&lng=79.9700593&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
        );
        const jsonData = await response.json();
        setRestaurantData(jsonData.data.cards[2]?.card?.card?.info || {});
        setMenuData(
          jsonData.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || []
        );
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, [id]);

  return { restaurantData, menuData }; 
}

export default useRestaurantMenu;

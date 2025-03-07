import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// export function StarIcon() {
//   return (
//     <div className="star">
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
//         <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
//       </svg>
//     </div>
//   );
// }
// setRestaurantData();
// setMenuData(jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards[1].card.info)
// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.4338728&lng=79.9700593&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
const Menu = () => {
  const IMAGE_BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"
  const { id } = useParams();
  const [restaurantData, setRestaurantData] = useState([]);
  const [menuData, setMenuData] = useState([]);
  

 useEffect(()=>{
  const fetchData = async ()=>{
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=14.4338728&lng=79.9700593&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
    const jsonData = await response.json();
    setRestaurantData(jsonData.data.cards[2].card.card.info)
  }
  fetchData();
 },[id])

  return (
    <>
      <div className="restaurantContainer">
        <div className="res-name">{restaurantData.name}</div>
        <div className="res-content-bg">
          <div className="restaurant-content">
            <div className="restaurant-header boldTxt">
              {restaurantData.avgRating} ({restaurantData.totalRatingsString}) {"/"} {restaurantData.costForTwoMessage	}
            </div>
            <div className="restaurant-cuisines">
              {restaurantData.cuisines.join(" , ")}
            </div>
            <div className="outlet">
              <p className="areaName">Outlet  <span className="lightTxt">{restaurantData.areaName	}</span></p>
              <p className="areaName">{restaurantData.sla.slaString	}</p>
            </div>
            </div>
        </div>
        <div className="menuContainer">
          <h3>Menu</h3>
          <div className="menuCardHolder">
            <div className="header">Recommended</div>
            {/* {menuData.map((item)=>{
              return(
                <div className="menu-card">
                  <div className="thumbnail">
                    <img src={IMAGE_BASE_URL + item.imageId}/>
                  </div>
                  
                </div>
              )
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

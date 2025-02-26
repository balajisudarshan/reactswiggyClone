import { useState } from "react";
import "./App.css";

function NavBar() {
  return (
    <nav>
      <div className="logo">
        <img
          src="https://th.bing.com/th?q=Swiggy+Logo+JPEG+Images+Free+Download&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247"
          alt="Swiggy Logo"
        />
      </div>
      <ul className="links">
        <li>Home</li>
        <li>About</li>
        <li>Cart</li>
      </ul>
    </nav>
  );
}

function Card({ obj }) {
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

function App() {
  const data = [
    {
      info: {
        id: "651018",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/911b54ea-0506-409c-b3e8-ad7163e1d643_651018.jpg",
        locality: "Mini bypass",
        areaName: "Nellore",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.3,
        parentId: "721",
        avgRatingString: "4.3",
        totalRatingsString: "2.7K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 0.8,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "0.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "427148",
        name: "The Biryani Life",
        cloudinaryImageId: "oq2hlnrultqivuhlf3u2",
        locality: "Magunta Layout",
        areaName: "Central Avenue",
        costForTwo: "₹250 for two",
        cuisines: [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages",
        ],
        avgRating: 3.9,
        parentId: "8496",
        avgRatingString: "3.9",
        totalRatingsString: "537",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "566503",
        name: "Faasos' Signature Wraps & Rolls",
        cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
        locality: "Central Avenue",
        areaName: "Magunta Layout",
        costForTwo: "₹350 for two",
        cuisines: [
          "Fast Food",
          "Snacks",
          "North Indian",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.2,
        parentId: "340366",
        avgRatingString: "4.2",
        totalRatingsString: "263",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "103738",
        name: "Muralikrishna Ghee Sweets",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/25/d4899800-b24d-4c38-bc1e-8f17f831b9ff_103738.jpg",
        locality: "Madras Busstand",
        areaName: "NELLORE AREA",
        costForTwo: "₹500 for two",
        cuisines: ["Sweets", "Bakery"],
        avgRating: 4.6,
        parentId: "472783",
        avgRatingString: "4.6",
        totalRatingsString: "23K+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "479883",
        name: "Asli nellore family dhaba and restaurant",
        cloudinaryImageId: "ttleqyn2i8b2kmmsyspg",
        locality: "Jagadeesh Nagar",
        areaName: "Magunta Layout",
        costForTwo: "₹300 for two",
        cuisines: ["Biryani", "Chinese", "Tandoor", "Kebabs"],
        avgRating: 4.1,
        parentId: "288342",
        avgRatingString: "4.1",
        totalRatingsString: "15K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "98206",
        name: "McDonald's",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/bb8375c9-0cc2-40fa-b15f-f7d0d43e0663_98206.jpg",
        locality: "MGB Felicity Mall",
        areaName: "MGB Felicity Mall",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.4,
        parentId: "630",
        avgRatingString: "4.4",
        totalRatingsString: "17K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "458212",
        name: "KFC",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/a8ad335d-9fcf-4dc1-968b-17fb735d4974_458212.JPG",
        locality: "CTR Arcade",
        areaName: "Ramamurthy Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
        avgRating: 4.3,
        parentId: "547",
        avgRatingString: "4.3",
        totalRatingsString: "6.2K+",
        sla: {
          deliveryTime: 18,
          lastMileTravel: 0.6,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "109746",
        name: "Madhura Sweets",
        cloudinaryImageId: "sjarddkwnbvboif3mzol",
        locality: "Santhapet Road",
        areaName: "Subedarpet",
        costForTwo: "₹200 for two",
        cuisines: ["Sweets", "Bakery"],
        avgRating: 4.6,
        parentId: "12656",
        avgRatingString: "4.6",
        totalRatingsString: "13K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.8,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "103740",
        name: "Muralikrishna Veg",
        cloudinaryImageId: "aroxt9etv0xhtzwtbi4l",
        locality: "Madras Busstand",
        areaName: "Magunta Layout",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian", "Andhra", "Chinese"],
        avgRating: 4.5,
        parentId: "12661",
        avgRatingString: "4.5",
        totalRatingsString: "27K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 1.1,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "96590",
        name: "Domino's Pizza",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/17/1de7ea43-359f-413b-9ddc-74e7d4716ebd_96590.JPG",
        locality: "Mini Bypass Road",
        areaName: "Ramamurthy Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.1,
        parentId: "2456",
        avgRatingString: "4.1",
        totalRatingsString: "7.3K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "105993",
        name: "Komala Vilas",
        cloudinaryImageId: "dxz1gezwa2alyqfkdwbi",
        locality: "Gandhi Statue Road",
        areaName: "Magunta Layout",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian", "Andhra"],
        avgRating: 4.5,
        parentId: "12657",
        avgRatingString: "4.5",
        totalRatingsString: "18K+",
        sla: {
          deliveryTime: 18,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "735322",
        name: "Firangi Falooda",
        cloudinaryImageId: "5bc22aacd9519670794db0bc6964ae91",
        locality: "Gayathri Nagar",
        areaName: "Nellore Area",
        costForTwo: "₹250 for two",
        cuisines: [
          "Desserts",
          "Beverages",
          "Juices",
          "Fast Food",
          "Snacks",
          "Burgers",
          "Chinese",
        ],
        avgRating: 4.3,
        parentId: "7273",
        avgRatingString: "4.3",
        totalRatingsString: "433",
        sla: {
          deliveryTime: 33,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "427141",
        name: "Faasos - Wraps, Rolls & Shawarma",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/110939e3-ed2b-4042-b633-b094e0500d22_427141.JPG",
        locality: "Magunta Layout",
        areaName: "Central Avenue",
        costForTwo: "₹200 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 4.1,
        parentId: "21809",
        avgRatingString: "4.1",
        totalRatingsString: "2.0K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "393346",
        name: "Chaat Bazaar",
        cloudinaryImageId: "bkbvit2za9affdrp2xmz",
        locality: "Gandhi Nagar",
        areaName: "Gandhi Nagar",
        costForTwo: "₹300 for two",
        cuisines: ["Chaat"],
        avgRating: 4.3,
        parentId: "229",
        avgRatingString: "4.3",
        totalRatingsString: "1.8K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "408597",
        name: "Ravi Fast Food",
        cloudinaryImageId: "s4tdiahuip7naeyfqkwy",
        locality: "VRC Centre",
        areaName: "Achari Street",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Kebabs"],
        avgRating: 4.1,
        parentId: "167659",
        avgRatingString: "4.1",
        totalRatingsString: "4.1K+",
        sla: {
          deliveryTime: 18,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "735758",
        name: "Red Bucket Biryani",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/21/902b5fcb-ee94-4bf1-bec4-fc92e6bee39e_735758 ss.jpg",
        locality: "Trunk Road",
        areaName: "Magunta Layout",
        costForTwo: "₹499 for two",
        cuisines: ["Biryani"],
        avgRating: 4.2,
        parentId: "306664",
        avgRatingString: "4.2",
        totalRatingsString: "1.9K+",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "396727",
        name: "Grameen Kulfi",
        cloudinaryImageId: "pv2tjdsmrbnyezxuewwg",
        locality: "Balaji Nagar",
        areaName: "AC Nagar",
        costForTwo: "₹120 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.6,
        parentId: "12175",
        avgRatingString: "4.6",
        totalRatingsString: "643",
        sla: {
          deliveryTime: 17,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "99238",
        name: "Amigos",
        cloudinaryImageId: "ovh1vesynqjezgxjrzpe",
        locality: "Srihari Nagar",
        areaName: "Nellore Area",
        costForTwo: "₹350 for two",
        cuisines: ["Chinese", "Continental", "Bakery"],
        avgRating: 4.2,
        parentId: "12698",
        avgRatingString: "4.2",
        totalRatingsString: "20K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "488922",
        name: "The Legendairy Milkshakes",
        cloudinaryImageId: "d576868d5a529d19dca25a968aba8a16",
        locality: "Santhapet Road",
        areaName: "Balaji nagar",
        costForTwo: "₹250 for two",
        cuisines: ["Beverages"],
        avgRating: 4.3,
        parentId: "13330",
        avgRatingString: "4.3",
        totalRatingsString: "1.2K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 1,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "1.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
    {
      info: {
        id: "629409",
        name: "Dum Safar Biryani",
        cloudinaryImageId: "1154cffac2453eb0bf7fdda7e5ea1659",
        locality: "Grand Trunk Road",
        areaName: "Saraswathi Nagar",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Kebabs", "Tandoor", "Indian", "Desserts"],
        avgRating: 4,
        parentId: "351013",
        avgRatingString: "4.0",
        totalRatingsString: "485",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
  ];
  return (
    <div>
      <NavBar />
      <div className="itemCardHolder">
        {data.map((item) => {
          return <Card key={item.info.id} obj={item} />;
        })}
      </div>
    </div>
  );
}

export default App;

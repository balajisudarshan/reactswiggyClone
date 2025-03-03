import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

function RestaurantContainer({ data }) {
  const [searchData, setSearchData] = useState(data); 
  const [input, setInput] = useState("");

  
  useEffect(() => {
    setSearchData(data);
  }, [data]);

  const handleSearch = () => {
    if (input === "") {
     
      setSearchData(data);
    } else {
     
      const filteredData = data.filter((item) =>
        item.info.name.toLowerCase().startsWith(input.toLowerCase())
      );
      setSearchData(filteredData);
    }
  };

  return (
    <div className="restaurant-container">
      <div className="searchbar">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)} 
          onKeyUp={handleSearch} 
          placeholder="Search for restaurants"
        />
      </div>
      <div className="itemCardHolder">
       {searchData.length > 0 ? (
          searchData.map((item) => <RestaurantCard key={item.info.id} obj={item} />)
        ) : (
          <Shimmer />
        )} 
        
      </div>
    </div>
  );
}

export default RestaurantContainer;

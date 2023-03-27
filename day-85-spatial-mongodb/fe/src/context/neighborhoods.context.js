import { createContext, useEffect, useState } from "react";

const NeighborhoodContext = createContext(10);

const NeighborhoodContextProvider = ({ children }) => {
  const ALL_RESTAURANT_URL = "http://8082/restaurant/restaurants";

  const [neighborhoods, setNeighborhoods] = useState([]);

  async function fetchRestaurants(url) {
    const FETCHED_DATA = await fetch(ALL_RESTAURANT_URL);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setNeighborhoods(FETCHED_JSON.data);
  }
  useEffect(() => {
    fetchRestaurants(ALL_RESTAURANT_URL);
  }, []);
  return (
    <RestaurantContext.Provider value={neighborhoods}>
      {children}
    </RestaurantContext.Provider>
  );
};

export { NeighborhoodContext, NeighborhoodContextProvider };

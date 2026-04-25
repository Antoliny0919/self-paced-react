import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import RestaurantList from "./RestaurantList";
import restaurantsData from "../../../db.json";

export default function Main() {
  const [category, setCategory] = useState("전체");

  const filteredRestaurantData =
    category === "전체"
      ? restaurantsData.restaurants
      : restaurantsData.restaurants.filter(
          (restaurant) => restaurant.category === category,
        );

  return (
    <main>
      <CategoryFilter category={category} onChangeCategory={setCategory} />
      <RestaurantList
        category={category}
        restaurantsData={filteredRestaurantData}
      />
    </main>
  );
}

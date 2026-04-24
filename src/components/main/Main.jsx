import CategoryFilter from "./CategoryFilter";
import RestaurantList from "./RestaurantList";
import restaurantsData from "../../../db.json";

export default function Main() {
  return (
    <main>
      <CategoryFilter />
      <RestaurantList restaurantsData={restaurantsData.restaurants} />
    </main>
  );
}

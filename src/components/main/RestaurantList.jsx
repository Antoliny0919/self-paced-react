import RestaurantListItem from "./RestaurantListItem";
import "./styles/RestaurantList.css";

export default function RestaurantList({ restaurantsData }) {
  return (
    <section class="restaurant-list-container">
      <ul class="restaurant-list">
        {restaurantsData.map((data) => (
          <RestaurantListItem data={data} />
        ))}
      </ul>
    </section>
  );
}

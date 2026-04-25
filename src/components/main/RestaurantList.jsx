import RestaurantListItem from "./RestaurantListItem";
import "./styles/RestaurantList.css";

export default function RestaurantList({
  restaurantsData,
  openRestaurantInfo,
}) {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurantsData.map((restaurant) => (
          <RestaurantListItem
            key={restaurant.id}
            restaurant={restaurant}
            openRestaurantInfo={openRestaurantInfo}
          />
        ))}
      </ul>
    </section>
  );
}

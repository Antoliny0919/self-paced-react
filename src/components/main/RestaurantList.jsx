import RestaurantListItem from "./RestaurantListItem";
import "./styles/RestaurantList.css";

export default function RestaurantList({ restaurantsData }) {
  return (
    <section className="restaurant-list-container">
      <ul className="restaurant-list">
        {restaurantsData.map((data) => (
          <RestaurantListItem key={data.id} data={data} />
        ))}
      </ul>
    </section>
  );
}

import "./styles/RestaurantModal.css";
import RestaurantDetailModal from "./RestaurantDetailModal";
import AddRestaurantModal from "./AddRestaurantModal";

export default function RestaurantModal() {
  return (
    <aside>
      <RestaurantDetailModal />
      <AddRestaurantModal />
    </aside>
  );
}

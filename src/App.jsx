import "./App.css";
import "./components/modals/styles/RestaurantModal.css";
import { useState } from "react";
import Header from "./components/header/Header";
import CategoryFilter from "./components/main/CategoryFilter";
import RestaurantList from "./components/main/RestaurantList";
import RestaurantDetailModal from "./components/modals/RestaurantDetailModal";
import restaurantsData from "../db.json";

function App() {
  const [category, setCategory] = useState("전체");

  const filteredRestaurantData =
    category === "전체"
      ? restaurantsData.restaurants
      : restaurantsData.restaurants.filter(
          (restaurant) => restaurant.category === category,
        );

  const [isRestaurantInfoModalOpen, setRestaurantInfoModalOpen] =
    useState(false);

  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const closeRestaurantInfoModal = () => {
    setSelectedRestaurant(null);
    setRestaurantInfoModalOpen(false);
  };
  const openRestaurantInfoModal = (restaurant) => {
    setSelectedRestaurant(restaurant);
    setRestaurantInfoModalOpen(true);
  };

  return (
    <>
      <Header />
      <main>
        <CategoryFilter category={category} onChangeCategory={setCategory} />
        <RestaurantList
          category={category}
          restaurantsData={filteredRestaurantData}
          openRestaurantInfo={openRestaurantInfoModal}
        />
      </main>
      <aside>
        {isRestaurantInfoModalOpen && (
          <RestaurantDetailModal
            selectedRestaurant={selectedRestaurant}
            close={closeRestaurantInfoModal}
          />
        )}
        {/* <AddRestaurantModal /> */}
      </aside>
    </>
  );
}

export default App;

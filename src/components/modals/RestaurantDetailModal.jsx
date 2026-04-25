export default function RestaurantDetailModal({ selectedRestaurant, close }) {
  return (
    <div className="modal modal--open">
      <div className="modal-backdrop"></div>
      <div className="modal-container">
        <h2 className="modal-title text-title">{selectedRestaurant.name}</h2>
        <div className="restaurant-info">
          <p className="restaurant-info__description text-body">
            {selectedRestaurant.description}
          </p>
        </div>
        <div className="button-container">
          <button
            className="button button--primary text-caption"
            onClick={() => close()}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

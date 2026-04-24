function categoryImageName(categoryName) {
  if (categoryName === "한식") return "category-korean";
  if (categoryName === "중식") return "category-chinese";
  if (categoryName === "일식") return "category-japanese";
  if (categoryName === "양식") return "category-western";
  if (categoryName === "아시안") return "category-asian";
  else return "category-etc";
}

export default function RestaurantListItem({
  data: { id, category, name, description },
}) {
  const categoryImagePath = `${categoryImageName(category)}.png`;
  return (
    <li className="restaurant" key={id}>
      <div className="restaurant__category">
        <img
          src={`templates/${categoryImagePath}`}
          alt={category}
          className="category-icon"
        />
      </div>
      <div className="restaurant__info">
        <h3 className="restaurant__name text-subtitle">{name}</h3>
        <p className="restaurant__description text-body">{description}</p>
      </div>
    </li>
  );
}

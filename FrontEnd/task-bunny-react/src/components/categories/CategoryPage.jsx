import React, { useState } from "react";
import CategoryList from "./CategoryList";
import allCategory from "../../Assets/all-category.jpg";
import homeCategory from "../../Assets/home-category.jpg";
import movingCategory from "../../Assets/moving-category.jpg";
import laundryCategory from "../../Assets/laundry-category.jpg";
import foodCategory from "../../Assets/food-category.jpg";
import shoppingCategory from "../../Assets/shopping-category.jpg";
import yardWorkCategory from "../../Assets/yard-work-category.jpg";
import deliveryCategory from "../../Assets/delivery-category.jpg";

export default function CategoryPage() {
  const [categories, setCategories] = useState([
    {
      category: "All",
      id: 1,
      picture: allCategory,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      category: "Home",
      id: 2,
      picture: homeCategory,
      desc: "sed do eiusmod tempor incididunt ut labore et dolore magna",
    },
    {
      category: "Moving",
      id: 3,
      picture: movingCategory,
      desc: "cillum dolore eu fugiat nulla pariatur. Excepteur sint ",
    },
    {
      category: "Laundry",
      id: 4,
      picture: laundryCategory,
      desc: "illo inventore veritatis et quasi architecto beatae",
    },
    {
      category: "Food",
      id: 5,
      picture: foodCategory,
      desc:
        "dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia",
    },
    {
      category: "Shopping",
      id: 6,
      picture: shoppingCategory,
      desc:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit",
    },
    {
      category: "Yard Work",
      id: 7,
      picture: yardWorkCategory,
      desc:
        " sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet",
    },
    {
      category: "Delivery",
      id: 8,
      picture: deliveryCategory,
      desc:
        "ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit",
    },
  ]);

  return (
    <>
      <h2>Choose Category</h2>
      <div className="container">
        <div className="row">
          {categories.map((category) => {
            return <CategoryList category={category} key={category.id} />;
          })}
        </div>
      </div>
    </>
  );
}

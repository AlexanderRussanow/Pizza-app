import React from "react";
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";
import SortPopup from "../components/SortPopup";

const Home = ({ pizzas }) => {
  console.log(pizzas);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={[
            "All",
            "Meat",
            "Vegetarian",
            "Grill",
            "Carbonara",
            "Quattroformaggi",
          ]}
        />
        <SortPopup
          items={[
            { name: "Popular", type: "Popular" },
            { name: "Price", type: "Price" },
            { name: "ABC", type: "ABC" },
          ]}
        />
      </div>
      <h2 className="content__title">All pizzas:</h2>
      <div className="content__items">
        {pizzas.map((item, index) => (
          <PizzaBlock key={`${item}_${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;

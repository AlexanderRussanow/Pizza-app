import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories";
import LoadingBlock from "../components/pizzablock/LoadingBlock";
import PizzaBlock from "../components/pizzablock/PizzaBlock";
import SortPopup from "../components/SortPopup";
import { setCategory } from "../redux/actions/filterAC";
import { fetchPizzas } from "../redux/actions/pizzasAC";

const pizzasType = [
  "All",
  "Meat",
  "Vegetarian",
  "Grill",
  "Carbonara",
  "Quattroformaggi",
];

const sortItems = [
  { name: "Popular", type: "Popular" },
  { name: "Price", type: "Price" },
  { name: "ABC", type: "ABC" },
];

const Home = () => {
  const { items, isLoading } = useSelector(({ pizzaReducer }) => pizzaReducer);
  const { category, sortBy } = useSelector(({ filterReducer }) => filterReducer);

  console.log(category, sortBy)

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!items.length) {
      dispatch(fetchPizzas());
    }
  }, [category]);

  const setItemDispatch = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories items={pizzasType} onClickItem={setItemDispatch} activeCategory={category} />
        <SortPopup items={sortItems} />
      </div>
      <h2 className="content__title">All pizzas:</h2>
      <div className="content__items">
        {isLoading
          ? items.map((item, index) => (
              <PizzaBlock key={`${item}_${index}`} {...item} />
            ))
          : Array(12).fill(0).map((i, index) => <LoadingBlock key={index}/>)}
      </div>
    </div>
  );
};

export default Home;

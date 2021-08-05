import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../components/Categories";
import LoadingBlock from "../components/pizzablock/LoadingBlock";
import PizzaBlock from "../components/pizzablock/PizzaBlock";
import SortPopup from "../components/SortPopup";
import { setCategory, setSortBy } from "../redux/actions/filterAC";
import { fetchPizzas } from "../redux/actions/pizzasAC";

const pizzasType = [
  "Meat",
  "Vegetarian",
  "Grill",
  "Spicy",
  "Mixed",
];

const sortItems = [
  { name: "Popular", type: "popular" },
  { name: "Price", type: "price" },
  { name: "ABC", type: "name" },
];

const Home = () => {
  const { items, isLoading } = useSelector(({ pizzaReducer }) => pizzaReducer);
  const { category, sortBy } = useSelector(
    ({ filterReducer }) => filterReducer
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
   
      dispatch(fetchPizzas(category, sortBy));
    
  }, [category, sortBy]);

  const setItemDispatch = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onClickSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={pizzasType}
          onClickItem={setItemDispatch}
          activeCategory={category}
        />
        <SortPopup
          activeSort={sortBy.type}
          items={sortItems}
          onClickSortType={onClickSortType}
        />
      </div>
      <h2 className="content__title">All pizzas:</h2>
      <div className="content__items">
        {isLoading
          ? items.map((item, index) => (
              <PizzaBlock key={`${item}_${index}`} {...item} />
            ))
          : Array(12)
              .fill(0)
              .map((i, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
};

export default Home;

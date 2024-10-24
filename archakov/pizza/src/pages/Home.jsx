import React, { useEffect, useState } from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import NotFound from "./NotFound";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://671565a133bc2bfe40ba4559.mockapi.io/items")
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        setIsLoading(false);
      });
      window.scrollTo(0,0)
  }, []);

  return (
    <>
   <div className="container">
   <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
      </div>
   </div>
    </>
  );
};

export default Home;

import React from "react";
import "./HomePage.scss";
import { useMealContext } from "../../context/mealContext";
import Loader from "../../components/Loader/Loader";
import CategoryList from "../../components/Category/CategoryList";

const HomePage = () => {
  return (
    <main className="main-content">
      {categoryLoading ? <Loader /> : <CategoryList categories={categories} />}
    </main>
  );
};

export default HomePage;

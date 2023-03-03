import React, { createContext, useContext, useEffect, useReducer } from "react";
import { mealReducer } from "../reducers/mealReducer";

const initialState = {
  categories: [],
  categoryLoading: false,
  categoryError: false,
  categoryMeals: [],
  categoryMealsLoading: false,
  categoryMealsError: false,
};

const MealContext = createContext({});
export const MealProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mealReducer, initialState);

  useEffect(() => {}, []);

  return (
    <MealContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useMealContext = () => {
  return useContext(MealContext);
};

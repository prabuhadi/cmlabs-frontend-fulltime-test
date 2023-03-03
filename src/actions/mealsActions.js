import axios from "../api/axios";
import {
  FETCH_CATEGORY_BEGIN,
  FETCH_CATEGORY_ERROR,
  FETCH_CATEGORY_SUCCESS,
} from "./actions";

import {
  CATEGORIES_URL,
  MEAL_CATEGORIES_URL,
  MEAL_SINGLE_URL,
  SEARCH_URL,
} from "../utils/constants";

export const startFetchCategories = async (dispatch) => {
  try {
    dispatch({ type: FETCH_CATEGORY_BEGIN });
    const response = await axios.get(`${CATEGORIES_URL}`);
    dispatch({
      type: FETCH_CATEGORY_SUCCESS,
      payload: response.data.categories,
    });
  } catch (error) {
    dispatch({ type: FETCH_CATEGORY_ERROR, payload: error.message });
  }
};

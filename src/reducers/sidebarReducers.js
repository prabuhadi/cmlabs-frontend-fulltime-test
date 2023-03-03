import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "../actions/actions";

const sidebarReducer = (state, actions) => {
  switch (actions.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: true,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSlidebarOpen: false,
      };
    default:
      return state;
  }
};

export default sidebarReducer;

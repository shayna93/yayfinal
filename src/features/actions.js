import { SET_ITEM } from "./actionTypes";

export const setItem = (item) => {
    return {
      type: SET_ITEM,
      payload: item,
    };
  };
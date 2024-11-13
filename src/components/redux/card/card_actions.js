import { instance } from "../api.config";
import { SET_CARDS } from "./card_action_types";

export const searchCards = (searchTerm = "") => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/cards/cards", {
        params: {
          searchString: searchTerm,
        },
      });
      const cards = response.data;
      dispatch({
        type: SET_CARDS,
        payload: cards,
      });
      return cards;
    } catch (error) {
      if (error.response) {
        console.error(
          `${error.response.status} - ${error.response.data.message}`
        );
        alert(`${error.response.status} - ${error.response.data.message}`);
      } else {
        console.error("Server connection error:", error.message);
        alert("A server connection error occurred. Please try again later.");
      }
    }
  };
};

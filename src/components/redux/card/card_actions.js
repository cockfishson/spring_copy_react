import { SET_CARDS } from "./card_action_types";
import axios from "axios";

export const searchCards = (searchTerm = "") => {
  return async (dispatch) => {
    try {
      const response = axios.get(
        `${process.env.REACT_APP_API_URL}/cards/cards`,
        {
          params: {
            searchString: searchTerm,
          },
        }
      );
      const cards = (await response).data;
      dispatch({
        type: SET_CARDS,
        payload: cards,
      });
      return cards;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
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

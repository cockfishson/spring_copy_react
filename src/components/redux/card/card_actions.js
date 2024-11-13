import axios from "axios";
import { SET_CARDS } from "./card_action_types";
import { actionhandleError } from "../../../utils/action_error_handler";

export const searchCards = (searchTerm = "") => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/cards/cards`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            searchString: searchTerm,
          },
        }
      );
      const cards = response.data;
      dispatch({
        type: SET_CARDS,
        payload: cards,
      });
      return cards;
    } catch (error) {
      actionhandleError(error);
    }
  };
};

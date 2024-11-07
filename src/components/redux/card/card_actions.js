import { SET_CARDS } from "./card_action_types";

export const searchCards = (searchTerm = "") => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `http://localhost:5000/cards/cards?searchString=${encodeURIComponent(
          searchTerm
        )}`
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `${response.status} - ${errorData.message || "Failed to fetch cards"}`
        );
      }
      const cards = await response.json();
      dispatch({
        type: SET_CARDS,
        payload: cards,
      });
      return cards;
    } catch (error) {
      console.error("Failed to fetch cards:", error.message);
      dispatch({
        type: SET_CARDS,
        payload: [],
      });
      return [];
    }
  };
};

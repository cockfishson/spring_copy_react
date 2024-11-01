import { setSearchString } from "./card_action_types";

export const searchCards = (searchString) => ({
  type: setSearchString,
  payload: searchString,
});

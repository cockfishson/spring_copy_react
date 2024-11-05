const initialState = {
  cards: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARDS":
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};

export default cardReducer;

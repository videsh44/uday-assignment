const INITIAL_STATE = {
  url: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TEXT_BOX_TWO":
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};

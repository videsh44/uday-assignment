const INITIAL_STATE = {
  url: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TEXT_BOX_ONE":
      return {
        ...state,
        url: action.payload,
      };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  isSignedIn: false,
  userName: "",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        isSignedIn: true,
        userName: action.payload.userName,
      };
    case "SET_USER_AUTH":
      return {
        ...state,
        isSignedIn: true,
        userName: action.payload.userName,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        isSignedIn: false,
        userName: "",
      };
    default:
      return state;
  }
};

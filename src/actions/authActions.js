export const loginUser = (values) => {
  const data = values;
  return {
    type: "LOGIN_USER",
    payload: data,
  };
};

/*
export const loginUser = formValues => async dispatch => {
 const response = crmApi().post("/auth/login", formValues)
 
  dispatch({ type: "LOGIN_USER", payload: response.data });
};
*/

export const setUserAuthValue = (formValues) => {
  return {
    type: "SET_USER_AUTH",
    payload: formValues,
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};

export const textBoxOne = (text) => {
  const data = text;
  return {
    type: "TEXT_BOX_ONE",
    payload: data,
  };
};

export const textBoxTwo = (text) => {
  const data = text;
  return {
    type: "TEXT_BOX_TWO",
    payload: data,
  };
};

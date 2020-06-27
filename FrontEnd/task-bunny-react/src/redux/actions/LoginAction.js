export const login = (auth) => {
  console.log("You logged in");
  return {
    type: "LOGIN_CLICKED",
    payload: auth,
  };
};

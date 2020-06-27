export default function (state = null, action) {
  switch (action.type) {
    case "LOGIN_CLICKED":
      return action.payload;
      break;
  }
  return state;
}

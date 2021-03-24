const USER_ADDED = "user/USER_ADDED";
const USER_REMOVED = "user/USER_REMOVED";

export const addUser = (userObj) => {
  return {
    type: USER_ADDED,
    user: userObj,
  };
};

export const removeUser = () => {
  return {
    type: USER_REMOVED,
  };
};

// const getUrl = "https://jsonplaceholder.typicode.com/todos/1";
/*
TODO: Turn the function into a thunk action creator using the
  above url
*/
export const fetchUser = () => {};

export const postUser = (userInfo) => async (dispatch) => {
  console.log("In the post user thunk ", userInfo);
  const { title, id, message } = userInfo;
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      id,
      message,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  if (!response.ok) throw response;
  const user = await response.json();
  user.title = "WE POSTED A USER!";
  console.log("POSTED THE USER ------------------ ", user);
  return dispatch(addUser(user));
};

export default function userReducer(state = null, action) {
  switch (action.type) {
    case USER_ADDED:
      return {
        ...state,
        [action.user.id]: action.user,
      };
    case USER_REMOVED:
      return null;
    default:
      return state;
  }
}

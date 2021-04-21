//TODO: Create a USER_ADDED action
const USER_REMOVED = "user/USER_REMOVED";

/*
TODO: Create a addUser action creator that takes a user object
with a type
*/

export const removeUser = () => {
  return {
    type: USER_REMOVED,
  };
};

const getUrl = "https://jsonplaceholder.typicode.com/todos/1";
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
      "Content-type": "application/json",
    },
  });

  if (!response.ok) throw response;
  const user = await response.json();
  user.title = "WE POSTED A USER!";
  console.log("POSTED THE USER ------------------ ", user);
  dispatch(addUser(user));
};

//Todo: build a case for USER_ADDED
export default function userReducer(state = {}, action) {
  switch (action.type) {
    case USER_REMOVED:
      return {};
    default:
      return state;
  }
}

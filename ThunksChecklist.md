# STEP BY STEP ON SETTING UP THUNKS

## Step 1: Importing

```
npm install redux-thunk
```

```js
//store/index.js
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux;
```

You will most likely have createStore, combineReducers, and compose imported alongside applyMiddleware

**applyMiddleware**

## Step 2: Applying the middleware

The applyMiddleware function must take the thunk middleware as the first parameter because it handles using thunk action creators (action creators of type function which then dispatch POJO actions with a mandatory "type" property)

```js
if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}
```

## Step 3: Building The Thunk Action Creator

Remember a thunk, simply put, is a function that is returning another function which dispatches our actions. a few reminders while building them.

```js
export const fetchUser = () => async (dispatch) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  if (!response.ok) throw response;
  const user = await response.json();
  user.message = "WE GOT A USER!";
  dispatch(addUser(user));
  return user;
};
```


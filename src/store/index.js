// Import thunk and applyMiddleware
import { createStore, combineReducers, compose } from "redux";

//Todo: add user reducer
const rootReducer = combineReducers({});

let enhancer;

//Todo: add the thunk middleware
if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;

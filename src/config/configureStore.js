import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./rootReducers";

export default function configureStore(initialState) {
  const appliedMiddlewares = [thunk];
  const createStoreWithMiddleware = compose(
    applyMiddleware(...appliedMiddlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  return createStoreWithMiddleware(rootReducers);
}

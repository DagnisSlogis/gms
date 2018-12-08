import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./assets/styles/index.css";
import App from "./common/App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./config/configureStore";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import "antd/dist/antd.css";
import "./lib/theme.css";
import "./lib/vendor.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootreduser";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app: JSX.Element = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();

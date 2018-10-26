import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
// import store from "./store";

render(
  // <Provider>
    <App />,
  // </Provider>,
  document.getElementById("root")
);

module.hot.accept(["./App.jsx"], () => {
  const NextApp = require("./App.jsx").default;
  render(<NextApp />, document.getElementById("root"));
});

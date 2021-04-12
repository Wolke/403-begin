import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { title } from "./const";
function App() {
  return (
    <Button variant="contained" color="primary">
      {title}
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));

import React from "react";
import ReactDOM from "react-dom";
import UserFormComponent from "./components/formUserDetails";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <UserFormComponent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

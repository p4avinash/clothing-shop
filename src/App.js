import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route } from "react-router-dom";

const HatsPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>This is the hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/shop/hats" component={HatsPage} />
    </div>
  );
}

export default App;

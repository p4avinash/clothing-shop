import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shops/shop-page";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signIn-and-signUp/signIn-and-signUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

export default App;

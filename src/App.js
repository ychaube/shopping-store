import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { auth } from "./configs/firebase/firebase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthPage from "./pages/authentication/authentication.component";

function App() {
  const [currentUser, setCurrentUser] = useState("");

  auth.onAuthStateChanged((userDetails) => {
    if (!userDetails) {
      setCurrentUser(null);
      return;
    }

    const {
      multiFactor: { user },
    } = userDetails;

    setCurrentUser(user);
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;

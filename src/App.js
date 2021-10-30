import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import { auth, createUserProfile } from "./configs/firebase/firebase.utils";

import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthPage from "./pages/authentication/authentication.component";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfile(userAuth);

      userRef.onSnapshot((snapshot) => {
        setCurrentUser({
          id: snapshot.id,
          ...snapshot.data(),
        });
      });
    }
    setCurrentUser(userAuth);
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

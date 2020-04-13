import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GranolaForm from "./components/form";
import Success from "./components/success";
import Welcome from "./pages/welcome";
import Recipes from "./pages/viewRecipes";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: pink;
  }
`;

function App() {
  return (
    <div className="App">
      <h1>Granola Grazer</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/create" component={GranolaForm} />
          <Route exact path="/view" component={Recipes} />
          <Route path="/complete" component={Success} />
        </Switch>
      </Router>
      <GlobalStyle />
    </div>
  );
}

export default App;

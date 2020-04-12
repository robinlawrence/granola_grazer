import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import GranolaForm from "./components/form";
import Success from "./components/success";

function App() {
  return (
    <div className="App">
      <h1>Granola Grazer</h1>
      <Router>
        <GranolaForm />
        <Route path="/complete" component={Success} />
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <Link to="/create">Create Recipe</Link>
      <Link to="/view">View Recipes</Link>
    </div>
  );
}

export default Welcome;

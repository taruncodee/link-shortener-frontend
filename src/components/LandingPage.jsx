import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Link to="/about">
        <h1 className="text-8xl text-orange-100">CLICK ABOUT</h1>
      </Link>
    </div>
  );
};

export default LandingPage;

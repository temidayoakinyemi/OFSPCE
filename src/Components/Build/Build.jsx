import React from "react";
import "./Build.css";

const Build = () => {
  return (
    <div className="container build">
      <div className="allbuild">
          <h1 className="buildh1">
            What Will You <span className="buildspan">Build?</span>
          </h1>
          <p className="buildp">
            Method handles compliance requirements, identity verification, <br />
            and bank partnerships so you can focus on building.
          </p>
          <button className="buildbtn">Get Started</button>
      </div>
    </div>
  );
};

export default Build;

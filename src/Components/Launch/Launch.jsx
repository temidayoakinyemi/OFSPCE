import React from "react";
import "./Launch.css";
import profileicon from "../../assets/profileicon.png";
import strategyicon from "../../assets/strategyicon.png";
import transfericon from "../../assets/transfericon.png";
import person from "../../assets/person.png";
import mark from "../../assets/mark.svg";
const Launch = () => {
  return (
    <div className="container launch">
      <h1 className="launchh1">
        Build Today Launch <br /> Tomorrow
      </h1>
      <div className="all1">
        <div className="profile1">
          <img src={profileicon} className="profile" />
          <h2 className="profileh2">Create a User</h2>
          <h3 className="profileh3">Onboard Your Users Using Our API</h3>
          <p className="profilep">
            Verify their identity with our automatic KYC & AML screens.
          </p>
        </div>
        <div className="strategy1">
          <img src={strategyicon} className="strategy" />
          <h2 className="strategyh2">Connect Accounts</h2>
          <h3 className="strategyh3">Link User's Financial Accounts</h3>
          <p className="strategyp">
            Checking accounts, student loans, and mortgages can all be added.
          </p>
        </div>
        <div className="transfer1">
          <img src={transfericon} className="transfer" />
          <h2 className="transferh2">Connect Accounts</h2>
          <h3 className="transferh3">Link User's Financial Accounts</h3>
          <p className="transferp">
            Checking accounts, student loans, and mortgages can all be added.
          </p>
        </div>
      </div>
      <div className="allpersonmark">
          <img src={person} className="personimg" />
          <div className="markall">
              <h1 className="personh1">
                Designed <br /> for Developers
              </h1>
              <p className="personp">
                <span className="personpspan">It's that simple.</span> With just a few
                lines of code, you <br /> can start moving money on behalf of your
                users.
              </p>
              <p className="markp1">
                <span className="imgspan">
                  <img src={mark} className="imgmark" />
                </span>
                Build quickly. No banking partner required.
              </p>
              <p className="markp">
                <span className="imgspan">
                  <img src={mark} className="imgmark" />
                </span>
                No long-term or expensive agreements.
              </p>
              <p className="markp">
                <span className="imgspan">
                  <img src={mark} className="imgmark" />
                </span>
                Be up and running in an afternoon.
              </p>
          </div>
      </div>
    </div>
  );
};

export default Launch;

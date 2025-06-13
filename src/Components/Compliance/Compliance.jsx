import React from "react";
import "./Compliance.css";
import mark from "../../assets/mark.svg";
import person from "../../assets/person.png";

const Compliance = () => {
  return (
    <div className="container compliance">
      <div className="allcompliance">
        <div className="allcompliancetext">
          <h1 className="complianceh1">
            Compliance Made <br /> Easy
          </h1>
          <p className="compliancep">
            <span className="compliancepspan">Method handles compliance </span>
            requirements, identity <br /> verification, and bank partnerships so
            you can focus <br /> on building.
          </p>
          <p className="compliancemarkp">
            <span className="imgspan">
              <img src={mark} className="complianceimgmark" />
            </span>
            Real-time risk assessment for every payment.
          </p>
          <p className="compliancemarkp">
            <span className="imgspan">
              <img src={mark} className="complianceimgmark" />
            </span>
            Automatic KYC & AML verifications.
          </p>
          <p className="compliancemarkp">
            <span className="imgspan">
              <img src={mark} className="complianceimgmark" />
            </span>
            Lowest risk of fraud, failure payments.
          </p>
        </div>
        <img src={person} alt="" className="complianceperson" />
      </div>
    </div>
  );
};

export default Compliance;

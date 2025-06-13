import React from 'react'
import "./Hero.css"
import heroimg1 from "../../assets/heroimg1.png"
import heroimg2 from "../../assets/heroimg2.png";

const Hero = () => {
  return (
    <div className="container hero">
      <div className="all">
        <div className="alltext">
          <h1 className="heroh1">
            The Easiest <br /> Way to <span className="h1span">Pay</span> Your{" "}
            <br /> User’s Credit Card
          </h1>
          <p className="herop">
            Method allows developers to make bank transfers,
            <br /> move money, and pay debts on behalf of their users <br /> all
            through a single API
          </p>
          <button className="herobutton">Get Started</button>
        </div>
        <div className="allimg">
          <img src={heroimg1} className='heroimg1' />
          <img src={heroimg2} className='heroimg2' />
        </div>
      </div>
    </div>
  );
}

export default Hero
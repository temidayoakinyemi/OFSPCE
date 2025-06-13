import React from "react";
import "./Testimonial.css";
import profilepic from "../../assets/profilepic.svg";
import profilepic2 from "../../assets/profilepic2.svg";
import profilepic3 from "../../assets/profilepic3.svg";

const Testimonial = () => {
  return (
    <div className="container testimonial">
      <div className="alltexttestimonial">
        <h1 className="testimonialh1">
          What Our Client <br /> Saying
        </h1>
        <p className="testimonialp">
          <span className="testimonialpspan">
            Method handles compliance requirements,
          </span>{" "}
          <br /> identity verification, and bank partnerships so <br /> you can
          focus on building.
        </p>
      </div>
      <div className="alltestimonialtesti">
          <div className="testimonialdiv1">
            <div className="testimonialdiv1all">
              <img src={profilepic} className="profilepic" />
              <h2 className="testimonialdiv1h2">
                Jose Bethancourt <br />{" "}
                <span className="testimonialdiv1h2span">CEO Grad Joy</span>
              </h2>
            </div>
            <p className="testimonialdiv1p">
              Method saved the day! We were able to quickly integrate and provide a
              full experience to our users.
            </p>
            <p className="testimonialdiv1p2">Jose Bethancourt</p>
          </div>
          {/*  */}
          <div className="testimonialdiv2">
            <div className="testimonialdiv1all">
              <img src={profilepic2} className="profilepic2" />
              <h2 className="testimonialdiv1h22">
                Kevin Griffiths <br />{" "}
                <span className="testimonialdiv1h2span2">Founder</span>
              </h2>
            </div>
            <p className="testimonialdiv1p22">
              We had to send checks to pay our users' credit cards. Method has
              improved our user experience.
            </p>
            <p className="testimonialdiv1p222">Kevin Griffiths </p>
          </div>
          {/*  */}
          <div className="testimonialdiv22">
            <div className="testimonialdiv1all">
              <img src={profilepic3} className="profilepic2" />
              <h2 className="testimonialdiv1h222">
                Olivia Sacks <br />{" "}
                <span className="testimonialdiv1h2span22">
                  VP @ Global Benefits Co
                </span>
              </h2>
            </div>
            <p className="testimonialdiv1p2222">
              Our financial wellness offering lacked the ability to easily move
              money on behalf of our users.
            </p>
            <p className="testimonialdiv1p22222">OliviaSacks</p>
          </div>
      </div>
    </div>
  );
};

export default Testimonial;

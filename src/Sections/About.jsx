import React from "react";

import F from "../Images/f.jpg";

import Earth from "../Images/About/earth.jpg";
import Edit from "../Images/About/Edit.jpg";
import Group from "../Images/About/group.jpg";
import Sticky from "../Images/About/Sticky.jpg";

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="image">
          <img src={F} alt="" />
        </div>
        <div className="info">
          <h2>About Us</h2>
          <p>
            This just a test for html and those word has no meaning so you can
            go without reading it and thank you so much for wasting your time .
            This just a test for html and those word has no meaning so you can
            go without reading it and thank you so much for wasting your time.
          </p>
          <p>
            This just a test for html and those word has no meaning so you can
            go without reading it and thank you so much for wasting your time.
          </p>
          <div className="hobbies">
            <div className="content">
              <div className="icon">
                <img src={Earth} alt="" />
              </div>
              <div className="text">
                <h3>Web design</h3>
                <p>
                  This just a test for html and those word has no meaning so you
                  can go
                </p>
              </div>
            </div>
            <div className="content">
              <div className="icon">
                <img src={Edit} alt="" />
              </div>
              <div className="text">
                <h3>Graphic design</h3>
                <p>
                  This just a test for html and those word has no meaning so you
                  can go
                </p>
              </div>
            </div>
            <div className="content">
              <div className="icon">
                <img src={Group} alt="" />
              </div>
              <div className="text">
                <h3>Marketing</h3>
                <p>
                  This just a test for html and those word has no meaning so you
                  can go
                </p>
              </div>
            </div>
            <div className="content">
              <div className="icon">
                <img src={Sticky} alt="" />
              </div>
              <div className="text">
                <h3>SEO</h3>
                <p>
                  This just a test for html and those word has no meaning so you
                  can go
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

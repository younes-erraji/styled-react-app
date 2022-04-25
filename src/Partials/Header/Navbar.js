import React from "react";
import {
  Nav,
  NavH2,
  NavH2Span,
  NavUl,
  NavLi,
  NavLiAnchor,
} from "./Navbar-styled";

function Navbar() {
  return (
    <Nav>
      <div className="container">
        <NavH2>
          Out Of<NavH2Span> The World</NavH2Span>
        </NavH2>
        <NavUl>
          <NavLi className="active">
            <NavLiAnchor className="active" href="#">
              Home
            </NavLiAnchor>
          </NavLi>
          <NavLi>
            <NavLiAnchor href="#about">About Us</NavLiAnchor>
          </NavLi>
          <NavLi>
            <NavLiAnchor href="#skills">Skills</NavLiAnchor>
          </NavLi>
          <NavLi>
            <NavLiAnchor href="#resume">Resume</NavLiAnchor>
          </NavLi>
          <NavLi>
            <NavLiAnchor href="#testimonials">Testimonials</NavLiAnchor>
          </NavLi>
          <NavLi>
            <NavLiAnchor href="#projects">Projects</NavLiAnchor>
          </NavLi>
          <NavLi>
            <NavLiAnchor href="#contact">Contact Us</NavLiAnchor>
          </NavLi>
        </NavUl>
      </div>
    </Nav>
  );
}

export default Navbar;

import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span>Copyright &copy; 2020 OutOfTheWorld.</span>
        <ul>
          <li>
            <i className="fa fa-facebook-square fa-2x"></i>
          </li>
          {/*
          <li><i className="fa fa-facebook-square fa-lg"></i></li>
          <li><i className="fa fa-twitter-square fa-2x"></i></li>
          <li><i className="fa fa-linkedin-square fa-5x"></i></li>
          <li><i className="fa fa-google-plus-square"></i></li>
          */}
          <li>
            <i className="fa fa-twitter-square fa-2x"></i>
          </li>
          <li>
            <i className="fa fa-linkedin-square fa-2x"></i>
          </li>
          <li>
            <i className="fa fa-google-plus-square fa-2x"></i>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="info">
          <h2>Contact Us</h2>
          <p>
            This just a test for html and those word has no meaning so you can
            go without reading it. This just a test for html and those word has
            no meaning so you can go without reading it and thank you so much
            for wasting your time
          </p>
          <p>
            123 Street Name
            <br />
            Cairo
            <br />
            SK Area
          </p>
          <p>
            <strong>Email : </strong>Younes.Erraji@gmail.com
            <br />
            <strong>Phone : </strong>0654658665
          </p>
        </div>
        <form className="form">
          <label>Name * </label>
          <input type="text" />
          <label>Email Address * </label>
          <input type="email" />
          <label>Phone * </label>
          <input type="text" />
          <label>Message * </label>
          <textarea></textarea>
          <input type="submit" value="Contact Us" />
        </form>
      </div>
    </div>
  );
}

export default Contact;

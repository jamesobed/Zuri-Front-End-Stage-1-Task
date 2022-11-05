import React from "react";
import { ContactStyle } from "../styles/ContactStyles";

function Contact() {
  return (
    <ContactStyle>
      <div className="bigContainer">
        <div className="smallContainer">
          <div className="contentContainer">
            <div id="header">
              <p className="title">Contact Me</p>
              <p className="sentence">
                Hi there, contact me to ask me about anything you have in mind.
              </p>
            </div>
            <form className="contactForm">
              {/* <form> */}
              <div className="inputField">
                <div className="name">
                  <div className="firstName">
                    <label>First name</label>
                    <input
                      type="text"
                      className="w100"
                      name="fname"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="firstName">
                    <label>Last name</label>
                    <input
                      type="text"
                      className="w100"
                      name="lname"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="emailContainer">
                  <div className="email">
                    <label id="lemail">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="yourname@email.com"
                    />
                  </div>
                </div>
                <div className="message">
                  <label>Message</label>
                  <textarea id="message" name="w3review">
                    Send me a message and I'll reply you as soon as possible...
                  </textarea>
                </div>
                <div className="agreement">
                  <input type="checkbox" id="agreement" name="agreement" />

                  <label>
                    You agree to providing your data to {"sirObed"} who may
                    contact you.
                  </label>
                </div>
              </div>
              <button className="formButton">Send message</button>
              {/* </form> */}
            </form>
          </div>
        </div>
      </div>
    </ContactStyle>
  );
}

export default Contact;

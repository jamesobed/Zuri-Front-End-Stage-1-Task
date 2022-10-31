import React from "react";
import FooterStyle from "../styles/Footer";
import ingresive from "../assets/svg/ingresive.svg";
import Zurilogo from "../assets/svg/Zurilogo.svg";
function Footer() {
  return (
    <FooterStyle>
      <div className="FooterContainer">
        <div className="FooterLogo">
          <img src={ingresive} alt="ingressive" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src={Zurilogo} alt="Zuri logo" id="4g" />
        </div>
      </div>
    </FooterStyle>
  );
}

export default Footer;

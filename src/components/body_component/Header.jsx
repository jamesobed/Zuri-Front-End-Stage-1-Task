// import { FaCamera } from "react-icons/fa";

import ProfileStyle from "../../styles/Header";
import passport from "../../assets/img/passport.png";
import ArrowButton from "../../assets/svg/ArrowButton.svg";
import mobileButton from "../../assets/svg/mobileButton.svg";

function Header() {
  return (
    <ProfileStyle>
      <>
        <img
          src={passport}
          alt="Profile "
          id="profileImage"
          title="Obed James Profile pic"
        />
        {/* <p className="hoverCam">{<FaCamera />}</p> */}
      </>

      <small id="topCircle">
        {/* <div className="webView"> */}
        <img className="webView" src={ArrowButton} alt="ArrowButton" />
        {/* </div> */}

        {/* <div className="mobileView"> */}
        <img className="mobileView" src={mobileButton} alt="mobileButton" />
        {/* </div> */}
        {/* <img src={ArrowButton} alt="" />
          <img src={mobileButton} alt="" /> */}
      </small>
      <div className="Details">
        <p id="name">Obed James</p>
        <small id="slack">sirObed</small>
      </div>
    </ProfileStyle>
  );
}

export default Header;

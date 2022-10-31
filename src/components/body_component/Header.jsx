// import { FaCamera } from "react-icons/fa";
import camera from "./../../assets/svg/camera.svg";
import ProfileStyle, { ProfileImageStyle } from "../../styles/Header";
import passport from "../../assets/img/passport.png";
import ArrowButton from "../../assets/svg/ArrowButton.svg";
import mobileButton from "../../assets/svg/mobileButton.svg";

function Header() {
  return (
    <ProfileStyle>
      <ProfileImageStyle>
        <img
          src={passport}
          alt="Profile "
          id="profileImage"
          title="Obed James Profile pic"
        />
        <img
          src={camera}
          alt=""
          id="profileBackground"
          title="Obed James Profile pic"
        />
      </ProfileImageStyle>

      <small id="topCircle">
        {/* <div className="webView"> */}
        <img
          className="webView"
          src={ArrowButton}
          alt="ArrowButton"
          title="web view button icon"
          width={50}
        />
        {/* </div> */}

        {/* <div className="mobileView"> */}
        <img
          className="mobileView"
          src={mobileButton}
          alt="mobileButton"
          title="mobile view button icon"
        />
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

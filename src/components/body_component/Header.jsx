import ProfileStyle from "../../styles/Header";
import passport from "../../assets/img/passport.png";
import ArrowButton from "../../assets/svg/ArrowButton.svg";
import mobileButton from "../../assets/svg/mobileButton.svg";

function Header() {
  return (
    <ProfileStyle>
      <img src={passport} alt="Profile " id="profileImage" />
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
        <small id="name">Obed James</small>
        <small id="slack">sirObed</small>
      </div>
    </ProfileStyle>
  );
}

export default Header;

import SocialStyled from "../../styles/Social";
import slack from "../../assets/svg/slack.svg";
import github from "../../assets/svg/github.svg";
function Social() {
  return (
    <SocialStyled>
      <div className="content">
        <div className="socialIcon">
          <img src={slack} alt="slack" />
          <img src={github} alt="github" />
        </div>
      </div>
    </SocialStyled>
  );
}

export default Social;

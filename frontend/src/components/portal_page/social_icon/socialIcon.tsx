import "./socialIcon.scss";
import googleIcon from "../../../assets/portal_page/google_icon.svg";
import facebookIcon from "../../../assets/portal_page/facebook_icon.svg";

export default function socialIcon() {
  return (
    <>
      <div className="social_icon">
        <img
          id="google_icon"
          src={googleIcon}
          alt="icon for google authentication"
        />
      </div>
      <div className="social_icon">
        <img
          id="facebook_icon"
          src={facebookIcon}
          alt="icon for facebook authentication"
        />
      </div>
    </>
  );
}

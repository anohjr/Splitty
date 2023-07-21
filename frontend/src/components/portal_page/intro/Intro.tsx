import React from "react";
import splittyLogo from "../../../assets/splitty_logo.svg";
import nightModeWhite from "../../../assets/portal_page/night_mode_white.svg";
import "./Intro.scss";

export default function Intro({ signInUp, setSignInUp }) {
  return (
    <div id="intro">
      <div id="middle_intro">
        <img src={splittyLogo} alt="application logo"></img>
        <div id="appSubtitle">" Good accounts make best friends "</div>
        <div id="signupButton" onClick={() => setSignInUp(!signInUp)}>{signInUp ? "Sign up" : "Sign In"}</div>
      </div>
      <div id="introFooter">
        <img src={nightModeWhite} alt="night / light mode logo"></img>
        <div>Terms & Conditions</div>
      </div>
    </div>
  );
}

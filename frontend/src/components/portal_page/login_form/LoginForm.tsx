import React from "react";
import { useState } from "react";
import "./LoginForm.scss";
import googleIcon from "../../../assets/portal_page/google_icon.svg";
import facebookIcon from "../../../assets/portal_page/facebook_icon.svg";
import emailLogo from "../../../assets/portal_page/email_logo.svg";
import passwordLogo from "../../../assets/portal_page/password_logo.svg";
import LoginInput from "./login_input/LoginInput";

export default function LoginForm() {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  const loginSubmit = () => {
    return;
  };

  return (
    <div id="loginForm">
      <div id="sign_in_header">
        <div id="signIn">Sign in</div>
        <div id="socials">
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
        </div>
      </div>
      <form onSubmit={loginSubmit} id="login_inputs">
        <LoginInput
          type="email"
          value={email}
          setValue={setEmail}
          logo={emailLogo}
        />
        <LoginInput
          type="password"
          value={password}
          setValue={setPassword}
          logo={passwordLogo}
        />
        <input id="submit_login" type="submit" value="Log in" />
        <div id="forgot_password">Forgot password ?</div>
      </form>
      <div id="loginFooter">Privacy Policy</div>
    </div>
  );
}

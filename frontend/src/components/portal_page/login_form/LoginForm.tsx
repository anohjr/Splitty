import React from "react";
import { useState } from "react";
import "./LoginForm.scss";
import emailLogo from "../../../assets/portal_page/email_logo.svg";
import passwordLogo from "../../../assets/portal_page/password_logo.svg";
import LoginInput from "./login_input/LoginInput";
import SocialIcon from "../social_icon/socialIcon";
import FormFooter from "../form_footer/formFooter";

export default function LoginForm() {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  const loginSubmit = () => {
    return;
  };

  return (
    <div className="form">
      <div className="form_header">
        <div className="formTitle">Sign in</div>
        <div className="socials">
          <SocialIcon />
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
      <FormFooter />
    </div>
  );
}

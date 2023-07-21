import React from "react";
import { useState } from "react";
import "./LoginForm.scss";
import userLogo from "../../../assets/portal_page/user_logo.svg";
import passwordLogo from "../../../assets/portal_page/password_logo.svg";
import FormInput from "../form_input/FormInput";
import SocialIcon from "../social_icon/socialIcon";

export default function LoginForm({ signInUp }) {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);

  const loginSubmit = () => {
    return;
  };

  return (
    <>
      <div
        className={
          "form_container" + (signInUp ? " login_form" : " login_form_none")
        }
      >
        <div className="form_header">
          <div className="formTitle">Sign in</div>
          <div className="socials">
            <SocialIcon />
          </div>
        </div>
        <form onSubmit={loginSubmit} id="form_inputs">
          <FormInput
            type="email"
            value={email}
            setValue={setEmail}
            placeHolder="Email"
            logo={userLogo}
          />
          <FormInput
            type="password"
            value={password}
            setValue={setPassword}
            placeHolder="Password"
            logo={passwordLogo}
          />
          <input className="submit_form" type="submit" value="Log in" />
          <div id="forgot_password">Forgot password ?</div>
        </form>
      </div>
    </>
  );
}

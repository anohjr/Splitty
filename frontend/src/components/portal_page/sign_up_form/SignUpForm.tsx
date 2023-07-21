import React from "react";
import { useState } from "react";
import "./SignUpForm.scss";
import SocialIcon from "../social_icon/socialIcon";
import FormInput from "../form_input/FormInput";
import userLogo from "../../../assets/portal_page/user_logo.svg";
import mailLogo from "../../../assets/portal_page/mail_logo.svg";
import passwordLogo from "../../../assets/portal_page/password_logo.svg";

export default function SignInForm({ signInUp }) {
  const [userName, setUserName] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const [userConfirmPassword, setUserConfirmPassword] = useState(null);

  const signUpSubmit = () => {
    return;
  };

  return (
    <>
      <div
        className={
          "form_container" + (signInUp ? " signupForm_none" : " signupForm")
        }
      >
        <div className="form_header">
          <div className="formTitle">Sign up</div>
          <div className="socials">
            <SocialIcon />
          </div>
        </div>
        <form onSubmit={signUpSubmit} id="form_inputs">
          <FormInput
            type="text"
            value={userName}
            setValue={setUserName}
            placeHolder="Name"
            logo={userLogo}
          />
          <FormInput
            type="mail"
            value={userMail}
            setValue={setUserMail}
            placeHolder="Email"
            logo={mailLogo}
          />
          <FormInput
            type="password"
            value={userPassword}
            setValue={setUserPassword}
            placeHolder="Password"
            logo={passwordLogo}
          />
          <FormInput
            type="password"
            value={userConfirmPassword}
            setValue={setUserConfirmPassword}
            placeHolder="Confirm Password"
            logo={passwordLogo}
          />
          <input className="submit_form" type="submit" value="Register" />
        </form>
      </div>
    </>
  );
}

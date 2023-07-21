import React from "react";
import "./Form.scss";
import LoginForm from "../login_form/LoginForm";
import SignUpForm from "../sign_up_form/SignUpForm";
import FormFooter from "../form_footer/formFooter";

export default function Form({ signInUp }) {
  return (
    <div className="form">
      <div className="form_overflow">
        <LoginForm signInUp={signInUp}/>
        <SignUpForm signInUp={signInUp}/>
      </div>
      <FormFooter />
    </div>
  );
}

import React from "react";
import Intro from "../components/portal_page/intro/Intro";
import LoginForm from "../components/portal_page/login_form/LoginForm";

export default function Portal() {
  return (
    <div id="portalBody" className="pageBody">
      <Intro />
      <LoginForm />
    </div>
  );
}

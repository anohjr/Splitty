import React from "react";
import { useState } from "react";
import Intro from "../components/portal_page/intro/Intro";
import Form from "../components/portal_page/form/form";

export default function Portal() {
  const [signInUp, setSignInUp] = useState(true); // if true -> dislay sign in form

  return (
    <div id="portalBody" className="pageBody">
      <Intro signInUp={signInUp} setSignInUp={setSignInUp} />
      <Form signInUp={signInUp}/>
    </div>
  );
}

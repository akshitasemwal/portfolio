import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon onClick={event =>  window.location.href='https://www.linkedin.com/in/akshita-semwal-517b55206/'}/>
        <GithubIcon onClick={event =>  window.location.href='https://github.com/akshitasemwal'}/>
      </div>
    </div>
  );
}

export default Footer;

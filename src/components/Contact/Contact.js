import React from "react";
import { Element } from "react-scroll";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./contact.css"
function Contact() {
  return (
    <Element name="Contact" className="contact" id="contact">
      <h1>Contact</h1>
      <div className="contact-container">
        <p>
          Email : <span>vijaygopal474@gmail.com</span>
        </p>
        <p>
          Github : <span>@vijaygopal27</span>
        </p>
        <div className="contact-icons">
          <a href="https://www.linkedin.com/in/vijay-gopal-9a5aa1193/">
            <IconButton>
            <LinkedInIcon />
            </IconButton>
          </a>
          <a href="https://github.com/Vijaygopal27">
            <IconButton>
            <GitHubIcon/>
            </IconButton>
          </a>

        </div>
      </div>
    </Element>
  );
}

export default Contact;

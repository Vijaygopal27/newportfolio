import React from 'react';
import {Link} from "react-scroll";
import "./topcontent.css"

function TopContent() {
  return (
    <div className="top-content">
    <div className="top-content-container">
    <h1>Mr.Vijay Gopal K</h1>
    <p>A Professional Web Developer.</p>
    <a href='https://drive.google.com/file/d/14Cu9rOe0g0-ZghbAblrznec6Vj1KAsC0/view?usp=sharing'>
        <button className='top-content-downloadButton'>Download CV</button>
    </a>
    <Link to="Projects">
        <button className='top-content-workButton'>My Works</button>
    </Link>
    </div>
    </div>
  )
}

export default TopContent
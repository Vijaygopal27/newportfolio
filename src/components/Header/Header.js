import React from 'react';
import {Link} from "react-scroll";
import "./header.css"

function Header() {
  return (
    <div className='header'>
        <div className='header-left'>
            <h1>Develop<span>er</span></h1>
            </div> 
        <div className='header-right'>
            
            <Link to='About' smooth={true} duration={500}>
                <h4>
                    About Me
                </h4>
            </Link>
    
            <Link to='Skills' smooth={true} duration={500}>
                <h4>
                    Skills
                </h4>
                </Link>
                <Link to='Projects' smooth={true} duration={500}>
                <h4>
                    Projects
                </h4>
            </Link>
            <Link to='Contact' smooth={true} duration={500}>
                <h4>
                Contact
                </h4>
            </Link>
            {/* <h4 className='header-rightButton'>Join with Me</h4> */}
            </div> 
            

    </div>
  )
}

export default Header
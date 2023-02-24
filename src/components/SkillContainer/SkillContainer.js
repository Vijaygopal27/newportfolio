import React from 'react';
import "./skillcontainer.css"
import { Element } from 'react-scroll';
import skillset from "../../assets/skillset.png"
 import LinearProgress from '@mui/material/LinearProgress';
 import "./skillcontainer.css"
function SkillContainer() {
  return (
    <Element name='Skills' className="skillcontainer" id="skills">
        <div className="skillcontainer-img">
            <img src={skillset} alt='' />
        </div>
        <div className="skillcontainer-text">
            <h2>SkillSets</h2>
            
            <div className="skillcontainer-skillset">
              <h5>HTML</h5>
              <div className="skillcontainer-slider1">
                <LinearProgress variant="determinate" value={80}/>
              </div>
            </div>
            <div className="skillcontainer-skillset">
              <h5>CSS</h5>
              <div className="skillcontainer-slider2">
                <LinearProgress variant="determinate" value={60}/>
              </div>
            </div>
            <div className="skillcontainer-skillset">
              <h5>Javascript</h5>
              <div className="skillcontainer-slider3">
                <LinearProgress variant="determinate" value={70}/>
              </div>
            </div>
            <div className="skillcontainer-skillset">
              <h5>React</h5>
              <div className="skillcontainer-slider4">
                <LinearProgress variant="determinate" value={65}/>
              </div>
            </div>
            <div className="skillcontainer-skillset">
              <h5>NodeJS</h5>
              <div className="skillcontainer-slider5">
                <LinearProgress variant="determinate" value={40}/>
              </div>
            </div>
        </div>
    </Element>
  )
}

export default SkillContainer
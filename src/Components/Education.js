import React from 'react'
import { education } from '../config'
import EducationItem from './EducationItem'
import Fade from 'react-reveal'
import "../css/education.scss"

function Education() {
  return (
    <Fade left duration={1000} distance="40px">

  <div className='edu-div' id="education">
    <h1>Education</h1>
    <div className='edu-items'>
        {education.map(item => {
            return <EducationItem name={item.name} degree={item.degree} date={item.date} grade={item.grade} image={item.photo} items={item.items} />
        })}
    </div>
    
    </div>

    </Fade>
    
  )
}

export default Education
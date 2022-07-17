import React from 'react'
import Fade from 'react-reveal'
import Stacks from './Stacks'
import DisplayLottie from './DisplayLottie'
import codingPerson from "../Assets/codingPerson.json"
import { skills_section } from '../config'
import "../css/skills.scss"

export default function Skills() {
  return (
    <div className='skills-main' id="skills">
        <Fade left duration={1000}>
            <div className='animate-div'>
                
                <DisplayLottie animation_data={codingPerson}/>
            </div>
        </Fade>
        <Fade right duration={1000}>
            <div className='skills-text'>
                <h1 className='skills-head'>{skills_section.title}</h1>
                <p className='skills-sub sub'>{skills_section.subtitle}</p>
                <Stacks />
                <div className='skills-list'>
                    {
                        skills_section.skills.map(skill => {
                            return(
                            <p className='skill sub'>
                                {skill}
                            </p>)
                        })
                    }
                </div>

            </div>

        </Fade>


    </div>
  )
}

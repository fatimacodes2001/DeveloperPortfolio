import React, { useEffect } from 'react'
import Fade from 'react-reveal'
import ProjectItem from './ProjectItem'
import { projects } from '../config'
import "../css/project.scss"
import useResize from "../Hooks/Resize"


export default function Projects() {
  const { initResize } = useResize();

  useEffect(() => {
    initResize(".project-item");
   },[])


  return (
    <Fade left duration={1000} distance="200px">
        <div className='project-main'>
            <h1>Projects</h1>
            <div className='projects'>
                {projects.map(item => {
                    return <ProjectItem name={item.name} details={item.details} link={item.link}/>
                })}
            </div>
            <button>SEE MORE</button>
        </div>
    </Fade>
  )
}

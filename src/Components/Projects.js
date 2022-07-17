import React, { useEffect } from 'react'
import Fade from 'react-reveal'
import ProjectItem from './ProjectItem'
import { projects, github_link } from '../config'
import "../css/project.scss"
import useResize from "../Hooks/Resize"


export default function Projects() {
  const { initResize } = useResize();

  useEffect(() => {
    initResize(".project-item");
  
   },[])


  return (
    <Fade left duration={1000} distance="200px">
        <div className='project-main' id="projects" >
            <h1>Projects</h1>
            <div className='projects'>
                {projects.map(item => {
                    return <ProjectItem name={item.name} details={item.details} link={item.link}/>
                })}
            </div>
            <a href={github_link}><button className='more-projects'>SEE MORE PROJECTS</button></a>
        </div>
    </Fade>
  )
}

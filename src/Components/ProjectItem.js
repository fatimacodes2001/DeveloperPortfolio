import React from 'react'
import "../css/project.scss"

export default function Projects(props) {

    function projectOnClick(){
        console.log("Clicked")
    }
  return (
    <div className='project-item' onClick={projectOnClick}>
        <h4 className='project-title'>{props.name}</h4>
        <p className='project-details'>{props.details}</p>
    </div>
  )
}

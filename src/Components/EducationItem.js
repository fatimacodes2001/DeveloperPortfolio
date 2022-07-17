import React from 'react'
import "../css/edu_item.scss"


export default function EducationItem(props) {
  return (
    <div className='edu-component'>
      <div className='edu-img-div'>
      <img alt={props.name} className='edu-img' src={require("../Assets/education/" + props.image)}/>
      </div>
      
      <div className='edu-text'>
        <h2 className='edu-head'>{props.name}</h2>
        <h3 className='edu-second-head'>{props.degree}</h3>
        <h5 className='edu-date'>{props.date}</h5>

        <h3 className='edu-grade-head'>Grade: {props.grade}</h3>

        <ul className='edu-items'>
          {props.items.map(item => {
            return (
              <li className='edu-item'>{item}</li>
            )
          })}
        </ul>

      </div>
    </div>
  )
}

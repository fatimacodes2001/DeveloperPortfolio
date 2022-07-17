import React, { useEffect } from 'react'
import '../css/work.scss'

export default function WorkItem(props) {

    useEffect(() => {
        console.log("Here")
    },[])
    
  return (
<div className='work-main-item'>
    <div className='bg-div'></div>
    <div className='work-img-div'>
    <h4 className='company-name'>{props.name}</h4>
    <img className="company-img" alt={props.name} src={require("../Assets/work/" + props.image)}/>
    </div>
    <div className='work-text'>
        <h4 className='role'>{props.role}</h4>
        <h4 className='work-date'>{props.date}</h4>
        <p className='work-details'>{props.details}</p>
    </div>
</div>
  )
}

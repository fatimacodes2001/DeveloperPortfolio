import React from 'react'
import "../css/stacks.scss"
import typescript from "../Assets/icons/typescript.svg"
import graphql from "../Assets/icons/graphql.svg"
import flutter from "../Assets/icons/flutter.svg"

export default function Stacks() {
  return (
    <div className="dev-icons">
      <a className='dev-icon'>
        <i className='html fab fa-html5'></i>
        
        
      </a>

      <a className='dev-icon'>
        <i className='css fab fa-css3-alt'></i>
      </a>

      <a className='dev-icon'>
        <i className='sass fab fa-sass'></i>
      </a>

      
      <a className='dev-icon'>
        <i className='js fab fa-js'></i>
      </a>
      <a className='dev-icon'>
        <i className='react fab fa-react'></i>
      </a>
      <a className='dev-icon'>
        <i className='node fab fa-node'></i>
      </a>
      <a className='dev-icon'>
        <i className='npm fab fa-npm'></i>
      </a>
      <a className='dev-icon'>
        <i className='sql fas fa-database'></i>
      </a>
      <a className='dev-icon'>
        <i className='aws fab fa-aws'></i>
      </a>
      <a className='dev-icon'>
        <i className='fire fas fa-fire'></i>
      </a>
      <a className='dev-icon'>
        <i className='python fab fa-python'></i>
      </a>
      <a className='dev-icon'>
        <i className='docker fab fa-docker'></i>
      </a>
      <a className='dev-icon'>
        <i className='db fa fa-database'></i>
      </a>


      <a className='dev-icon'>
        <img className='im flutter' src={flutter}></img>
      </a>

      <a className='dev-icon'>
        <img classname="im ts" src={typescript}></img>
      </a>

      <a className='dev-icon'>
        <img classname="im graph" src={graphql}></img>
      </a>
    </div>
  )
}

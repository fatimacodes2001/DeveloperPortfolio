import React from 'react'
import "../css/greeting.scss"
import { Fade } from 'react-reveal'
import SocialMedia from './SocialMedia'
import { greeting } from '../config'
import emoji from "react-easy-emoji";
import image from "../Assets/fatima.jpg"

export default function Greeting() {
  function onClickHire(){
    window.open(greeting.upwork_link, "_blank")

  }

  function onClickResume(){
    window.open(greeting.upwork_link, "_blank")

  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className='greet' id="greeting">
      <div className='greeting-main' >
        <h1 className='greeting-head'>{greeting.title} <span className='wave-emoji'>{emoji("👋")}</span></h1>
        <p className='greeting-sub'>{greeting.detail}</p>
        <SocialMedia />
        <div className='greeting-buttons'>
          <button className='greeting-button' onClick={onClickHire}>HIRE ME</button>
          <button className='greeting-button' onClick={onClickResume}>SEE MY RESUME</button>
        </div>
        
      </div>
      <div className='img-div'>
        <img className='pfp' src={image} alt='Fatima'/>
      </div>
      </div>


    </Fade>
  )
}

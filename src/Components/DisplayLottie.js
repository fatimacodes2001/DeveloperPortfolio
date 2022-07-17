import React, { useEffect } from 'react'
import lottie from "lottie-web";


export default function DisplayLottie(props) {
    useEffect(() =>{
      lottie.loadAnimation(
        {
          container:document.querySelector("#lottie-animation"),
          animationData: props.animation_data
        }
      )


    }, [])

  return (
    <div id='lottie-animation'></div>
  )
}

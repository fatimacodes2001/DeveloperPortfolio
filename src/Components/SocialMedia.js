import React from 'react'
import { social_media } from '../config'
import "../css/social_media.scss"

export default function SocialMedia() {
  return (
    <div className='social-buttons'>
        
        <a className='icon-button github' target="_blank" href={social_media.github}>
        <i className="fab fa-github"></i>
        </a>
        <a className='icon-button linkedin' target="_blank" href={social_media.linkedin}>
        <i className="fab fa-linkedin-in"></i>
        </a>
        <a className='icon-button mail' target="_blank" href={social_media.mail}>
        <i className="fas fa-envelope"></i>
        </a>
        <a className='icon-button facebook' target="_blank" href={social_media.facebook}>
        <i className="fab fa-facebook-f"></i>
        </a>
    </div>
  )
}

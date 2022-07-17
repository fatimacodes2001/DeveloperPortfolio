import React from 'react'
import '../css/main.scss'
import Header from './Header'
import Greeting from './Greeting'
import Skills from './Skills'
import Education from './Education'
import WorkExperience from './WorkExperience'
import Projects from './Projects'
import Footer from './Footer'

function Main() {
  return (
    <>
    <Header />
    <Greeting />
    <Skills />
    <WorkExperience />
    <Education />
     <Projects />
    <Footer />
    </>
  )
}

export default Main
import React, {useEffect} from 'react'
import '../css/work.scss'
import { work } from "../config.js"
import Fade from 'react-reveal'
import WorkItem from './WorkItem'


export default function WorkExperience() {

    useEffect(()=>{
        let columns = document.querySelectorAll(".work-main-item")
        let colArr = Array.from(columns)
        colArr = colArr.map(item => item.clientHeight)

        let maxHeight = Math.max(...colArr)
        for(var column of columns){
            console.log(column.style.height);
            column.style.height = `${maxHeight}px`;
            
        }

    },[])


  return (
    <Fade left duration={1000} distance="200px">
        <div className='work-main' id="work">
            <h1 className='work-head'>Work Experience</h1>
            <div className='work-items'>
                {
                    work.map(item => {
                        return <WorkItem name={item.name} role={item.role} date={item.date} details={item.details} image={item.photo} />
                    })
                }
            </div>

        </div>
    </Fade>
  )
}

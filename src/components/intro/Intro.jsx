import React from 'react'
import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from 'react'
import img from '../assets/coder.jpg';

export default function Intro() {

  const textRef = useRef();
  useEffect(()=>{init(textRef.current,
     { showCursor: true, 
       backDelay:1500,
       backSpeed:60,
      strings: ['Software Engineer','Developer'] })},
      []);


    return (

         
          <div className="intro" id="intro">
          <div className="left">
            <div className="imgcontainer">
              <img src={img} alt="coder" />
            </div>
          </div>

          <div className="right">
            <div className="wrapper">
              <h2>Hello There, I'm</h2>
              <h1>Pratik </h1>
              <h3>
                
                <span ref={textRef}> </span>
              </h3>
            </div>
          </div>
        </div>
    )
}

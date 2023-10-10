import './intro.scss'
import {init} from 'ityped'
import { useEffect, useRef } from 'react'
export default function Intro() {
  // use Ref is a psuedo version of document.querySelector
  const textRef = useRef() 
  useEffect(()=>{
    init(textRef.current, {
       showCursor: true,
       backDelay: 1500,
       backSpeed: 60,
       strings: ['Web Developer','Problem Solver','Innovator', 'Creator','Mentor', 'Musician', 'Gamer'] })
  },[]) 
  
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assets/3.png" alt="justin"/>
        </div>
      </div>
      <div className="right">
        <div className='wrapper'>
          <h2>Hi! I'm</h2>
          <h1>Justin</h1>
          <h3><span ref={textRef}></span></h3>
          <div className='iconContainer' >
            <a href='https://www.linkedin.com/in/juswhite814/'><img className='socialIcon' src="assets/LinkedInIcon.png" alt='bleh'/></a>
            <a href='https://github.com/JustinWhite814'><img className='socialIcon' src="assets/github.png" alt='bleh'/></a>
            <a href='https://twitter.com/Juswhite814' ><img className='socialIcon' src="assets/twitterIcon.png" alt='bleh'/></a>
          </div>
        </div>
        <a className='blink' href="#portfolio">
          <img src='assets/down.png' alt='justin'/>
        </a>
      </div>
    </div>
  )
}

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
       strings: ['Web Developer','Software Engineer', 'Problem Solver' ] })
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
          <h2>Hello there, My name is</h2>
          <h1>Justin</h1>
          <h3><span ref={textRef}></span></h3>
          <h4>Socials</h4>
        </div>
   
        <a href="#portfolio">
          <img src='assets/down.png' alt='justin'/>
        </a>

      </div>
    </div>
  )
}

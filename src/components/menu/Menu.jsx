import React from 'react'
import './menu.scss'
export default function Menu({menuOpen,setMenuOpen}) {
  const isMobilieScreen = () => window.innerWidth <= 768;

  return (
    <div className={'menu '+ (menuOpen && 'active')}>
      <ul >
        <li onClick={()=>setMenuOpen(false)}> 
          <a href='#intro'>Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}> 
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}> 
          <a href='#works'>Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}> 
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}> 
          <a href='#contact'>Contact</a>
        </li>
        {isMobilieScreen() && (
          <li onClick={()=>setMenuOpen(false)}> 
          <a className='onmobile' href='#socials'>Socials</a>
        </li>
        )}
      </ul>
    </div>
  )
}

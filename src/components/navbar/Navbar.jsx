import './navbar.scss'
import {Person, Mail} from '@material-ui/icons'
export default function navbar({menuOpen, setMenuOpen}) {
  return (
                              //if the menu is open, set the class to active
    <div className={'navbar '+ (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'>
            genius.
          </a>
          <div className="itemContainer">
              <Person className='icon'/>
              <span>213 3213 2312</span>
          </div>
       
        <div className="itemContainer">
            <Mail className='icon'/>
            <span>dsaohe@gmail.com</span>
        </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  )
}

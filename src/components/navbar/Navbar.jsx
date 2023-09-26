import './navbar.scss'


export default function navbar({menuOpen, setMenuOpen}) {
  return (
                              //if the menu is open, set the class to active
    <div className={'navbar '+ (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href='#intro' className='logo'>
            
          </a>
          {/* <div className="itemContainer">
              {/* <Person className='icon'/>
              <span>347 552 2593</span> */}
          {/* </div>  */}
       
        <div className="itemContainer">
            <span><img src='/assets/JMWLogo.png'alt='bleh'/></span>
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

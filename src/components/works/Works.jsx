import { useState } from 'react';
import './works.scss'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/pokemon.png",
      title: "Kanto Pokedex",
      desc:
        "JavaScript Pokedex based on the Kanto region. ",
      img:
        "https://i.imgur.com/5XUXq8J.png",
    },
    {
      id: "2",
      icon: "./assets/aestheticDomain.png",
      title: "Aesthetic Domain",
      desc:
        "MERN Stack Art Gallery with Crud And an External API, shoutout to Scott Draper! ",
      img:
        "https://i.imgur.com/vpDqhAS.png",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  const handleClick = (direction) => {
    direction === 'left'
    ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
    : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0 )
  }
  return (
    <div className='works' id='works'>
     <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)` }}>
      {data.map((d) =>(
      <div key = {d.id}className="container">
       <div className="item">
        <div className="left">
          <div className="leftContainer">
            <div className="imgContainer">
              <img src={d.icon} alt="" />
            </div>
            <h2>{d.title}</h2>
            <p>
            {d.desc}
            </p>
            <span>Featured</span>
          </div>
        </div>
        <div className="right">
          <img src={d.img} alt="" />
        </div>
       </div>
       </div>
      ))}
     </div>
     <img src="assets/arrow.png" className='arrow left' alt="" onClick={()=> handleClick('left')} />
     <img src="assets/arrow.png" className='arrow right' alt="" onClick={()=> handleClick('right')} />
    </div>
  )
}

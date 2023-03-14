import { useState, useEffect } from "react";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";

export default function Portfolio() {
  
  const [selected, setSelected] = useState('featured')
  //we will map through this in the UL below
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(listItem=>(
          <PortfolioList 
          title={listItem.title}
          active={selected === listItem.id}
          setSelected={setSelected}
          id={listItem.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img src='assets/globe.png' alt="sheesh" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src='assets/globe.png' alt="sheesh" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src='assets/globe.png' alt="sheesh" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src='assets/globe.png' alt="sheesh" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src='assets/globe.png' alt="sheesh" />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img src='assets/globe.png' alt="sheesh" />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  )
}

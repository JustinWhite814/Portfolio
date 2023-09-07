import { useState, useEffect } from "react";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio  } from "../../data";
export default function Portfolio() {
  
  const [selected, setSelected] = useState('MERN')
  const [data, setData] = useState([])
  //we will map through this in the UL below
  const list = [
    {
      id: "MERN",
      title: "MERN",
    },
    {
      id: "React",
      title: "React",
    },
    {
      id: "DHTML",
      title: "DHTML",
    },
    {
      id: "Django",
      title: "Django",
    },
    {
      id: "Python",
      title: "Python",
    },
  ];
  useEffect(()=>{
    switch(selected){
      case 'MERN':
        setData(featuredPortfolio)
        break;
      case 'React':
        setData(webPortfolio)
        break;
      case 'DHTML':
        setData(mobilePortfolio)
        break;
      case 'Django':
        setData(designPortfolio)
        break;
      case 'Python':
        setData(contentPortfolio)
        break;
        default:
          setData(featuredPortfolio)
    }
  },[selected])
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map(listItem=>(
          <PortfolioList
          key={listItem.id} 
          title={listItem.title}
          active={selected === listItem.id}
          setSelected={setSelected}
          id={listItem.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
        
          <div key={d.id} className="item">
          <img src={d.img} alt="sheesh" />
          <h3>{d.title}</h3>
        </div>
        ))}
        
       
        
      </div>
    </div>
  )
}

import { useState, useEffect } from "react";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio  } from "../../data";
export default function Portfolio() {
  
  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])
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
  useEffect(()=>{
    switch(selected){
      case 'featured':
        setData(featuredPortfolio)
        break;
      case 'web':
        setData(webPortfolio)
        break;
      case 'mobile':
        setData(mobilePortfolio)
        break;
      case 'design':
        setData(designPortfolio)
        break;
      case 'content':
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

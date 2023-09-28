import './testimonials.scss'

export default function Testimonials() {
  const data = [{
    id: 1,
    name: "Ryan Lenahan ",
    title: "Senior Planner At L' Oreal",
    img:
      "https://i.imgur.com/aXiWheY.jpg",
    icon: "assets/twitter.png",
    desc:
      "Justin White is an exceptional website developer with a keen eye for detail and creativity. Working with him was a seamless experience from start to finish. He actively listened to my requirements and delivered a website that exceeded my expectations. Justin's technical expertise is impressive, and he efficiently implemented modern design elements and responsive features. Communication was prompt and professional throughout the project, making the collaboration truly enjoyable."
  },
  {
    id: 2,
    name: "Amanda Rodriguez",
    title: "Professional Educator",
    img:
      "https://i.imgur.com/RhU3xKt.jpg",
    icon: "assets/youtube.png",
    desc:
      "Working with Justin on my new website has been a joy. He brought my vision to life with a colorful and user-friendly design. I appreciated his patience and responsiveness throughout the process. Thanks to the website, I now have an engaging platform to connect with students and parents, making communication a breeze. I wholeheartedly recommend Justin for his technical expertise and understanding of educators' needs. He's made a significant impact on my teaching journey!",
    featured: true,
  },
  {
    id: 3,
    name: "Daphne Duran & Jocelyn Padilla",
    title: "CEOS of Juvenescence",
    img:
      "https://i.imgur.com/WiSUgmu.png",
    icon: "assets/linkedin.png",
    desc:
      "Working with Justin has been a game-changer for our Juvenescence Aesthetics. His expertise and creativity have transformed my online presence, making it easy for potential clients to learn about my services, book appointments! Justin's dedication and attention to detail are truly commendable. Thanks to his work, I've been able to reach a wider audience and grow my business. I highly recommend Justin for any healthcare professional looking to enhance their online presence.",
  },
];
  return (
    <div className='testimonials' id='testimonials'>
        <h1>Testimonials</h1>
        <div className="container">
          {data.map((d => 
          <div key = {d.id} className={d.featured ? "card featured" : 'card'}>
            <div className="top">
              <img src="assets/right-arrow.png" alt="" className='left' />
              <img
               className='user'
               src={d.img}
               alt=""/>
              <img
              className='right'
              src={d.icon}
              alt=""/>
            </div>
            <div className="center">
              <div className='description'>{d.desc}</div>
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
          ))}
        </div>
    </div>
  )
}

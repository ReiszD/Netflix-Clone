import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'
import stranger_things_banner from '../../assets/stranger_things_banner.jpg'
import title_banner from '../../assets/title_banner.png'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={stranger_things_banner} alt="" className='banner-img' />
        <div className="hero-caption">
            <img src={title_banner} alt="" className='caption-img' />
            <p>In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.</p>
            <div className="hero-btns">
                <button className='btn'><img src={play_icon} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
        </div>
        <div className='title-cards'>
            <TitleCards />
        </div>
      </div>
      <div className="more-cards">
            <TitleCards title={"Top Rated Shows"} category={"top_rated"} />
            <TitleCards title={"Only on Netflix"} category={"on_the_air"} />
            <TitleCards title={"Upcoming"} category={"airing_today"} />
            <TitleCards title={"Top Picks for You"} category={"popular"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home

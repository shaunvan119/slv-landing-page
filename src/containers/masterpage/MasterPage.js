import React from 'react'
import videoBg from "../../assets/videoBg.mp4"
import './master.css'
import logo from "../../assets/home/desktop/SVLwhite.svg"

const MasterPage = () => {
  return (
    
    <div className="main">
    
    <div className='overlay'></div>

    <video src={videoBg} autoPlay loop muted/>

    <div className="content">
        <img src={logo} alt="Logo" className="master_logo" />
      <div className="master_info_boxes">
      <div className="master_container_one">
      <h1>25% off Websites</h1>
      <p>Design and build</p>
      <p>Free hosting and domain</p>
      <p>Optimized for SEO</p>
        <button className="buttons_master">More Info</button>
      </div>
      <div className="master_container_two">
        <button className="buttons_master">More Info</button>
      </div>
      <div className="master_container_three">
        <button className="buttons_master">More Info</button>
      </div>
      
      </div>  
    </div>

    </div>
  )
}

export default MasterPage
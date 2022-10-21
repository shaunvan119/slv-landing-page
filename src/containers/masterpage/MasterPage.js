import React from 'react'
import videoBg from "../../assets/videoBg.mp4"
import './master.css'
import logo from "../../assets/home/desktop/SandFox.png"
import { Link } from "react-router-dom"


const MasterPage = () => {
  return (
    
    <div className="main main_master">
    
    <div className='overlay'></div>

    <video src={videoBg} autoPlay loop muted/>

    <div className="content">
        <img src={logo} alt="Logo" className="master_logo" />
      <div className="master_info_boxes ">
      
        <div className="master_container_one margin_right">
          <h1>25% off Websites</h1>
          <p>Design and build</p>
          <p>Free hosting and domain</p>
          <p>Optimized for SEO</p>
            <Link to="/digital"><button className="buttons_master">More Info</button></Link>
            
      </div>
      <div className="master_container_one margin_right">
          <h1>25% off Socail</h1>
          <p>SEO and SEM</p>
          <p>Socail media</p>
          <p>Lead automation</p>
            <button className="buttons_master">Comeing soon</button>
      </div>
          <div className="master_container_one">
          <h1>10% B2B outreach</h1>
          <p>Appopitment setting</p>
          <p>Cold calling</p>
          <p>Lead list generation</p>
            <Link to="/B2BhomePage"><button className="buttons_master">More Info</button></Link>
       </div>
      
      </div>  
    </div>

    </div>
  )
}

export default MasterPage
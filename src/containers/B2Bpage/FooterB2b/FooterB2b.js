

import { AiFillFacebook} from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';
import { Link } from "react-router-dom";
import footerVid from "../../../assets/footerVid.mp4"



function FooterB2b() {
    
    return (
        <div className="footer">
           <div className="banner-container">
            <video autoPlay loop muted src={footerVid} alt="mountains" className="banner-footer" />
            <div class="top-left">Australian trusted <br/>
            and experienced B2B<br/> Reps</div>
            </div>  
         <div className="Bottom-footer">
         <div className="logo-icons">
                <a href="https://www.facebook.com/slvdevelopments" style={{textDecoration: 'none', color: '#FFFFFF'}}><AiFillFacebook size={62}/></a>
                <a href="https://www.linkedin.com/in/shaun-van-amersfoort-80b7b7194/" style={{textDecoration: 'none', color: '#FFFFFF'}}><AiFillLinkedin size={62}/></a>
            </div>
          <Link style={{textDecoration: 'none', color: '#FFFFFF'}} to="/contactUs"><p className="sales-machine">I need a Appointment setter</p></Link>
          
            </div>
        </div>
    )
}

export default FooterB2b
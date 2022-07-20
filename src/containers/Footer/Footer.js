import './footer.css'
import banner from "../../assets/home/desktop/footerbanner.png"
import { AiFillFacebook} from 'react-icons/ai';
import { AiFillLinkedin} from 'react-icons/ai';




function Footer() {
    
    return (
        <div className="footer">
           <div className="banner-container">
            <img src={banner} alt="mountains" className="banner-footer" />
            <div class="top-left">Australian trusted <br/>
            and experienced web<br/> developers</div>
            </div>  
         <div className="Bottom-footer">
         <div className="logo-icons">
                <AiFillFacebook size={62}/>
                <AiFillLinkedin size={62}/>
            </div>
          <p className="sales-machine">I need a 24/7 sales machine?</p>
          
            </div>
        </div>
    )
}

export default Footer
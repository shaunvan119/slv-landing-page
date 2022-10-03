import './topMain.css'
import Count from '../../components/CountWeb'
import CountLeads from '../../components/CountLeads'
import CountLines from '../../components/CountLines'
import computerTwo from "../../assets/home/desktop/computerTwo.png"
import attention from "../../assets/home/desktop/attention.png"
import design from "../../assets/home/desktop/design.png"
import videoBg from "../../assets/videoBg.mp4"
import backGroundVid from "../../assets/backGround.mp4"
import onlineShopping from "../../assets/onlineShopping.mp4"

function TopMain() {
    
    return (
        <div className="top-wrapper">
        <div className="top-main-container-one top-count-box">
            <div className="top-main-one count-section"> 
            <Count/>
            <CountLeads/>
            <CountLines/>
            </div>
            <video src={videoBg} autoPlay loop muted className="image-main graphic" id="myVideo"/>
             
       </div>

       <div className="top-main-container-one mobile-images">
       <video src={backGroundVid} autoPlay loop muted className="image-main" id="myVideo"/>
             
            <div className="top-main-two"> 
            <h1 className="main-h1-two">Fully responsive<br/> website with<br/>purpose</h1>
            <p className="main-p mobile-p">We will design a fully responsive website that will<br/>
            convert traffic into buyers, your website has one job,<br/>
            generate leads. Web designers are great at making<br/>
            things pretty but they can not build you a website<br/>
            that can attract buyers, typically a web designer<br/>
            doesn't have a background in the psychology of<br/>
            a consumer's buying behavior to attract buyers.<br/>
            Your website needs to have emotional triggers to<br/>
            convert online traffic to hit that submit or buy button.</p>   
            </div>    
       </div>

       <div className="top-main-container-one">
            <div className="top-main-one-white top-websites"> 
            <h1 className="main-h1-black">Turn website <br/>visitors into<br/>buyers</h1>
            <p className="main-p">Get it right the first time, don't spend 30K<br/>
                on a landing page with all the bells and whistles.<br/>
                From the point your prospect hits your website<br/>
                you have less than 15 seconds to attract<br/>
                their attention.</p>   
            </div>
            <video src={onlineShopping} autoPlay loop muted className="image-main attention-image" id="myVideo"/>  
       </div>
    </div>
    )
}

export default TopMain
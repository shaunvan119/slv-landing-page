import './bottomMain.css'
import baseapparel from '../../assets/portfolio/baseapparel.png'
import pay from '../../assets/portfolio/pay.png'
import scoot from '../../assets/portfolio/scoot.png'
import suite from '../../assets/portfolio/suite.png'
import { BiDevices } from 'react-icons/bi';
import { TbHandClick } from 'react-icons/tb';
import { BiTimer } from 'react-icons/bi';




function BottomMain() {
    
    return (
        <div className="bottom-main-container">
        <h1 className="bottom-h1">Some of our projects</h1>
        <div className="bottom-main-wrapper">
        
            <img className="portfolio" src={baseapparel} alt=""/>  
            <img className="portfolio" src={pay} alt=""/>  
            <img className="portfolio" src={scoot} alt=""/>  
            <img className="portfolio" src={suite} alt=""/>  
        </div>
        <div className="info-bar">
            <div className="info-bar-bottom">
                <BiDevices size="72"/>
                <h2>100% Responsive</h2>
                <p className="bottom-p">No matter which device you’re on, our sites are<br/>
                   fully responsive and look beautiful on any<br/>
                   screen.</p>
            </div>
            <div className="info-bar-bottom">
                <TbHandClick size="72"/>
                <h2>Increase conversion</h2>
                <p className="bottom-p">Turning more browsers into buyers takes more then<br/> 
                 just a pretty website. Websites need engaging content<br/>
                 with emotional triggers</p>
            </div>
            <div className="info-bar-bottom">
                <BiTimer size="72"/>
                <h2>The clock is ticking</h2>
                <p className="bottom-p">Studies show you have 15 secounds to enage website traffic.<br/>
                   We can help create a website that creates an engaging<br/>
                   message, to improve your bounce rate</p>
            </div>

        </div>
        </div>
    )
}

export default BottomMain
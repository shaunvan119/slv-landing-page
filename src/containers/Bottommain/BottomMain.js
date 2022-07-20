import './bottomMain.css'
import baseapparel from '../../assets/portfolio/baseapparel.png'
import pay from '../../assets/portfolio/pay.png'
import scoot from '../../assets/portfolio/scoot.png'
import suite from '../../assets/portfolio/suite.png'
import { BiDevices } from 'react-icons/bi';
import { TbHandClick } from 'react-icons/tb';
import { BiTimer } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineDesignServices } from 'react-icons/md';
import { TbSettingsAutomation } from 'react-icons/tb';





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
                <BiDevices size="62" color='#F5F5F5'/>
                <h2>100% Responsive websites</h2>
                <p className="bottom-p">No matter which device you’re on, our sites are<br/>
                   fully responsive and look beautiful on any<br/>
                   screen.</p>
            </div>
            <div className="info-bar-bottom">
                <TbHandClick size="62" color='#F5F5F5'/>
                <h2>Increase conversion</h2>
                <p className="bottom-p">Turning more browsers into buyers takes more then<br/> 
                 just a pretty website. Websites need engaging content<br/>
                 with emotional triggers</p>
            </div>
            <div className="info-bar-bottom">
                <BiTimer size="62" color='#F5F5F5'/>
                <h2>The clock is ticking</h2>
                <p className="bottom-p">Studies show you have 15 secounds to enage website traffic.<br/>
                   We can help create a website that creates an engaging<br/>
                   message, to improve your bounce rate</p>
            </div>
            <div className="info-bar-bottom">
                <CgWebsite vices size="62" color='#F5F5F5'/>
                <h2>Hosting</h2>
                <p className="bottom-p">Website hosting included with all packages,<br/>
                    to secure your online content.<br/>
                   </p>
            </div>
            <div className="info-bar-bottom">
                <MdOutlineDesignServices size="62" color='#F5F5F5'/>
                <h2>Web design</h2>
                <p className="bottom-p">websites designed to grab buyers<br/>
                attention</p>
            </div>
            <div className="info-bar-bottom">
                <TbSettingsAutomation size="62" color='#F5F5F5'/>
                <h2>Lead Automation</h2>
                <p className="bottom-p">Automated your outbound lead strategy<br/> 
                and save spending thousands on marketing companies<br/>
                with no transparency</p>
            </div>
            <div>
                
            </div>

        </div>
        </div>
    )
}

export default BottomMain
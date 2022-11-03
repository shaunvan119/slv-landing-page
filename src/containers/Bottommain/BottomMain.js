import './bottomMain.css'
import scoot from '../../assets/portfolio/scoot.png'
import roofing from '../../assets/portfolio/roofing.png'
import suite from '../../assets/portfolio/suite.png'
import fitnessPicThree from "../../assets/portfolio/fitnessPicThree.png"
import fitnessWebPic from '../../assets/portfolio/fitnessWebPic.png'
import fitnessWebPicTwo from '../../assets/portfolio/fitnessWebPicTwo.png'
import { BiDevices } from 'react-icons/bi';
import { TbHandClick } from 'react-icons/tb';
import { BiTimer } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';
import { MdOutlineDesignServices } from 'react-icons/md';
import { TbSettingsAutomation } from 'react-icons/tb';
import background from "../../assets/home/desktop/blackBackground.png"





function BottomMain() {
    
    return (
        <div className="bottom-main-container bottom-grid">
        <h1 className="bottom-h1">Some of our projects</h1>
        <div className="bottom-main-wrapper">  
            <a href="https://roofing-site.netlify.app/" target="_blank" rel="noreferrer"><img className="portfolio" src={roofing} alt="roof website"/></a>
            <a href="https://transcendent-gnome-a5e02c.netlify.app/" target="_blank" rel="noreferrer"><img className="portfolio" src={scoot} alt="scooter website"/></a>  
            <a href="https://regal-gecko-130083.netlify.app/" target="_blank" rel="noreferrer"><img className="portfolio" src={suite} alt="api website"/></a>  
            <a href="https://magenta-peony-bf391a.netlify.app/" target="_blank" rel="noreferrer"><img className="portfolio" src={fitnessWebPic} alt="fitness website"/></a>
            <a href="https://dynamic-rabanadas-981526.netlify.app/" target="_blank" rel="noreferrer"><img className="portfolio" src={fitnessWebPicTwo} alt="fitness website"/></a> 
            <a href="https://relaxed-blancmange-a9f9c3.netlify.app/" target="_blank" rel="noreferrer"><img className="portfolio" src={fitnessPicThree} alt="fitness website"/></a> 
        </div>
        <div className="info-bar" style={{ backgroundImage: 
        `url(${background})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover' }}>
        <div className="bar-info">
            <div className="info-bar-bottom website-rep">
                <BiDevices size="62" color='#F5F5F5'/>
                <h2>100% Responsive websites</h2>
                <p className="bottom-p">No matter which device you’re on, our sites are<br/>
                   fully responsive and look beautiful on any<br/>
                   screen.</p>
            </div>
            <div className="info-bar-bottom conversion">
                <TbHandClick size="62" color='#F5F5F5'/>
                <h2>Increase conversion</h2>
                <p className="bottom-p">Turning more browsers into buyers takes more then<br/> 
                 just a pretty website. Websites need engaging content<br/>
                 with emotional triggers.</p>
            </div>
            <div className="info-bar-bottom clock">
                <BiTimer size="62" color='#F5F5F5'/>
                <h2 className="clock-heading">The clock is ticking</h2>
                <p className="bottom-p">Studies show you have 15 seconds to engage website traffic.<br/>
                   We can help create a website that creates an engaging<br/>
                   message, to improve your bounce rate.</p>
            </div>
            <div className="info-bar-bottom hosting">
                <CgWebsite vices size="62" color='#F5F5F5'/>
                <h2>Hosting</h2>
                <p className="bottom-p">Website hosting included with all packages,<br/>
                    to secure your online content.<br/>
                   </p>
            </div>
            <div className="info-bar-bottom design">
                <MdOutlineDesignServices size="62" color='#F5F5F5'/>
                <h2>Web design</h2>
                <p className="bottom-p">websites designed to grab buyers<br/>
                attention.</p>
            </div>
            <div className="info-bar-bottom lead-auto">
                <TbSettingsAutomation size="62" color='#F5F5F5'/>
                <h2>Lead Automation</h2>
                <p className="bottom-p">Automated your outbound lead strategy<br/> 
                and save spending thousands on marketing companies<br/>
                with no transparency.</p>
            </div>
            </div>
            <div>
                
            </div>

        </div>
        </div>
    )
}

export default BottomMain
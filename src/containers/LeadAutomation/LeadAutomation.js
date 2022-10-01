import './lead.css'
import { CgWebsite } from 'react-icons/cg';
import { FaFunnelDollar } from 'react-icons/fa';
import { TbSettingsAutomation } from 'react-icons/tb';
import { MdCampaign } from 'react-icons/md';
import { MdMarkEmailRead } from 'react-icons/md';
import { MdOutlineMessage } from 'react-icons/md';
import background from "../../assets/home/desktop/blackBackground.png"





function LeadAutomation() {
    
    return (
        <div className='mobile-wrapper'>
        <div className="bottom-main-container-lead" 
        style={{ backgroundImage: 
        `url(${background})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover' }}>

        <h1 className="lead-heading">Website Development and Design</h1>
        
        <div className="info-bar-lead">
       
        <div className="info-bar-bottom data-list">
                <CgWebsite size="62" color='#F5F5F5'/>
                <h2>Website development</h2>
                <p className="bottom-p">With over 10 years experience understanding<br/> 
                the psychology of the consumer buying behaviour,<br/> we will build you a fast high converting website.</p>
            </div>
            <div className="info-bar-bottom lead-funnel">
                <FaFunnelDollar size="62" color='#F5F5F5'/>
                <h2>Website design</h2>
                <p className="bottom-p">We are an end to end website agency,<br/>
                 we can design and build a website that<br/>
                 looks 5 star, but also works for you <br/>
                 generating leads 24/7.</p>
            </div>
            <div className="info-bar-bottom auto">
                <FaFunnelDollar size="62" color='#F5F5F5'/>
                <h2>Designed to convert</h2>
                <p className="bottom-p">Imagine waking up every morning to a full<br/>
                 inbox of leads ready to be converted.<br/> 
                 Your website is the to go to hub for the <br/>
                 consumer to gain a better understanding <br/>
                 of your product and service, your website<br/>
                  needs to have easy navigation and self<br/>
                guided buyer journey.</p>
            </div>
            <div className="design-convert">
                <FaFunnelDollar size="62" color='#F5F5F5'/>
                <h2>Designed to convert</h2>
                <p className="bottom-p">Imagine waking up every morning to a full<br/>
                 inbox of leads ready to be converted.<br/> 
                 Your website is the to go to hub for the <br/>
                 consumer to gain a better understanding <br/>
                 of your product and service, your website<br/>
                  needs to have easy navigation and self<br/>
                guided buyer journey.</p>
            </div>
           </div> 
            
            <div>
                
            </div>

        </div>
        </div>
        
    )
}

export default LeadAutomation
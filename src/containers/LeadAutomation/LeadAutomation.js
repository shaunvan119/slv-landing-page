import './lead.css'
import baseapparel from '../../assets/portfolio/baseapparel.png'
import pay from '../../assets/portfolio/pay.png'
import scoot from '../../assets/portfolio/scoot.png'
import suite from '../../assets/portfolio/suite.png'
import { TbNumber1 } from 'react-icons/tb';
import { TbNumber2 } from 'react-icons/tb';
import { TbNumber3} from 'react-icons/tb';
import { GiArchiveResearch } from 'react-icons/gi';
import { FaFunnelDollar } from 'react-icons/fa';
import { TbSettingsAutomation } from 'react-icons/tb';
import { MdCampaign } from 'react-icons/md';
import { MdMarkEmailRead } from 'react-icons/md';
import { MdOutlineMessage } from 'react-icons/md';


import background from "../../assets/home/desktop/background.png"





function LeadAutomation() {
    
    return (
        <div className="bottom-main-container-lead" 
        style={{ backgroundImage: 
        `url(${background})`, 
        backgroundRepeat: 'no-repeat', 
        backgroundSize: 'cover' }}>

        <h1 className="lead-heading">Lead Automation</h1>
        
        <div className="info-bar-lead">
        
        <div className="info-bar-bottom">
                <GiArchiveResearch size="62" color='#F5F5F5'/>
                <h2>Research data list</h2>
                <p className="bottom-p">First we identify key decision makers,<br/>
                   and identify key job titles relivant<br/>
                   to your target audience. We target<br/>
                   senior executives.</p>
            </div>
            <div className="info-bar-bottom">
                <FaFunnelDollar size="62" color='#F5F5F5'/>
                <h2>Scrape leads and add to funnel</h2>
                <p className="bottom-p">Consolidate a list of key decision makers<br/>
                relivant to your target audience,<br/>
                we also clean the data list prior to<br/> launching campaigns.</p>
            </div>
            <div className="info-bar-bottom">
                <TbSettingsAutomation size="62" color='#F5F5F5'/>
                 <MdCampaign size="62" color='#F5F5F5'/>
                 <MdMarkEmailRead size="62" color='#F5F5F5'/>
                 <MdOutlineMessage size="62" color='#F5F5F5'/>
                <h2>Automate campaigns to target list</h2>
                <p className="bottom-p">Targeting the Consolidated contact list<br/>
                   we set up automated campaigns<br/>
                   via automated email and linkedIn<br/> messaging.</p>
            </div>
            
            
            <div>
                
            </div>

        </div>
        </div>
    )
}

export default LeadAutomation
import './HeaderB2b.css'
import logo from "../../../assets/home/desktop/SVLblack.svg"
import { Link } from "react-router-dom";

function HeaderB2b() {
    
    return (
        <header className="top-header">
            <img src={logo} alt="Logo" className="logo" />
            <Link to="/contactUs"><button className="contact-button button-contact-form button-header">Contact</button></Link>
            
              
        </header>
    )
}

export default HeaderB2b
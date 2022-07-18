import './Header.css'
import logo from "../../assets/Group.svg"

function Header() {
    
    return (
        <header className="top-header">
            <img src={logo} alt="Logo" className="logo" />
            <button className="contact-button">Contact</button>
            
              
        </header>
    )
}

export default Header
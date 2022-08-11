import './price.css'
import { Link } from "react-router-dom";



function Price() {
    
    return (
        <div className="price-container">
            <div className="price-box">
                <h2 className="price-header">Basic</h2>
                <span className="list-itmes">
                    <p>1 page template design</p>
                    <p>Desktop and mobile build</p>
                    <p>12 months free hosting</p>
                </span>    
                <p className="price"><span className='from'>From</span> $990</p>
                <Link to="/contactUs"><button className="price-button-basic">Contact</button></Link>
            </div>
            <div className="price-box-pro">
                <h2 className="price-header-pro">Pro</h2>
                <span className="list-pro">
                    <p>Unlimited pages</p>
                    <p>Customiztion web design </p>
                    <p>Custom 30 page concept design</p>
                    <p>12 months free hosting</p>
                    <p>Free Domain</p>
                    <p>Mobile and desktop build</p>
                    <p>in-depth strategy session</p>
                    <p>Desinged to convert traffic</p>
                    <p>API integration</p>
                 </span>   
                <p className="price-pro"><span className='from'>From</span> $7180</p>
                <Link to="/contactUs"><button className="button-pro">Contact</button></Link>

            </div>
             
            <div className="price-box-pro-mobile">
                <h2 className="price-header-pro">Websites</h2>
                <span className="list-pro">
                    <p>Unlimited pages</p>
                    <p>Customiztion web design </p>
                    <p>Custom 30 page concept design</p>
                    <p>12 months free hosting</p>
                    <p>Free Domain</p>
                    <p>Mobile and desktop build</p>
                    <p>in-depth strategy session</p>
                    <p>Desinged to convert traffic</p>
                    <p>API integration</p>
                 </span>   
                <p className="price-pro"><span className='from'>From</span> $990</p>
                <Link to="/contactUs"><button className="button-pro">Contact</button></Link>

            </div>
            <div className="price-box">
                <h2 className="price-header">Business</h2>
                <span className="list-itmes">
                    <p>5 page template design</p>
                    <p>Deskptop and mobile build</p>
                    <p>12 months free hosting</p>
                    <p>Free Domain</p>
                    
                </span>
                <p className="price"><span className='from'>From</span> $1990</p>
                <Link to="/contactUs"><button className="price-button-business">Contact</button></Link>
            </div>
            
        </div>
    )
}

export default Price
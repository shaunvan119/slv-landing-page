import './price.css'
import { Link } from "react-router-dom";



function Price() {
    
    return (
        <div className="price-container">
            <div className="price-box">
                <h2 className="price-header">Gold</h2>
                <span className="list-itmes">
                    <p>4 page template design</p>
                    <p>Desktop and mobile build</p>
                    <p>12 months free hosting</p>
                    <p>Free SEO</p>
                    <p>Free Domain and email</p>
                </span>    
                <p className="price"><span className='from'>From</span> $1200</p>
                <Link to="/contactUs"><button className="price-button-basic">Request proposal</button></Link>
            </div>
            <div className="price-box-pro price-box">
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
                <Link to="/contactUs"><button className="button-pro">Request proposal</button></Link>

            </div>
             
            <div className="price-box-pro-mobile">
                <h2 className="price-header-pro">Websites</h2>
                <span className="list-pro">
                    <p>Unlimited pages</p>
                    <p>Customiztion web design </p>
                    <p>Custom 30 page concept design</p>
                    <p>12 months free hosting</p>
                    <p>Free Domain and email</p>
                    <p>Mobile and desktop build</p>
                    <p>in-depth strategy session</p>
                    <p>Desinged to convert traffic</p>
                    <p>API integration</p>
                 </span>   
                <p className="price-pro"><span className='from'>From</span> $990</p>
                <Link to="/contactUs"><button className="button-pro">Request proposal</button></Link>

            </div>
            <div className="price-box">
                <h2 className="price-header">Premium</h2>
                <span className="list-itmes">
                    <p>8 page template design</p>
                    <p>Deskptop and mobile build</p>
                    <p>12 months free hosting</p>
                    <p>Free SEO</p>
                    <p>Free Domain and email</p>
                    
                </span>
                <p className="price"><span className='from'>From</span> $1990</p>
                <Link to="/contactUs"><button className="price-button-business">Request proposal</button></Link>
            </div>
            
        </div>
    )
}

export default Price
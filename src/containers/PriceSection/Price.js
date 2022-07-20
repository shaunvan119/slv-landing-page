import './price.css'


function Price() {
    
    return (
        <div className="price-container">
            <div className="price-box">
                <h2 className="price-header">Basic</h2>
                    <p>1 page design</p>
                    <p>Web design customiztion</p>
                    <p>12 months free hosting</p>
                <p className="price">$990</p>
                <button>Contact</button>
            </div>
            <div className="price-box-pro">
                <h2 className="price-header-pro">Pro</h2>
                    <p>Unlimited pages</p>
                    <p>Web design customiztion</p>
                    <p>12 months free hosting</p>
                    <p>Free Domain</p>
                    Automate website traffic
                    <p>Automate LinkedIn msg</p>
                    <p>Automate email campaigns</p>
                    <p>Lead list creation</p>
                    <p>Multipage website creation</p>
                <p className="price-pro">$990</p>
                <p className="per-month-pro">per month</p>
                <button className="button-pro">Contact</button>
            </div>
            <div className="price-box">
                <h2 className="price-header">Business</h2>

                    <p>Unlimited pages</p>
                    <p>Web design customiztion</p>
                    <p>12 months free hosting</p>
                    <p>Free Domain</p>
                    <p></p>
                
                <p className="price">$990</p>
                <p className="per-month">per month</p>
                <button>Contact</button>
            </div>
            
        </div>
    )
}

export default Price
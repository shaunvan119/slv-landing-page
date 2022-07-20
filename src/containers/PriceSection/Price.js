import './price.css'


function Price() {
    
    return (
        <div className="price-container">
            <div className="price-box">
                <h2 className="price-header">Basic</h2>
                <span className="list-itmes">
                    <p>1 page design</p>
                    <p>Web design customiztion</p>
                    <p>12 months free hosting</p>
                </span>    
                <p className="price">$990</p>
                <button className="price-button-basic">Contact</button>
            </div>
            <div className="price-box-pro">
                <h2 className="price-header-pro">Pro</h2>
                <span className="list-pro">
                    <p>Unlimited pages</p>
                    <p>Web design customiztion</p>
                    <p>12 months free hosting</p>
                    <p>Free Domain</p>
                    <p>Automate website traffic</p>
                    <p>Automate LinkedIn msg</p>
                    <p>Automate email campaigns</p>
                    <p>Lead list creation</p>
                    <p>Multipage website creation</p>
                 </span>   
                <p className="price-pro">$990</p>
                <button className="button-pro">Contact</button>

            </div>
            <div className="price-box">
                <h2 className="price-header">Business</h2>
                <span className="list-itmes">
                    <p>Unlimited pages</p>
                    <p>Web design customiztion</p>
                    <p>12 months free hosting</p>
                    <p>Free Domain</p>
                    <p></p>
                </span>
                <p className="price">$990</p>
                <button className="price-button-business">Contact</button>
            </div>
            
        </div>
    )
}

export default Price
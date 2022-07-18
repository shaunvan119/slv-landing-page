import './topMain.css'
import computer from '../../assets/home/desktop/beautiful-stories.jpg'


function TopMain() {
    
    return (
        <div className="top-main-container">
            <div className="top-main"> 
            <h1 className="main-h1">Turn website <br/>visitors into<br/>buyers</h1>
            <p className="main-p">Get it right the first time, dont spend 30K<br/>
                on a landing page with all the bells and whistles.<br/>
                From the point your prospect hits your website<br/>
                you have less then 15 secounds to attract<br/>
                their attention.</p>   
            </div>
            <img src={computer} alt="computer"/>
       </div>

    )
}

export default TopMain
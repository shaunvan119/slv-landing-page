import './topMainB2b.css'
import CountAppt from '../../../components/CountAppt'
import CountLeads from '../../../components/CountLeads'
import callVid from "../../../assets/callVid.mp4"
import b2bvid from "../../../assets/b2bvid.mp4"



function TopMainB2b() {
    
    return (
        <div className="top-wrapper">
        <div className="top-main-container-one top-count-box">
            <div className="top-main-one count-section count-backgroung"> 
        
            <CountLeads/>
            <CountAppt/>
            </div>
            
             <video src={b2bvid} autoPlay loop muted className="image-main graphic" id="myVideo"/>
       </div>
        <div className="top_wrapper"> 
        <div className="warapper_left">
               <video src={callVid} autoPlay loop muted className="image-main graphic call_vid" id="myVideo"/> 
            </div>
        <div className="wrapper_right">
            <div className='yarris_wrapper'>
                <h2 className="b2b_heading">Yarris</h2>
                    <p className="bottom-p">Helped establish a complex effective sales<br/>
                    process, and an international sales strategy<br/>
                    to grow in the US and Singapore.</p>
            </div>
            <div className='world_wrapper'>
                <h2 className="b2b_heading">Worldstrides</h2>
                    <p className="bottom-p">Built a cold sale funnel to a
                    pipeline of<br/> 2.9 million dollars,
                    in sales, across a<br/> 10 month period.</p>
                
            </div>  
            <div className='aipt_wrapper'>
                <h2 className="b2b_heading">AIPT</h2>
                    <p className="bottom-p bottom-aipt">Built a lead generating network from the<br/> ground up, which
                    has resulted in achieving<br/>  2.5 million in sales revenue.</p>  
            </div> 
            

         </div>
            
            
       </div>

    
    </div>
    )
}

export default TopMainB2b
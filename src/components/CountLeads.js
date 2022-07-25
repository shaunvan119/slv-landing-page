import './count.css'
import CountUp from 'react-countup';

function CountLeads() {
    
    return (
        <CountUp start={0} end={16800} delay={1}>
                {({ countUpRef }) => (
                <div className='count-box'>
                <h1 className="main-h1-count">Leads<br/> Generated<br/></h1>
                <span className='count-component' ref={countUpRef} />
                </div>

                
                )}
        </CountUp>
    )
}

export default CountLeads
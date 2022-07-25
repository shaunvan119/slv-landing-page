import './count.css'

import CountUp from 'react-countup';

function CountWeb() {
    
    return (
        <CountUp start={0} end={200} delay={1}>
                {({ countUpRef }) => (
                <div className='count-box'>
                <h1 className="main-h1-count">websites<br/>saved<br/></h1>
                <span className='count-component' ref={countUpRef} />
                </div>
                
                )}
        </CountUp>
    )
}

export default CountWeb
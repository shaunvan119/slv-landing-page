import './count.css'

import CountUp from 'react-countup';

function CountLines() {
    
    return (
        <CountUp start={0} end={100000} delay={1}>
                {({ countUpRef }) => (
                <div className='count-box'>
                <h1 className="main-h1-count">Lines of code<br/>Written<br/></h1>
                <span className='count-component' ref={countUpRef} />
                </div>
                
                )}
        </CountUp>
    )
}

export default CountLines
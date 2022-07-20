import './count.css'

import CountUp from 'react-countup';

function CountWeb() {
    
    return (
        <CountUp start={0} end={200} delay={1}>
                {({ countUpRef }) => (
                <div className='count-box'>
                <span className='count-component' ref={countUpRef} />
                </div>
                )}
        </CountUp>
    )
}

export default CountWeb
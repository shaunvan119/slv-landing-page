import './count.css'
import React, { useState, useEffect } from 'react';


const CountAppt = () => {
    const [currentCount, setCount] = useState(0);
    const timer = () => setCount(currentCount + 20);

    useEffect(
        () => {
            if (currentCount >= 3200) {
                return;
            }
            const id = setInterval(timer, 0);
            return () => clearInterval(id);
        },
        
    );

    return (
        <div className='count-box'>
                <h1 className="main-h1-count">Appointments<br/>booked<br/></h1>
                <span className='count-component'>{currentCount}</span> 
                </div>
       
    )
};


export default CountAppt
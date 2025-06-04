import React, { useState, useEffect} from 'react'; 

function Timer() {
    const [time,setTime] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(() =>setTime(t => t  + 1),1000);
        return () => clearInterval(intervalId);

    },[])
    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>Timer Component</h1>
            <p>Time: {time} seconds</p>
            <button onClick={() => setTime(0)} style={{ padding: '10px 20px', borderRadius: '5px' }}>Reset Timer</button>
        </div>
    );
}
export default Timer;
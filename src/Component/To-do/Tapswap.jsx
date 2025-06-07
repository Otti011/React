import React, { useState } from 'react';

function TapSwap() { 
    const [count,setCount] = useState(0);
    const Plus = () => {
        setCount(count + 1);
    }
      const Minus = () => {
        setCount(count  -1);
    }
    const incrementFive = () => {
        for (let i =0; i<5; i++){
            setCount(Count => Count + 1);
        }
    }
    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>Tap Swap Component</h1>
            <p>Count: {count}</p>
           <button onClick={Plus} style={{padding: '20px',marginRight:'10px', background: 'green', borderRadius: '30px'}}>+1</button>
           <button onClick={Minus}style={{padding: '20px',marginRight:'10px', background: 'red', borderRadius: '30px'}}>-1</button>
           <button onClick={() => setCount(0)}>Reset</button>
           <button onClick={incrementFive}>Increment 5</button>
        </div>
    );
}
export default TapSwap;
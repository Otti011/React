import React, { useState } from 'react';

function TapSwap() { 
    const [count,setCount] = useState(0);
    const Plus = () => {
        setCount(count + 1);
    }
      const Minus = () => {
        setCount(count  -1);
    }
    return (
        <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
            <h1>Tap Swap Component</h1>
            <p>Count: {count}</p>
           <button onClick={Plus}>+1</button>
           <button onClick={Minus}>-1</button>
           <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
export default TapSwap;
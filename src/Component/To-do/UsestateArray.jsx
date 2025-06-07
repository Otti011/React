import React,{useState} from 'react'

function UsestateArray() {
    const [items, setItems] = useState([]);
    const addItem = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random(2) * 10) + 1
          
        }])
    }
  return (
    <div>
        <button onClick={addItem}>Add a Number</button>
      <ul>
        {
            items.map(
                item => (
                    <li key={item.id}>{item.value}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default UsestateArray

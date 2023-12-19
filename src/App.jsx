import React,{useState} from 'react';
import Imag from "./Imag"

import Button from "./Button/Button";
import List from './List';
const App =()=> {
  const [Items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

     
     
  return (<>
    <div className="main_div">
    
        <div className="center_div">
       <div className='imgg'><Imag/></div>
       <div className='list'>
        <List items={Items}/>
        
        
        </div>
       <div className='buttons'><Button onAddItems ={handleAddItem}  /></div>

</div>
       </div>
        
      
    
    </>
  )
}

export default App;

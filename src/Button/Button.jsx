import React, { useState} from 'react';
import Popup from "./Popup";

const Button = ({onAddItems}) => {
  const [buttonpop, setButtonpop] = useState(false);
  const [data, setData] = useState('');
  
  

  const handlebuttonpop = () => {
    setButtonpop(true);
  };

  const handleinput = (e) => {
    setData(e.target.value);
  };

  const listofitems = () => {
    onAddItems(data);
    

    setButtonpop(!buttonpop);
    setData('');
  };
 
 return (
    <>
      <div class="d-grid gap-2 col-6 mx-auto">
  <button  onClick={handlebuttonpop}  className="btn btn-primary" type="button">+ Add Task</button>

  <Popup trigger={buttonpop}  >
   
  <input className="input" type='text' value={data} placeholder='Add Task' size="60" onChange={handleinput}></input>
  <button className='add-btn' onClick={listofitems}>+</button>
  </Popup>
  </div>
  
  
    </>
    
  )
}

export default Button;

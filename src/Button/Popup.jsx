import React from 'react'
import "./Button.css"

const Popup = (props) => {
  return (props.trigger)?(
    <div className='popup'>
        <div className='popup-inner'>
      
        <h2>Add Task</h2>
            {props.children}
        </div>
      
    </div>
  ):"";
}

export default Popup;

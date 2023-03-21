import React from 'react'
//   passing the props to child 
function Input(props) {
  return (
    <div>
      <input type={props.type} placeholder={props.placeholder} className='form-Input' />
    </div>
  )
}

export default Input
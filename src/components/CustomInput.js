import React from 'react'

const CustomInput = (props) => {
  return (
    <div className='inputWrapper'>
        <label>{props.label}</label>
        <input type='text' value={props.value} className='inputForm' onChange={props.change} placeHolder={props.placeHolder} />
    </div>
  )
}

export default CustomInput
import '../App.css'
import React from 'react'
import CustomButton from './CustomButton'

const Header = (props) => {
  return (
    <div className='header'> 
    <h1>Task Manager</h1>
    <div className='btnWrapper'>
        <CustomButton click={props.handleInput} name='Add' bg='#000EEE' color='white' />
    </div>
    </div>
  )
}

export default Header
import React from 'react'
import CustomButton from '../components/CustomButton';

const Card = (props) => {
  return (
    <div className='Card'>
        <h2>{props.id}</h2>
        <h3>{props.title}</h3>
        <p>{props.des}</p>
        <div className='btnwrapper'>
          <CustomButton name='Complete' click= {props.update} color='white' bg='#000EEE' />
        <CustomButton name='Delete' click={props.delete}  color='red' bg='#000EEE' />
          </div>
    </div>
  )
}

export default Card
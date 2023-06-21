import React from 'react'
import './start.css'

const Button = (props) => {
  return (
    <div>
        <button className={props.myClass} onClick={props.clicked}>{props.name}</button>
    </div>
  )
}

export default Button
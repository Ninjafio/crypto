import React from 'react'
import IProps from '../../types'
import "./Button.css"


const Button = ({ children, classname }:IProps) => {
  return (
    <button className={ classname }>
        { children }
    </button>
  )
}

export default Button
import React from 'react'
import IProps from '../../types'
import "./Card.css"

const Card = ({ children, descr, imgChildren }:IProps) => {
    return (
      <div className='card'>
        <img src={ imgChildren } alt="space" />
          <div className='title-card'>
            { children }
          </div>
          <div className='descr-card'>
            { descr }
          </div>
      </div>
    )
  }

export default Card
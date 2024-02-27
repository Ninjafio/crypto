import React from 'react'
import './CardCreator.css'
import IProps from '../../types'

const CardCreator = ({ children, imgChildren, seeMoreProps }:IProps) => {
  return (
    <div className='card-creator'>
            <div className='img-wrapper'>
                <div className='card-place'>
                    { seeMoreProps }
                </div>
                <div className='creator-pfp'>
                    <img src={ imgChildren } alt="pfp" />
                </div>
            </div>
            <div className='descr-wrapper'>
                <div className='title-creator-card'>
                    { children }
                </div>
                <p className='card-descr-cash'>
                    Total Sales: <span className='totalCash'>34.53 ETH</span>
                </p>
            </div>
    </div>
  )
}

export default CardCreator
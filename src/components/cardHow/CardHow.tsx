import React from 'react'
import './CardHow.css'
import IProps from '../../types'

const CardHow = ({ children, imgChildren, descr }:IProps) => {
  return (
    <div className='cardHow'>
            <img src={ imgChildren } alt="space" className='img-cardHow'/>
            <p className='cardHow-title'>
                { children }
            </p>
            <p className='cardHow-descr'>
                { descr }
            </p>
    </div>
  )
}

export default CardHow
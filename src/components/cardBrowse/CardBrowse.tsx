import React from 'react'
import IProps from '../../types'
import "./CardBrowse.css"

const CardBrowse = ({ children, imgChildren, imgAvatar }:IProps) => {
    return (
      <div className='browse-card'>
        <img src={ imgChildren } alt="space" className='img-browse'/>
        <img src={ imgAvatar } alt="space" className='img-browse-category'/>
          <div className='title-card-browse'>
            { children }
          </div>
      </div>
    )
  }

export default CardBrowse
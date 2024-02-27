import React from 'react'
import "./CardNFT.css"
import IProps from '../../types'

const CardNFT = ({ children, imgChildren, imgAvatar, classname, descr }:IProps) => {
  return (
    <div className={ classname }>
        <img src={ imgChildren } alt="space" className='img-nft'/>
        <div className='title-card-nft'>
            { children }
          </div>
        <div className='user-wrapper-card'>
            <img src={ imgAvatar } alt="space" className='pfp-nft-category'/>
            <div className='username-card'>
                { descr }
            </div>
        </div>
        <div className="info-wrapper">
            <ul className='left-info'>
                <li className='info-item-title'>Price</li>
                <li className='info-item'>1.63 ETH</li>
            </ul>
            <ul className='right-info'>
                <li className='info-item-title'>Highest Bid</li>
                <li className='info-item'>0.33 wETH</li>
            </ul>
        </div>
          
      </div>
  )
}

export default CardNFT
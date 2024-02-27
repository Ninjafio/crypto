import React from 'react'
import IProps from '../../types'
import "./CardTrending.css"

const CardTrending = ({ children, imgTrendingChild, imgChildren,imgSecondTrendingChild,imgAvatar,descr,seeMoreProps}:IProps) => {
    return (
    <div>
      <div className='cards'>
        <div className='cards'>
            <div className='main-pic'>
                <img src={ imgChildren } alt="space" />
            </div>
          <div className='card-items'>
            <div className="card-item">
                <img src={imgTrendingChild} alt='img'/>
            </div>
            <div className="card-item">
                <img src={imgSecondTrendingChild} alt='img'/>
            </div>
            <div className='seeMore'>
                <p className='seeMore-item'>{seeMoreProps}</p>
            </div>
          </div>
          <div className='title-card-name'>
            { children }
          </div>
          <div className='cardFooterItem'>
                <div className='pfp'><img className="pfp" src={imgAvatar} alt="img" /></div>
                <p className='autor-name'>{descr}</p>
          </div>
      </div>
      </div>
      </div>
    )
  }

export default CardTrending
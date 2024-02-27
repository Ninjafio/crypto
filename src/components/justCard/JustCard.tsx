import React from 'react'
import IProps from '../../types'
import "./JustCard.css"

const JustCard = ({imgChildren}:IProps) => {
  return (
    <div className='justImg'>
        <img src={imgChildren} alt="" />
    </div>
  )
}

export default JustCard
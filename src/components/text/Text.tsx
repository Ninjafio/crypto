import React from 'react'
import IProps from '../../types'

const Text = ({ children }:IProps) => {
  return (
    <div className='text-default'>{ children }</div>
  )
}

export default Text
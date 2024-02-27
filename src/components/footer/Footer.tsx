import React from 'react'
import { Button } from '../../components'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <p className='left-title-footer'>
            Explore
        </p>
        <ul className='left-list-footer'>
            <li className='list-item-footer'>Marketplace</li>
            <li className='list-item-footer'>Rankings</li>
            <li className='list-item-footer'>Connect a wallet</li>
        </ul>
        </div>

        <div className='right-wrapper'>
            <p className='right-title-footer'>
                Join our weekly digest
            </p>
            <p className='right-descr-footer'>
                Get exclusive promotions & updates straight to your inbox.
            </p>
        <div>
            <input type="email" required={true} placeholder='Enter your email here' className='input'/>
                <Button classname='defaultInputBtn'>Subscribe</Button>
            </div>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
import {Button} from '../../components/index'
import LogoHeader from "../../img/Logo.svg"

const Header = () => {
  return (
    <div className="header">
        <nav className='navigation'>
            <ul className='header-list'>
                <li className='header-item special'><Link to='/'><a><img src={ LogoHeader } alt="Bruuuh"/></a></Link></li>
                <li className='header-item'><Link to='/marketplace' className='menu-link'>Marketplace</Link></li>
                <li className='header-item'><Link to='/cards' className='menu-link'>Rankings</Link></li>
                <li className='header-item'><Link to='/wallet'><a>Connect a wallet</a></Link></li>
                <div className='btn-header'>
                <li className='header-item'><Link to='/createAcc'><Button classname={'default'}>Sign Up</Button></Link></li>
                </div>
            </ul>
        </nav>
      </div>
  )
}

export default Header

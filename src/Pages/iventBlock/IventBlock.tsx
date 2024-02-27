import React from 'react'
import "./IventBlock.css"
import { Title, Button, Timer } from '../../components/index'
import AvatarMush from "../../img/MushPfp.png"

const IventBlock = () => {
  return (
    <div className='iventBlock'>
        <div className="container-ivent">
            <div className="left-wrapper-ivent">
                <div className='user-ivent'>
                    <img src={AvatarMush } alt="Avatar" />
                    <span>
                        Shroomie
                    </span>
                </div>
                <div className='ivent-title'>
                <Title>Magic Mashrooms</Title>
                </div>
                <Button classname={ 'iventBtn' }>See NFT</Button>
            </div>
            <div className="right-wrapper-ivent">
                <Timer/>
            </div>
        </div>
    </div>
  )
}

export default IventBlock
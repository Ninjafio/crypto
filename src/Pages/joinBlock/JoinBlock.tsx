import React from 'react'
import { Title, Text, Button } from '../../components'
import SpaceMan from "../../img/SpaceManJoin.png"
import "./JoinBlock.css"

const JoinBlock = () => {
  return (
    <div className='joinblock'>
        <img src={ SpaceMan } alt="space" className='img-join'/>
        <div className='container-join'>
            <div className='title-join'>
                <Title>
                    Join our weekly digest
                </Title>
            </div>
            <div className='text-join'>
                <Text>
                    Get exclusive promotions & updates straight to your inbox.
                </Text>
            </div>
            <div>
            <input type="email" required={true} placeholder='Enter your email here' className='input'/>
            <Button classname='defaultInputBtn'>Subscribe</Button>
            </div>
        </div>
    </div>
  )
}

export default JoinBlock
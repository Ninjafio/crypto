import React from 'react'
import "./CreateBlock.css"
import { JustCard, Title,Text, Button } from '../../components'
import { ColCat, SpacePlaseholder } from '../../img'
 

const CreateBlock = () => {
  return (
    <div className='createBlock'>
        <div className='container_create'>
            <div className='left-content'>
                <JustCard imgChildren={SpacePlaseholder}></JustCard>
            </div>
            <div className='right-content'>
                <div className="right-content-title">
                    <Title>Create Account</Title>
                </div>
                <Text>Welcome! enter your details and start creating, collecting and selling NFTs.</Text>
                
                    <form>
                    <div className='form'>
                        <input className='form-item username' placeholder='Username' type='name'></input>
                        <input className='form-item email-icon' placeholder='Email Adress'></input>
                        <input className='form-item password-icon' type="text" placeholder='Password' />
                        <input className='form-item confirm-icon' type="text" placeholder='Confirm Password'/>
                        <div className='btn-spc'>
                        <Button classname='default'>Create account</Button>
                        </div>
                    </div>
                    </form>

            </div>
        </div>
    </div>
  )
}

export default CreateBlock
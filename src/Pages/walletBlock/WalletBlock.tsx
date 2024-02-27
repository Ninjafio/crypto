import React from 'react'
import "./WalletBlock.css"
import { JustCard, Title,Text, Button } from '../../components'
import { Metamask, SecondSpacePlaceholder } from '../../img'
 

const WalletBlock = () => {
  return (
    <div className='walletBlock'>
        <div className='container-wallets'>
            <div className='wallets-left-content'>
                <JustCard imgChildren={SecondSpacePlaceholder}></JustCard>
            </div>
            <div className='right-content'>
                <div className="right-content-title">
                    <Title>Connect wallet</Title>
                </div>
                <div className='wallet-txt'>
                <Text>Choose a wallet you want to connect.</Text>
                <Text>There are several wallet providers.</Text>
                </div>
                    <form>
                    <div className='wallets'>
                    <div className='wallets-item'>
                    <img src={Metamask} alt='huh'></img>
                    </div>
                    <div className='wallets-item'>
                    <img src={Metamask} alt='huh'></img>
                    </div>                 
                    <div className='wallets-item'>
                    <img src={Metamask} alt='huh'></img>
                    </div>
                    </div>
                    </form>

            </div>
        </div>
    </div>
  )
}

export default WalletBlock
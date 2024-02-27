import React from 'react'
import "./HowBlock.css"
import { Title, Text, CardHow } from '../../components'
import { FirstIcon, SecIcon, ThirdIcon } from "../../img/index"

const HowBlock = () => {
  return (
  <div>
    <div className="how-title-wrapper">
        <div className="how-title">
          <Title>
            Discover More NFTs
          </Title>
        </div>
        <div className="how-descr">
          <Text>
            Explore new trending NFTs
          </Text>
        </div>
      </div>
      <div className="how-card-wrapper">
        <CardHow imgChildren={ FirstIcon } descr='Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.'>Setup Your wallet</CardHow>
        <CardHow imgChildren={ SecIcon } descr='Upload your work and setup your collection. Add a description, social links and floor price.'>Create Collection</CardHow>
        <CardHow imgChildren={ ThirdIcon } descr='Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'>Start Earning</CardHow>
      </div>
    </div>
  )
}


export default HowBlock
import React from 'react'
import "./DiscoverBlock.css"
import { Button, Title, Text, CardNFT } from '../../components'
import { FirstImgCard, SecImgCard, ThirdImgCard, FirstPFPCard, SecPFPCard, ThirdPFPCard } from "../../img/index"

const DiscoverBlock = () => {
  return (
  <div>
    <div className="discover-title-wrapper">
        <div className="discover-title">
          <Title>
            Discover More NFTs
          </Title>
        </div>
        <div className="discover-descr">
          <Text>
            Explore new trending NFTs
          </Text>
          <Button classname={'primaryDics'}>
            See All
          </Button>
        </div>
      </div>
      <div className="discover-card-wrapper">
        <CardNFT descr='MoonDancer' imgAvatar={ FirstPFPCard } imgChildren={ FirstImgCard } classname={ "defaultNFT" }>Distant Galaxy</CardNFT>
        <CardNFT descr='NebulaKid' imgAvatar={ SecPFPCard } imgChildren={ SecImgCard } classname={ "defaultNFT" }>Life On Edena</CardNFT>
        <CardNFT descr='Spaceone' imgAvatar={ ThirdPFPCard } imgChildren={ ThirdImgCard } classname={ "defaultNFT" }>AstroFiction</CardNFT>
      </div>
    </div>
  )
}

export default DiscoverBlock
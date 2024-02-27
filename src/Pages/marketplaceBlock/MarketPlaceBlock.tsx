import React from 'react'
import { CardNFT, Title, Text} from '../../components'
import { FirstImgCard, FirstPFPCard, SecImgCard, SecPFPCard, ThirdImgCard, ThirdPFPCard } from '../../img'
import "./MarketPlaceBlock.css"

const MarketPlaceBlock = () => {
  return (
    <div className='marketBlock'>

    <div className='market-header'>
        <div className='market-title'>
        <Title>Browse Marketplace</Title>
        </div>
        <Text>Browse through more than 50k NFTs on the NFT Marketplace.</Text>
        <div className='header_input_block'>
                <div className='header_input'>
                    <input placeholder='Search your favorite NFT'></input>
                </div>
            </div>
    </div>

    <div className='market_choose'>
        <div className='market_nfts'>
            <div className='market_nfts_items'>
                <Text>NFTs</Text>
                <div className='market_nfts_num'><Text>302</Text></div>
            </div>

            <div className='market_nfts_items'>
                <Text>Collections</Text>
                <div className='market_nfts_num'><Text>67</Text></div>
            </div>  
        </div>
    </div>
    <div className='card-main'>
    <div className="marketplace-card-wrapper">
    <CardNFT descr='MoonDancer' imgAvatar={ FirstPFPCard } imgChildren={ FirstImgCard } classname={ "defaultNFT" }>Distant Galaxy</CardNFT>
    <CardNFT descr='NebulaKid' imgAvatar={ SecPFPCard } imgChildren={ SecImgCard } classname={ "defaultNFT" }>Life On Edena</CardNFT>
    <CardNFT descr='Spaceone' imgAvatar={ ThirdPFPCard } imgChildren={ ThirdImgCard } classname={ "defaultNFT" }>AstroFiction</CardNFT>
    <CardNFT descr='MoonDancer' imgAvatar={ FirstPFPCard } imgChildren={ FirstImgCard } classname={ "defaultNFT" }>Distant Galaxy</CardNFT>
    <CardNFT descr='NebulaKid' imgAvatar={ SecPFPCard } imgChildren={ SecImgCard } classname={ "defaultNFT" }>Life On Edena</CardNFT>
    <CardNFT descr='Spaceone' imgAvatar={ ThirdPFPCard } imgChildren={ ThirdImgCard } classname={ "defaultNFT" }>AstroFiction</CardNFT>
    <CardNFT descr='MoonDancer' imgAvatar={ FirstPFPCard } imgChildren={ FirstImgCard } classname={ "defaultNFT" }>Distant Galaxy</CardNFT>
    <CardNFT descr='NebulaKid' imgAvatar={ SecPFPCard } imgChildren={ SecImgCard } classname={ "defaultNFT" }>Life On Edena</CardNFT>
    <CardNFT descr='Spaceone' imgAvatar={ ThirdPFPCard } imgChildren={ ThirdImgCard } classname={ "defaultNFT" }>AstroFiction</CardNFT>
    <CardNFT descr='MoonDancer' imgAvatar={ FirstPFPCard } imgChildren={ FirstImgCard } classname={ "defaultNFT" }>Distant Galaxy</CardNFT>
    <CardNFT descr='NebulaKid' imgAvatar={ SecPFPCard } imgChildren={ SecImgCard } classname={ "defaultNFT" }>Life On Edena</CardNFT>
    <CardNFT descr='Spaceone' imgAvatar={ ThirdPFPCard } imgChildren={ ThirdImgCard } classname={ "defaultNFT" }>AstroFiction</CardNFT>
  </div>
  </div>
  </div>
  )
}

export default MarketPlaceBlock
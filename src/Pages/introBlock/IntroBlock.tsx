import React from 'react'
import { Title, Button, Text, Card } from '../../components/index'
import "./IntroBlock.css"
import SpaceMan from '../../img/spaceMan.png'

const IntroPage = () => {
return (
    <div className='introPage'>
        <div className='main-wrapper'>
            <div>
                <div className="title-elem">
                     <Title>
                       Discover Digital Art &amp; Collect NFTs
                    </Title>
                </div>
                <div className="text-elem">
                    <Text>
                        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
                     </Text>
                </div>
                <Button classname={'default'}>
                    Get Started
                </Button>
                <ul className='intro-list'>
                    <li className='intro-list-item'>
                        <p className='intro-list-item-num'>240k+</p>
                        <Text>
                            Total Sale
                        </Text>
                    </li>
                    <li className='intro-list-item'>
                        <p className='intro-list-item-num'>100k+</p>
                        <Text>
                            Auctions
                        </Text>
                    </li>
                    <li className='intro-list-item'>
                        <p className='intro-list-item-num'>240k+</p>
                        <Text>
                            Artists
                        </Text>
                    </li>
                </ul>
            </div>
            <div>
                <Card imgChildren={ SpaceMan } descr="AnimaKid">
                    Space Walking
                </Card>
            </div>
        </div>
        
    </div>
)
}

export default IntroPage
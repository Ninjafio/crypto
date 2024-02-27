import React from 'react'
import { Title, Text, CardTrending} from '../../components'
import "./TrendingBlock.css"
import { Dog, Squirel, Bear, AvatarFox, AvatarMush, PrimMush, SecMushFirst, SecMushSec, PrimRob, SecRobFirst, SecRobhSec, RobPfp } from "../../img/index"


const TrendingBlock = () => {
  return (
<div>
    <div className='trendingBlock'>
        <div className='trendingBlock-items'>
                <div className="blockTitle">
                    <Title>Trending Collection</Title>
                </div>
                <div className="blockText">
                     <Text>Checkout our weekly updated trending collection.</Text>   
                </div>
            <div className="trending-cards">
            <CardTrending imgChildren={Dog} imgTrendingChild={Squirel} imgSecondTrendingChild={Bear} imgAvatar = {AvatarFox} descr='MrFox' seeMoreProps={"1025+"}>DSGN Animals</CardTrending>
            <CardTrending imgChildren={PrimMush} imgTrendingChild={SecMushFirst} imgSecondTrendingChild={SecMushSec} imgAvatar = {AvatarMush} descr='Shroomie' seeMoreProps={"1025+"}>Magic Mushrooms</CardTrending>
            <CardTrending imgChildren={PrimRob} imgTrendingChild={SecRobFirst} imgSecondTrendingChild={SecRobhSec} imgAvatar = {RobPfp} descr='BeKind2Robots' seeMoreProps={"1025+"}>Disco Machines</CardTrending>
            </div>
        </div>
    </div>
</div>
  )
}

export default TrendingBlock
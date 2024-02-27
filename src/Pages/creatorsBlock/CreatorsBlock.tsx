import React from 'react'
import KeepPfp from "../../img/KeepPfp.png"
import { Title, Text, CardCreator, Button} from '../../components'
import { FoxPfp, RobotPfp, ShroPfp, BluePfp, JuPfp, GravPfp, DifPfp, RusPfp, AnimPfp, DotPfp, GhiPfp } from "../../img/index"
import "./CreatorsBlock.css"

const CreatorsBlock = () => {
  return (
    <div className='creatorsBlock'>
      <div className="creators-title-wrapper">
        <div className="creators-title">
          <Title>
            Top creators
          </Title>
        </div>
        <div className="creators-descr">
          <Text>
            Checkout Top Rated Creators on the NFT Marketplace
          </Text>
          <Button classname={'primary'}>
            View Rankings
          </Button>
        </div>
      </div>
        <div className='creators-cards'>
          <CardCreator seeMoreProps={"1"} imgChildren={ KeepPfp }>Keepitreal</CardCreator>
          <CardCreator seeMoreProps={"2"} imgChildren={ DifPfp }>DigiLab</CardCreator>
          <CardCreator seeMoreProps={"3"} imgChildren={ GravPfp }>GravityOne</CardCreator>
          <CardCreator seeMoreProps={"4"} imgChildren={ JuPfp }>Juanie</CardCreator>
          <CardCreator seeMoreProps={"5"} imgChildren={ BluePfp }>BlueWhale</CardCreator>
          <CardCreator seeMoreProps={"6"} imgChildren={ FoxPfp }>Mr Fox</CardCreator>
          <CardCreator seeMoreProps={"7"} imgChildren={ ShroPfp }>Shroomie</CardCreator>
          <CardCreator seeMoreProps={"8"} imgChildren={ RobotPfp }>Robotica</CardCreator>
          <CardCreator seeMoreProps={"9"} imgChildren={ RusPfp }>RustyRobot</CardCreator>
          <CardCreator seeMoreProps={"10"} imgChildren={ AnimPfp }>Animakid</CardCreator>
          <CardCreator seeMoreProps={"11"} imgChildren={ DotPfp }>Dotgu</CardCreator>
          <CardCreator seeMoreProps={"12"} imgChildren={ GhiPfp }>Ghiblier</CardCreator>
        </div>
    </div>
  )
}

export default CreatorsBlock
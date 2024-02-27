import React from 'react'
import { Title, CardBrowse} from '../../components'
import { ArtCategory, ArtImg, ColCat, MusCat, PhotoCat, VidCat, UtCat, SpCat, VirtCat, SwaImg, MusImg, CamImg, VidImg, UtImg, SpImg, VirtImg } from "../../img/index"
import "./BrowseBlock.css"

const BrowseBlock = () => {
  return (
    <div className='browseBlock'>
          <div className="browse-title">
            <Title>
              Browse Categories
            </Title>
          </div>
          <div className="cards-container">
            <CardBrowse imgChildren={ ArtCategory } imgAvatar={ ArtImg }>Art</CardBrowse>
            <CardBrowse imgChildren={ ColCat } imgAvatar={ SwaImg }>Collectibles</CardBrowse>
            <CardBrowse imgChildren={ MusCat } imgAvatar={ MusImg }>Music</CardBrowse>
            <CardBrowse imgChildren={ PhotoCat } imgAvatar={ CamImg }>Photography</CardBrowse>
            <CardBrowse imgChildren={ VidCat } imgAvatar={ VidImg }>Video</CardBrowse>
            <CardBrowse imgChildren={ UtCat } imgAvatar={ UtImg }>Utility</CardBrowse>
            <CardBrowse imgChildren={ SpCat } imgAvatar={ SpImg }>Sport</CardBrowse>
            <CardBrowse imgChildren={ VirtCat } imgAvatar={ VirtImg }>Virtual Worlds</CardBrowse>
          </div>
    </div>
  )
}

export default BrowseBlock
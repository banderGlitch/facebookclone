import React from 'react'
import './Share.css';
import img from '../../../public/assets/person/1.jpeg'
import {PermMedia, Label,Room, EmojiEmotions} from "@mui/icons-material";

export default function Share() {
  return (
    <div className='share '>
       <div className="shareWrapper">
        <div className="shareTop">
            <img className='shareProfileImg' src={img} alt='No Image Found!'/>
            <input placeholder='Whats in your mind ?' type='text' className='shareInput'/>
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className='shareBtnOptions'>
                <PermMedia htmlColor='tomato' className='shareIcon'/>
                <span  className='shareOptionText'>Photo or Video</span>
            </div>
            <div className='shareBtnOptions'>
            <Label htmlColor="blue" className="shareIcon"/>
                <span  className='shareOptionText'>Tag</span>
            </div>
            <div className='shareBtnOptions'>
                <Room htmlColor='green' className='shareIcon'/>
                <span className='shareOptionText'>Feelings</span>
            </div>
            <div className='shareBtnOptions'>
            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                <span  className='shareOptionText'>Location</span>
            </div>
            <div className='sharenew'>
            <button className='sharebutton'>Share</button>
            </div>
           

        </div>
       </div>
      
    </div>
  )
}

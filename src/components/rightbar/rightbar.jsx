import React from 'react'
import './rightbar.css'
import birthday from '../../../public/assets/gift.png';
import ads from '../../../public/assets/ad.png'
import img3 from '../../../public/assets/person/3.jpeg'
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className='birthdayImg' src={birthday} alt='Not Found' />
          <span className='birthdayText'> 
          <b>Nernay Kumar</b> and <b> 3 others </b> have birthday today
          </span>
        </div>
        <img className='rightbarAd' src={ads} alt='NotFound'/>
        <h4 className='rightbarTitle'>Online Friend</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={img3} alt='Not Found'/>
            </div>
            <span className='rightbarUsername'>John Doe</span>
          </li>
          <span className="spanrightUserOnline"></span>

        </ul>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={img3} alt='Not Found'/>
            </div>
            <span className='rightbarUsername'>John Doe</span>
          </li>
          <span className="spanrightUserOnline"></span>

        </ul>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={img3} alt='Not Found'/>
            </div>
            <span className='rightbarUsername'>John Doe</span>
          </li>
          <span className="spanrightUserOnline"></span>

        </ul>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={img3} alt='Not Found'/>
            </div>
            <span className='rightbarUsername'>John Doe</span>
          </li>
          <span className="spanrightUserOnline"></span>

        </ul>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={img3} alt='Not Found'/>
            </div>
            <span className='rightbarUsername'>John Doe</span>
          </li>
          <span className="spanrightUserOnline"></span>

        </ul>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img className='rightbarProfileImg' src={img3} alt='Not Found'/>
            </div>
            <span className='rightbarUsername'>John Doe</span>
          </li>
          <span className="spanrightUserOnline"></span>

        </ul>
      </div>
    </div>
  )
}

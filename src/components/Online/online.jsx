import React from 'react'
import './online.css';
const Online = ({user}) => {
    return (
        <ul className='rightbarFriendList'>
        <li className='rightbarFriend'>
          <div className="rightbarProfileImgContainer">
            <img className='rightbarProfileImg' src={`../../../public/${user.profilePicture}`} alt='Not Found'/>
          </div>
          <span className='rightbarUsername'>{user.username}</span>
        </li>
        <span className="spanrightUserOnline"></span>

      </ul>

    )
}

export default Online
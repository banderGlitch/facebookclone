import React from 'react'
import './rightbar.css'
import birthday from '../../../public/assets/gift.png';
import ads from '../../../public/assets/ad.png'
import img3 from '../../../public/assets/person/3.jpeg'
import Online from '../Online/online';
import { Users } from '../../dummydata';
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
        {Users.map( u => (
          <Online key={u.id} user={u}/>
        ))}
      </div>
    </div>
  )
}

import "./rightbar.css";
import { Users } from '../../dummydata';
import Online from '../../components/Online/online'
import img_1 from '../../../public/assets/person/1.jpeg'
import img_2 from '../../../public/assets/person/2.jpeg'
import img_3 from '../../../public/assets/person/3.jpeg'
import img_4 from '../../../public/assets/person/4.jpeg'
import img_5 from '../../../public/assets/person/5.jpeg'
import img_6 from '../../../public/assets/person/6.jpeg'


export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={img_6}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={img_1}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={img_2}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={img_3}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={img_4}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={img_5}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
      {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

// import React from 'react'
// import './rightbar.css'
// import birthday from '../../../public/assets/gift.png';
// import ads from '../../../public/assets/ad.png'
// import img3 from '../../../public/assets/person/3.jpeg'
// import Online from '../Online/online';
// import { Users } from '../../dummydata';
// export default function Rightbar() {
//   return (
//     <div className='rightbar'>
//       <div className="rightbarWrapper">
//         <div className="birthdayContainer">
//           <img className='birthdayImg' src={birthday} alt='Not Found' />
//           <span className='birthdayText'> 
//           <b>Nernay Kumar</b> and <b> 3 others </b> have birthday today
//           </span>
//         </div>
//         <img className='rightbarAd' src={ads} alt='NotFound'/>
//         <h4 className='rightbarTitle'>Online Friend</h4>
//         {Users.map( u => (
//           <Online key={u.id} user={u}/>
//         ))}
//       </div>
//     </div>
//   )
// }

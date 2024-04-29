import React from 'react'
import './Profile.css'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/rightbar';
import img1 from '../../../public/assets/person/1.jpeg';
import img2 from '../../../public/assets/person/2.jpeg';

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className='profileContainer'>
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className='profileCover'>
                            <img src={img1} className='profileCoverImg' alt='Not Found' />
                            <img src={img2} className='profileUserImg' alt='Not Found' />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Nernay Kumar</h4>
                            <span className='profileInfoDescription'>Hello my first!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />
                    </div>

                </div>

            </div>

        </>
    )
}
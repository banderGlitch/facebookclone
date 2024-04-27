import React from 'react';
import './Topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import img1 from '/assets/person/1.jpeg';

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className='topbarLeft'>
                <span className='logo'>Facebook</span>
            </div>
            <div className='topbarCenter'>
                <div className='searchbar'>
                    <SearchIcon />
                    <input className='inputStyle' placeholder='Enter your search' />
                </div>
            </div>
            <div className='Homepage-timeline'>
                <div>
                    <span className='topbarLink logo'>Homepage</span>
                </div>
                <div>
                    <span className='topbarLink  logo'>Timeline</span>
                </div>
            </div>
            <div className='topbarRight'>
                <div className='topbarIcons logo'>
                    <PersonIcon />
                    <span>1</span>
                </div>
                <div className='topbarIcons logo'>
                    <MessageIcon />
                    <span>2</span>
                </div>
                <div className='topbarIcons logo'>
                    <NotificationsIcon />
                    <span>3</span>
                </div>
                <img src={img1} alt='not found' className='classTopbarImg' />
            </div>
        </div>
    );
}
// import React from 'react'
// import './Topbar.css'
// import SearchIcon from '@mui/icons-material/Search';
// import PersonIcon from '@mui/icons-material/Person';
// import MessageIcon from '@mui/icons-material/Message';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import img1 from '/assets/person/1.jpeg';

// export default function Topbar() {
//     return (
//         <div className='topbarContainer'>
//             <div className='topbarLeft'>
//                 <span className='logo'>Facebook</span>
//             </div>
//             <div className='topbarCenter'>
//                 <div className='searchbar'>
//                     <div className='svgclass'>
//                         <SearchIcon />
//                     </div>
//                     <div className='searchInput'>
//                         <input className='inputStyle' placeholder='Enter your search' />
//                     </div>
//                 </div>
//             </div>
//             <div className='Homepage-timeline'>
//                 <div>
//                     <span className='topbarLink logo'>Homepage</span>
//                 </div>
//                 <div>
//                     <span className='topbarLink  logo'>Timeline</span>

//                 </div>

//             </div>
//             <div className='topbarRight'>
//                 <div className='topbarIcons logo'>
//                     <PersonIcon />
//                     <span style={{ color : 'red', position: "relative", right: "3px", bottom: "15px" }}>1</span>
//                 </div>
//                 <div className='topbarIcons logo'>
//                     <MessageIcon />
//                     <span style={{ color : 'red', position: "relative", right: "3px", bottom: "15px" }}>2</span>
//                 </div>
//                 <div className='topbarIcons logo'>
//                     <NotificationsIcon />
//                     <span style={{ color: 'red', position: "relative", right: "3px", bottom: "15px" }}>3</span>
//                 </div>
//                 <img src={img1} alt='not found' className='classTopbarImg' />
//             </div>

//         </div>
//     )
// }

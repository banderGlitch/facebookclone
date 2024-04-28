import React from 'react'
import './sidebar.css';
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School, }
    from "@mui/icons-material";
import img2 from '/assets/person/2.jpeg';


export default function Sidebar() {


    // const imgSrc = img2; // Assuming img2 is your image source

    // // Repeat the UI structure 20 times
    // const friendItems = Array.from({ length: 20 }, (_, index) => (
    //     <li className='sidebarFriend' key={index}>
    //         <img className='sidebarfriendImg' src={imgSrc} alt='' />
    //         <span className='sidebafriendName'>Jane Doe</span> {/* Assuming static name */}
    //     </li>
    // ));


    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon" />
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon" />
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sidebarIcon" />
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon" />
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon" />
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon" />
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon" />
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon" />
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <div className='sidebuttonbar'>
                    <button className='sidebarButton'>Show More</button>
                </div>
                <div className='sidebarHr'>
                    <hr />
                </div>
                <ul className='sidebarFriendList'>
                {/* {friendItems} */}
                    <li className='sidebarFriend'>
                        <img className='sidebarfriendImg' src={img2} alt='' />
                        <span className='sidebafriendName'>Jane Doe</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarfriendImg' src={img2} alt='' />
                        <span className='sidebafriendName'>Jane Doe</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarfriendImg' src={img2} alt='' />
                        <span className='sidebafriendName'>Jane Doe</span>
                    </li>
                    <li className='sidebarFriend'>
                        <img className='sidebarfriendImg' src={img2} alt='' />
                        <span className='sidebafriendName'>Jane Doe</span>
                    </li>


                </ul>
            </div>

        </div>
    )
}

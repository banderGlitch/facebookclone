import React from "react";
import img2 from "/assets/person/2.jpeg";
import './closeFriend.css';

export default function CloseFriend({user}) {
  return (
    <>
      <li className="sidebarFriend">
        <img className="sidebarfriendImg" src={`../../../public/${user.profilePicture}`} alt="" />
        <span className="sidebafriendName">{user.username}</span>
      </li>
    </>
  );
}

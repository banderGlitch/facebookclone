import React from 'react'
import './home.css'
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/sidebar';
import Feed from '../../components/feed/Feed';
import Rightbar from '../../components/rightbar/rightbar';
export default function Home() {
  return (
    <>
      <Topbar />
      <div className='homeContainer'>
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>

    </>
  )
}

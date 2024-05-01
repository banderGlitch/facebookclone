import React, { useEffect, useState } from 'react'
import './Feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts } from '../../dummydata';
export default function Feed() {

  const [posts , setPosts ] = useState([]); 

  useEffect(() => {
    console.log("Feeds rendered")

  },[])
  return (
    <div className='feed'>
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
    </div>
  )
}

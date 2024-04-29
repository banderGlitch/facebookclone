import React, { useEffect } from 'react'
import './Feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts } from '../../dummydata';
export default function Feed() {
  console.log("Posts--------------->", Posts)
  return (
    <div className='feed'>
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
    </div>
  )
}

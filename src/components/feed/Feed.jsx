import React, { useEffect, useState, useContext, useReducer} from 'react'
import './Feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import {Posts } from '../../dummydata';
import { fetchPost } from '../../apiCalls';
import AuthReducer from '../../context/AuthReducer';
import { AuthContext } from '../../context/AuthContext';
import { timelineApi } from '../../apiCalls';
import {profile_Details } from '../../apiCalls'

export default function Feed({username}) {


  const [posts , setPosts ] = useState([]); 

  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ? await profile_Details(username)  :  await timelineApi(user._id)
      console.log("res-----------><----------", res)
      setPosts(
        res.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      )

    }
    fetchPosts()

  },[username , user._id])

  useEffect(() => {

    console.log("posts--------------------->",posts)

  },[posts])

  console.log("user---------------->", user)


  return (
    <div className='feed'>
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p}/>
        ))}
    </div>
  )
}

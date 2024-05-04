import './Post.css'
import { useState, useContext, useEffect } from 'react';
import img1 from '../../../public/assets/person/1.jpeg'
import Like from '../../../public/assets/like.png';
import Heart from '../../../public/assets/heart.png';
import { MoreVert } from "@mui/icons-material";
import { Users } from '../../dummydata';
import { format } from "timeago.js";
import { AuthContext } from '../../context/AuthContext';
import { like_counter } from '../../apiCalls';


export default function Post({post}) {

    console.log("post--------------------><-------------!", post)

    const {user : currentUser } = useContext(AuthContext)

    const [like, setLike] = useState(post?.likes.length)
    const [isLiked,  setIsLiked ] = useState(false)


    useEffect(() => {
        setIsLiked(post.likes.includes(currentUser._id))
    },[currentUser._id, post.likes])

    const likeHandler = async (id, user_id) => {
        await like_counter(id, user_id)
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
 
    // const fetchUserName = (id) => {
    //     const user = Users.filter(u => u.id === id)[0].username
    //     return user
        
    // }

    // const fetchUseProfilePic = (id) => {
    //     const profilePic = Users.filter(u => u.id === id)[0]?.profilePicture
    //     return profilePic
    // }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfile' 
                        src={ currentUser.profilePicture ? `../../../public/assets/person/${currentUser.profilePic} ` : `../../../public/assets/person/noAvatar.png` } 
                        alt='Not found'/>
                        <span className="postUsern">{currentUser.username}</span>
                        <span className="postDate">{format(post?.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className='postText'>{post.desc}</span>
                    <img className='postImg' src={`../../../public/${post?.img}`} alt='Not Found'/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src={Like} onClick={() => likeHandler(post._id, currentUser._id)} alt='Not Found'/>
                        <img className='heartIcon' src={Heart} onClick={() => likeHandler(post._id, currentUser._id)} alt='Not Found'/>
                        <span className='likeCounter'>{`${like} Likes`}</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className="postcommentText">
                            {`${post?.comment === undefined ? '0' : post?.comment} comments`}
                        </span>

                    </div>
                </div> 
            </div>

        </div>
    )
}
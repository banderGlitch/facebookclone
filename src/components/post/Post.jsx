import './Post.css'
import { useState } from 'react';
import img1 from '../../../public/assets/person/1.jpeg'
import Like from '../../../public/assets/like.png';
import Heart from '../../../public/assets/heart.png';
import { MoreVert } from "@mui/icons-material";
import { Users } from '../../dummydata';

console.log("Users-->", Users)
export default function Post({post}) {

    const [like, setLike] = useState(post?.like)
    const [isLiked,  setIsLiked ] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
 
    const fetchUserName = (id) => {
        const user = Users.filter(u => u.id === id)[0].username
        return user
        
    }

    const fetchUseProfilePic = (id) => {
        const profilePic = Users.filter(u => u.id === id)[0].profilePicture
        return profilePic
    }

    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfile' src={`../../../public/${fetchUseProfilePic(post.id)}`} alt='Not found'/>
                        <span className="postUsern">{fetchUserName(post.id)}</span>
                        <span className="postDate">{post?.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className='postText'>Hey! Its my first post:</span>
                    <img className='postImg' src={`../../../public/${post?.photo}`} alt='Not Found'/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src={Like} onClick={likeHandler} alt='Not Found'/>
                        <img className='heartIcon' src={Heart} onClick={likeHandler} alt='Not Found'/>
                        <span className='likeCounter'>{`${like} Likes`}</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className="postcommentText">
                            {`${post?.comment} comments`}
                        </span>

                    </div>
                </div> 
            </div>

        </div>
    )
}
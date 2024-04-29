import './Post.css'
import img1 from '../../../public/assets/person/1.jpeg'
import img2 from '../../../public/assets/person/2.jpeg';
import Like from '../../../public/assets/like.png';
import Heart from '../../../public/assets/heart.png';
import { MoreVert } from "@mui/icons-material";
export default function Post() {
    return (
        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfile' src={img1} alt='Not found'/>
                        <span className="postUsern">Nernay Kumar</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className='postText'>Hey! Its my first post:</span>
                    <img className='postImg' src={img2} alt='Not Found'/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src={Like} alt='Not Found'/>
                        <img className='heartIcon' src={Heart} alt='Not Found'/>
                        <span className='likeCounter'>32 people liked it</span>
                    </div>
                    <div className='postBottomRight'>
                        <span className="postcommentText">
                            9 Comments
                        </span>

                    </div>
                </div> 
            </div>

        </div>
    )
}
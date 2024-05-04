import { apiPost } from "./_services/_apiServices"
import { apiGet } from "./_services/_apiServices";
import { apiPut } from "./_services/_apiServices";
import { toast } from "react-hot-toast";

const BASE_URL = `http://localhost:3000/`

// Login Api Execution 
export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" })
    try {
        const res = await apiPost(`${BASE_URL}api/auth/login`, userCredential)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.user })
        if (res.authorized === false){
            toast.error("Something went wrong!")
            dispatch({ type: "LOGIN_FAILURE", payload: err})
        }
        else {
            toast.success("User logged successfully");
        }
    } catch (err) {
        console.log("err", err)
        dispatch({ type: "LOGIN_FAILURE", payload: err})
        toast.error("Email or Password may not be correct")
        throw err
    }

}

// Register Api Execution
export const registerCall = async (userCredential, dispatch) => {
    dispatch({ type: "REGISTRATION_START" })
    try {
        const res = await apiPost(`${BASE_URL}api/auth/register`, userCredential)
        toast.success("User Registered successfully");
        dispatch({ type: "REGISTRATION_SUCCESS" })
        return res

    } catch (err) {
        dispatch({ type: "REGISTRATION_FAILURE", payload: err})
        toast.error("Something went wrong!")
        throw err
    }

}
// Fetch user Api 
export const usersApi  = async(id) => {
    try {
        const user = await apiGet(`${BASE_URL}api/users/?userId=${id},{ 

        }`)
        return user
    } catch (err) {
        toast.error("Something went wrong!")
        throw err
    }
}


//  Feed Fetch Api calls
export const fetchPost = async(userId) => {
    try {
        const Post = await apiGet(`${BASE_URL}api/post/${userId}`)
        console.log("Post", Post)
        return Post
    } catch (err) {
        toast.error("Error while fetching Feeds")
        throw err
    }
}


// Fetch timeline api 
export const timelineApi = async(userId) => {
    try {
        const Post = await apiGet(`${BASE_URL}api/post/timeline/${userId}`)
        console.log("Post", Post)
        return Post
    } catch (err) {
        toast.error("Error while fetching Feeds")
        throw err
    }
}

// Fetch Profile api 

export const profile_Details = async(username) => {
    try {
        const profileDetails = await apiGet(`${BASE_URL}api/post/profile/${username}`)
        console.log("profileDetails", profileDetails)
        return profileDetails
    } catch (err) {
        toast.error("Error while fetching Profile")
        throw err
    }
}

// Like Profile Api is defined here! we have

export const like_counter = async(post_id,  user_id) => {
    try {
        const like_count = await apiPut(`${BASE_URL}api/post/${post_id}/like` ,{
            userId : user_id
        })
        return like_count

    } catch (err) {
        toast.error("Error while getting likes api sorry")
        throw err
    }
}
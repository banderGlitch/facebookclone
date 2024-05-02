import { apiPost } from "./_services/_apiServices"
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
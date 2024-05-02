import { apiPost } from "./_services/_apiServices"
import { toast } from "react-hot-toast";

const BASE_URL = `http://localhost:3000/`


export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" })
    try {
        const res = await apiPost(`${BASE_URL}api/auth/login`, userCredential)
        console.log("res--->", res)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.user })
        if (res.authorized === false){
            toast.error("Something went wrong!")
            dispatch({ type: "LOGIN_FAILURE", payload: err})
        }
        else {
            toast.success("User logged successfully");
        }
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err})
        toast.error("Something went wrong!")
        throw err
    }

}
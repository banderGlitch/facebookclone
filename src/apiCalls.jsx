import { apiPost } from "./_services/_apiServices"

const BASE_URL = `http://localhost:3000/`


export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" })
    try {
        const res = await apiPost(`${BASE_URL}api/auth/login`, userCredential)
        console.log("response from the server",res)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.user })
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err})
        throw err
    }

}
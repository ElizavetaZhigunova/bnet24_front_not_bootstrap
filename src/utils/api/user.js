import { axios } from "../../core"
import { setError, setUser } from "../../store/slices/userSlice"
// import { getAllCustomers } from "./customer"

export const signIn = (email, password) => {
    return async (dispatch) => {
        try {
            const res = await axios.post("/user/sign-in", { email, password })

            // console.log("res", res)

            if (res.data.token) {
                // console.log("res.data.token", res.data.token)
                localStorage.setItem("AccessToken", res.data.token)
                // getAllCustomers(res.data.token)
            }
            dispatch(setUser(res.data))
            return res.status
        } catch (error) {
            console.log("error", error.response.data.message)
            dispatch(setError(true))
            return error.response.status
        }
    }
}

export const signUp = (email, password, firstName, lastName, phone) => {
    return async (dispatch) => {
        const res = await axios
            .post("/user/sign-up", { email, password, firstName, lastName, phone })
            .then((res) => res)
            .catch((e) => e.response.status)
        console.log("res", res)
    }
}

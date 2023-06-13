import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: null,
    isLogin: localStorage.getItem("AccessToken") ? true : false,
    error: false,
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.data = action.payload
            state.isLogin = true
            state.error = false
        },
        setError(state, action) {
            state.error = action.payload
        },
        removeUser(state) {
            state.data = null
            state.isLogin = false
        },
    },
})

export const { setUser, setError, removeUser } = userSlice.actions

export default userSlice.reducer

import axios from "axios"

axios.defaults.baseURL = "http://84.201.161.189:82/api"
axios.defaults.headers.common["Authorization"] = localStorage.getItem("AccessToken")

export default axios

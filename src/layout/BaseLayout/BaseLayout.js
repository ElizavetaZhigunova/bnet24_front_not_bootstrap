import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { NavBarComponent } from "../../components"
import PageLayout from "../PageLayout/PageLayout"
// import PageLayout from "layout/PageLayout/PageLayout"
// import { NavBar } from "components"
import "./BaseLayout.scss"

const BaseLayout = ({ children }) => {
    const navigate = useNavigate()
    const isLogin = useSelector((state) => state.user.isLogin)

    useEffect(() => {
        if (isLogin === false) {
            navigate("/sign-in")
        }
    })

    return (
        <div className="base">
            <NavBarComponent />
            <PageLayout children={children} />
        </div>
    )
}

export default BaseLayout

import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { ExitIcon } from "../../assets/icons/HeaderIcons/ExitIcon"
import { HamburgerIcon } from "../../assets/icons/HeaderIcons/HamburgerIcon"
// import { removeUser } from "store/slices/userSlice"
import Clock from "./Clock/Clock"
import DateHeader from "./DateHeader/DateHeader"

import "./Header.scss"
import UserMenu from "./UserMenu/UserMenu"
// import UserMenu from "./UserMenu/UserMenu"

export const Header = () => {
    const dispatch = useDispatch()
    const [visibleUserMenu, setVisibleUserMenu] = useState(false)

    // const logOut = () => dispatch(removeUser())

    const handlerUserMenu = () => setVisibleUserMenu(!visibleUserMenu)

    return (
        <div className="header">
            <div className="header__left">
                <div className="header__left-item"></div>
                <div className="header__left-item">
                    <Clock />
                    <DateHeader />
                </div>
                {/* <div className="header__left-item" onClick={logOut}> */}
                <div className="header__left-item">
                    <ExitIcon />
                </div>
            </div>
            <div className="header__right">
                {/* <div onClick={handlerUserMenu}> */}
                <div onClick={handlerUserMenu}>
                    <HamburgerIcon />
                </div>
                <UserMenu visible={visibleUserMenu} />
                {/* <div className="header__right"></div> */}
            </div>
        </div>
    )
}

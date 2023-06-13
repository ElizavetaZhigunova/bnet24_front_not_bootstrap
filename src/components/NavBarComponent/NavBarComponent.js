import React, { useState, } from "react"
import { useSelector } from "react-redux"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { BacketIcon } from "../../assets/icons/NavIcons/BacketIcon"
import { DesktopIcon } from "../../assets/icons/NavIcons/DesktopIcon"
import { RoutesIcon } from "../../assets/icons/NavIcons/RoutesIcon"
import { MapIcon } from "../../assets/icons/NavIcons/MapIcon"
import { DirectoryIcon } from "../../assets/icons/NavIcons/DirectoryIcon"
import { AnalyticsIcon } from "../../assets/icons/NavIcons/AnalyticsIcon"
import { ProfileIcon } from "../../assets/icons/NavIcons/ProfileIcon"

import "./NavBarComponent.scss"

const navItem = [
    {
        path: "/",
        title: "Профиль",
        icon: (fill) => <ProfileIcon fill={fill} />,
    },
    {
        path: "/desktop",
        title: "Рабочий стол",
        icon: (fill) => <DesktopIcon fill={fill} />,
    },
    {
        path: "/orders",
        title: "Заказы",
        icon: (fill) => <BacketIcon fill={fill} />,
    },
    {
        path: "/routes",
        title: "Маршруты",
        icon: (fill) => <RoutesIcon fill={fill} />,
    },
    {
        path: "/map",
        title: "Карта",
        icon: (fill) => <MapIcon fill={fill} />,
    },
    {
        path: "/directory",
        title: "Справочники",
        icon: (fill) => <DirectoryIcon fill={fill} />,
    },
    {
        path: "/analytics",
        title: "Аналитика",
        icon: (fill) => <AnalyticsIcon fill={fill} />,
    },
]

export const NavBarComponent = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const user = useSelector((state) => state?.user?.data?.user)

    const [isBurderOpen, setIsBurgerOpen] = useState(false)
    
    const burgerMenuItems = navItem.filter((item, index) => index <= 0 || index >= 4).map(item => 
        <li key={item.path} onClick={() => navigate(item.path)}>
            {item.path === "/" && user?.avatar ? (
                <image src={user?.avatar} width={60} height={60} />
            ) : (
                item.icon("#ffffff")
            )}

            {item.path === "/" && user?.firstName ? (
                <span style={{ color: "#ffffff" }}>{user.firstName}</span>
            ) : (
                <span style={{ color: "blue" }}>{item.title}</span>
            )}
        </li>
    )

    const menuItems = navItem.slice(1,4).map((el) => {
        const fill = location.pathname === el.path ? "#378FC9" : "#ffffff"
        return (
            <li key={el.path} onClick={() => navigate(el.path)}>
                {el.path === "/" && user?.avatar ? (
                    <image src={user?.avatar} width={60} height={60} />
                ) : (
                    el.icon(fill)
                )}

                {el.path === "/" && user?.firstName ? (
                    <span style={{ color: "#ffffff" }}>{user.firstName}</span>
                ) : (
                    <span style={{ color: fill }}>{el.title}</span>
                )}
            </li>
        )
    })

    // console.log("location", user)

    return (
        <nav className="navBarComponent">
            <ul>
            {isBurderOpen && <div className="burger-menu" >{burgerMenuItems}</div> && <div className="menu-items">{menuItems}</div>}
                {navItem.map((el) => {
                    const fill = location.pathname === el.path ? "#378FC9" : "#ffffff"
                    return (
                        <li key={el.path} onClick={() => navigate(el.path)}>
                            {el.path === "/" && user?.avatar ? (
                                <image src={user?.avatar} width={60} height={60} />
                            ) : (
                                el.icon(fill)
                            )}

                            {el.path === "/" && user?.firstName ? (
                                <span style={{ color: "#ffffff" }}>{user.firstName}</span>
                            ) : (
                                <span style={{ color: fill }}>{el.title}</span>
                            )}
                        </li>
                    )
                })}
            </ul>
            <div style={{color: "blue", fontSize: "20px"}} onClick={() => setIsBurgerOpen(true)}>Открыть бургер</div>
        </nav>
    )
}

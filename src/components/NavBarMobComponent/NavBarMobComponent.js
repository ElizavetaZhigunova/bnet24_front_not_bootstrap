import React, {useState} from 'react'
import { useSelector } from "react-redux"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { BacketIcon } from "../../assets/icons/NavIcons/BacketIcon"
import { DesktopIcon } from "../../assets/icons/NavIcons/DesktopIcon"
import { RoutesIcon } from "../../assets/icons/NavIcons/RoutesIcon"
import { MapIcon } from "../../assets/icons/NavIcons/MapIcon"
import { DirectoryIcon } from "../../assets/icons/NavIcons/DirectoryIcon"
import { AnalyticsIcon } from "../../assets/icons/NavIcons/AnalyticsIcon"
import { ProfileIcon } from "../../assets/icons/NavIcons/ProfileIcon"
import './NavBarMobComponent.scss'

import { useMediaQuery } from 'react-responsive';

const navItem = [
    {
        path: "/",
        title: "Профиль",
        icon: (fill) => <ProfileIcon fill={fill} />,
    },
    {
        path: "/desktop",
        title: "Рабочий стол",
        icon: (fill) => <DesktopIcon fill={fill} width='65' height='65' />,
    },
    {
        path: "/orders",
        title: "Счета",
        icon: (fill) => <BacketIcon fill={fill} width='65' height='65' />,
    },
    {
        path: "/routes",
        title: "Задачи",
        icon: (fill) => <RoutesIcon fill={fill} width='65' height='65'/>,
    },
    {
        path: "/map",
        title: "Сообщения",
        icon: (fill) => <MapIcon fill={fill} width='65' height='65' />,
    },
    {
        path: "/directory",
        title: "Почта",
        icon: (fill) => <DirectoryIcon fill={fill} width='65' height='65' />,
    },
    {
        path: "/directory",
        title: "Партнеры",
        icon: (fill) => <DirectoryIcon fill={fill}  width='65' height='65'/>,
    },
    {
        path: "/analytics",
        title: "Аналитика",
        icon: (fill) => <AnalyticsIcon fill={fill} width='65' height='65' />,
    },
]

export const NavBarMobComponent = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const user = useSelector((state) => state?.user?.data?.user)

    const [isBurderOpen, setIsBurgerOpen] = useState(false)

    const isDesktop = useMediaQuery({
        query: '(min-width: 1025px)' // Задаем минимальную ширину для десктопов
      });
    
    const burgerMenuItems = navItem.filter((item, index) => index <= 0 || index >= 4).map(item => {
        const fill = location.pathname === item.path ? "#378FC9" : "#ffffff"
        return(
        <li key={item.path} onClick={() => navigate(item.path)}>
            {item.path === "/" && user?.avatar ? (
                <image src={user?.avatar} width={60} height={60} />
            ) : (
                item.icon(fill)
            )}

            {item.path === "/" && user?.firstName ? (
                <span style={{ color: "#ffffff" }}>{user.firstName}</span>
            ) : (
                <span style={{ color: fill }}>{item.title}</span>
            )}
        </li>)}
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

    const allItemMenu =  navItem.map((el) => {
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
       
            <nav className="navBarMobComponent">
             
            {isDesktop ? (
                // Если устройство является десктопом, то показываем все элементы меню
                navItem.map((el) => {
                    const fill = location.pathname === el.path ? "#378FC9" : "#ffffff"
                    return (
                        <ul><li key={el.path} onClick={() => navigate(el.path)}>
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
                        </li></ul>
                    )
                })
            ) : (
                // Если устройство не является десктопом, то скрываем элементы и показываем их в бургер меню
                <div style={{display: "flex"}}>
                {isBurderOpen && <div className="burger-menu" >{burgerMenuItems}</div>}
                  
                <div style={{display: 'flex'}}>{menuItems}</div>
                <div className='btn-burger' style={{color: "white", fontSize: "30px"}} onClick={() => setIsBurgerOpen(true)}>Открыть бургер</div>
                <div className='btn-burger' style={{color: "white", fontSize: "30px",}} onClick={() => setIsBurgerOpen(false)}>Close бургер</div>
                </div>
            )}

               {/* 
               
                  {!isBurderOpen && <>{allItemMenu}</> }
                   
                </ul> */}
                
            </nav>
            
        
    )
}

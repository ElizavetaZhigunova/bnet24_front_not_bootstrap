import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import "./AuthHeader.scss"

export const AuthHeader = (props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [value, setValue] = useState(location.pathname)

    useEffect(() => {
        navigate(value)
    }, [navigate, value])

    const handlerChange = (e) => setValue(e.target.value)

    return (
        <div className={`authHeader ${props.className}`}>
            <label className={location.pathname === "/sign-in" ? "active" : "disabled"}>
                <input
                    type="radio"
                    value="/sign-in"
                    name="sign-in"
                    checked={value === "/sign-in"}
                    onChange={handlerChange}
                />
                Войти
            </label>
            <label className={location.pathname === "/sign-up" ? "active" : "disabled"}>
                <input
                    type="radio"
                    value="/sign-up"
                    name="/sign-up"
                    checked={value === "/sign-up"}
                    onChange={handlerChange}
                />
                Зарегистрироваться
            </label>
        </div>
    )
}

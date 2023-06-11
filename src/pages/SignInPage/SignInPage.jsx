import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthHeader, ButtonComponent, CardComponent, InputComponent } from "../../components"
import { signIn } from "../../utils/api/user"
import ForgotPage from "../ForgotPage/ForgotPage"

import "./SignInPage.scss"

export const SignInPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLogin = useSelector((state) => state.user.isLogin)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (isLogin) {
            navigate("/")
        }
    }, [isLogin, navigate])

    const handlerEmail = (e) => setEmail(e.target.value)

    const handlerPassword = (e) => setPassword(e.target.value)

    const handlerAuth = () => {
        dispatch(signIn(email, password))
    }

    return (
        <div className="signInPage">
            <CardComponent>
                <AuthHeader />
                <InputComponent type="email" placeholder="E-mail" value={email} onChange={handlerEmail} />
                <InputComponent type="password" placeholder="Пароль" value={password} onChange={handlerPassword} />
                <ButtonComponent title="Войти" onClick={handlerAuth} />
                <div className="remember">
                    <div className="remember-me">
                        <div className="inp-container">
                            <input className="checkbox" type="checkbox" />
                        </div>
                        <div className="span-container">
                            <span className="title">Запомнить меня</span>
                        </div>
                    </div>
                    <NavLink to='/forgot-pas'><div className="forgot-pass">Забыли пароль?</div></NavLink>
                </div>
            </CardComponent>
        </div>
    )
}

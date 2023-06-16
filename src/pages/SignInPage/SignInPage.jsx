import React, { useEffect, useState } from "react"
import {useForm} from 'react-hook-form'
import { useDispatch, useSelector } from "react-redux"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthHeader, ButtonComponent, CardComponent, InputComponent } from "../../components"
import { signIn } from "../../utils/api/user"


import "./SignInPage.scss"

export const SignInPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const isLogin = useSelector((state) => state.user.isLogin)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "onBlur",
        defaultValues: {
          age: 20,
        },
      });

    useEffect(() => {
        if (isLogin) {
            navigate("/")
        }
    }, [isLogin, navigate])

    const handlerEmail = (e) => setEmail(e.target.value)

    const handlerPassword = (e) => setPassword(e.target.value)

    const handlerAuth = (event) => {
        dispatch(signIn(email, password))
        event.target.reset();
    }


    return (
        <div className="signInPage">
            <CardComponent>
                <AuthHeader />
                <InputComponent type="email" placeholder="E-mail" onChange={handlerEmail} value={email} 
                {...register("firstName", {
                    required: "This is required",
                    minLength: {
                      value: 5,
                      message: "Please enter more than 4 character",
                    },
                  })}/>
                
                <InputComponent type="password" placeholder="Пароль" value={password} onChange={handlerPassword} />
                {/* {user.error && <span className="error-message">Некорректно введены данные</span>} */}
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

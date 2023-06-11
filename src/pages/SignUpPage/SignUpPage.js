import React from "react"
import { AuthHeader, ButtonComponent, CardComponent, InputComponent } from "../../components"

import "./SignUpPage.scss"

export const SignUpPage = () => {
    return (
        <div className="signInPage">
            <CardComponent className="cardComponent">
                <AuthHeader />
                <InputComponent placeholder="Имя" />
                <InputComponent placeholder="E-mail" />
                <InputComponent placeholder="Пароль" />
                <InputComponent placeholder="Подтверждение пароля" />
                <ButtonComponent title="Зарегистрироваться" />
            </CardComponent>
        </div>
    )
}

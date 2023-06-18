import React, { useState } from "react"
import { AuthHeader, ButtonComponent, CardComponent, InputComponent } from "../../components"
import validator from 'validator'

import "./SignUpPage.scss"

export const SignUpPage = () => {

    
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
 
      switch (name) {
        case "username":
          if (!value) {
            stateObj[name] = "Поле не может быть пустым";
          }
          break;
        
        case "email":
          if (!value) {
            stateObj[name] = "Поле не может быть пустым";
          } else if (value.trim() === "") {
            stateObj[name] = "Поле не может быть пустым";
          } else if (!validator.isEmail(value)) {
            stateObj[name] = "Некорректный E-mail";
          }
          break;
 
        case "password":
          if (!value) {
            stateObj[name] = "Поле не может быть пустым";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Пароли не совпадают";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          } 
          if (value.length < 8) {
            stateObj[name] = "Пароль не можеть быть короче 8 символов";
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Поле не может быть пустым";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Пароли не совпадают";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }
 
  return (
    <div className="signUpPage">
      <CardComponent>
        <AuthHeader />

        <form> 
          <InputComponent
            type="text"
            name="username"
            placeholder='Имя'
            value={input.username}
            onChange={onInputChange}
            onBlur={validateInput} />
          {error.username && <div className="error-message-signUp">{error.username}</div>}

          <InputComponent
            type="text"
            name="email"
            placeholder='E-mail'
            value={input.email}
            onChange={onInputChange}
            onBlur={validateInput} />
          {error.email && <div className="error-message-signUp">{error.email}</div>}
  
          <InputComponent
            type="password"
            name="password"
            placeholder='Пароль'
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput} />
          {error.password && <div className="error-message-signUp">{error.password}</div>}
  
          <InputComponent
            type="password"
            name="confirmPassword"
            placeholder='Подтверждение пароля'
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput}/>
          {error.confirmPassword && <div className="error-message-signUp">{error.confirmPassword}</div>}
  
          <ButtonComponent title='ЗАРЕГИСТРИРОВАТЬСЯ'/>
        </form>
        <div className="pol-signUp">
          Создавая аккаунт в сервисе, Вы соглашаетесь с <br/>
          <span style={{color: '#378FC9'}}>Условиями использования</span> 
        </div>
      </CardComponent>
    </div>
  );
}

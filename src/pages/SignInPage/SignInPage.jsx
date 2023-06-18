import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthHeader, ButtonComponent, CardComponent, InputComponent } from "../../components";
import { signIn } from "../../utils/api/user";
import validator from 'validator';


import "./SignInPage.scss";
import RememberMeComponent from "../../components/RememberMeComponent/RememberMeComponent";

export const SignInPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)
    const isLogin = useSelector((state) => state.user.isLogin)

    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    // const [isValidE, setIsValidE] = useState(true)
    // const [isValidP, setIsValidP] = useState(true)
    // const [isEmailValid, setIsEmailValid] = useState(true);

    // const handleEmailBlur = (event) => {
    //     setIsValidE(event.target.value.length > 0);
    //     setIsEmailValid(validator.isEmail(event.target.value));
    // }
    // const handlePasswordBlur = (event) => {
    //     setIsValidP(event.target.value.length > 0);
    // }

    // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    // }

    // const handlePasswordChange = (event) => {
    //     setPassword(event.target.value);
    // }

    const [input, setInput] = useState({
        email: '',
        password: ''
      });
     
      const [error, setError] = useState({
        email: '',
        password: ''
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
              break;

            default:
              break;
          }
     
          return stateObj;
        });
      }

    const handleAuth = () => {
        dispatch(signIn(input.email, input.password))
    }


    useEffect(() => {
        if (isLogin) {
            navigate("/")
        }
    }, [isLogin, navigate])

    return (
        <div className="signInPage">
            <CardComponent>
                <AuthHeader />
                <InputComponent 
                    type="text"
                    name="email"
                    value={input.email} 
                    onBlur={validateInput} 
                    placeholder="E-mail" 
                    onChange={onInputChange} 
                    
                />
               {error.email && <div className="error-message-signUp">{error.email}</div>}
                <InputComponent 
                    style={{marginTop: "10px"}} 
                    type="password"
                    name="password"
                    placeholder="Пароль" 
                    value={input.password} 
                    onChange={onInputChange}
                    onBlur={validateInput} 
                    
                />
                {error.password && <div className="error-message-signUp">{error.password}</div>}
                {user.error && <span className="error-message">Неверный E-mail или пароль</span>}
                <ButtonComponent title="Войти" onClick={handleAuth} />
                <RememberMeComponent />
            </CardComponent>
        </div>
    )
}

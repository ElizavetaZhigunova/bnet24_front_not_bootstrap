import React from 'react'
import { NavLink } from 'react-router-dom'

const RememberMeComponent = () => {
  return (
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
  )
}

export default RememberMeComponent
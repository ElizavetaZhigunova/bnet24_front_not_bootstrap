import React, {useEffect} from 'react'
import { CardComponent, InputComponent, ButtonComponent } from '../../components'
import './ForgotPage.scss'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPage = () => {
    const navigate = useNavigate()
    const notify = () => toast.info("Новый пароль был отправлен на почту");
    
    const handleClick = () => {
        notify()
        
        setTimeout(() => {
          navigate('/sign-in')
        }, 6000)
    }
    
  return (
    <div className="forgot">
    <CardComponent>
        <div className="title-f">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</div>
        <InputComponent type="email" placeholder="E-mail"  />
        <ButtonComponent title="СБРОСИТЬ ПАРОЛЬ" onClick={handleClick} />
        <ToastContainer position="top-center" />
    </CardComponent >
    </div>
  )
}

export default ForgotPage
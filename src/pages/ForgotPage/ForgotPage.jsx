import React, {useState} from 'react'
import { CardComponent, InputComponent, ButtonComponent } from '../../components'
import './ForgotPage.scss'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';

const ForgotPage = () => {
    const navigate = useNavigate()
    const notify = () => toast.info("Новый пароль был отправлен на почту");
    const notifyError = () => toast.error("Новый пароль не был отправлен на почту");
    
    const handleClick = () => {
        notify()
        
        setTimeout(() => {
          navigate('/sign-in')
        }, 6000)
    }

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
          default:
            break;
        }
   
        return stateObj;
      });
    }
    
  return (
    <div className="forgot">
    <CardComponent>
        <div className="title-f">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</div>
        <InputComponent
          type="text"
          name="email"
          value={input.email} 
          onBlur={validateInput} 
          placeholder="E-mail" 
          onChange={onInputChange} 
        />
        {error.email && <div className="error-message-signUp">{error.email}</div>}
        <ButtonComponent title="СБРОСИТЬ ПАРОЛЬ" onClick={handleClick} />
        <ToastContainer position="top-center" />
    </CardComponent >
    </div>
  )
}

export default ForgotPage
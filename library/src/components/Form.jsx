import { useState } from 'react'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const Form = () => {
  const [loginForm, setLoginForm] = useState(true)

  const changeForm = () => {
    setLoginForm(false)
  }

  if(loginForm) {
    return (
        <LoginForm changeForm={changeForm}/>
      )
  } else {
    return (
        <RegisterForm changeForm={changeForm}/>
      )
  }
}

export default Form
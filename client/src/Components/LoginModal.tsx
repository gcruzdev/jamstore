import React, { useState } from 'react';
import '../Assets/styles/loginmodal.css';
import Button from './Button';

interface LoginModalProps {
  setIsModalOpen: Function
}

export default function LoginModal({setIsModalOpen}: LoginModalProps) {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
  }

  function handleSignInClick() {
    fetch(`http://localhost:8000/user/${email}&${password}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  {
    if (!isSignUp) {
      return (
        <div className="login-modal">
          <h1>Entre na sua conta</h1>
          <input onChange={(e) => handleEmailChange(e)} type="text" placeholder="Email"/>
          <input onChange={(e) => handlePasswordChange(e)} type="password" placeholder="Senha"/>
          <div className="button-input">
            <Button handleClick={handleSignInClick} text="Entrar"/>
          </div>
          <p>Não possui uma conta? <span onClick={() => setIsSignUp(true)}>Clique aqui</span></p>
        </div>
      )
    }
    else {
      return (
        <div className="login-modal">
          <h1>Registre-se</h1>
          <input type="text" placeholder="Nome"/>
          <input type="text" placeholder="Sobrenome"/>
          <input type="text" placeholder="Email"/>
          <input type="text" placeholder="Nome de usuário"/>
          <input type="text" placeholder="CPF"/>
          <input type="password" placeholder="Senha"/>
          <div className="button-input">
            <Button handleClick={() => { return; }} text="Registrar"/>
          </div>
          <p>Já possui uma conta? <span onClick={() => setIsSignUp(false)}>Clique aqui</span></p>
        </div>
      )
    }
  }
}
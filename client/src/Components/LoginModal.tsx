import { useState } from 'react';
import '../Assets/styles/loginmodal.css';
import Button from './Button';

interface LoginModalProps {
  setIsModalOpen: Function
}

export default function LoginModal({setIsModalOpen}: LoginModalProps) {
  const [isSignUp, setIsSignUp] = useState(false)

  {
    if (!isSignUp) {
      return (
        <div className="login-modal">
          <h1>Entre na sua conta</h1>
          <input type="text" placeholder="Email"/>
          <input type="password" placeholder="Senha"/>
          <div className="button-input">
            <Button handleClick={() => { return; }} text="Entrar"/>
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
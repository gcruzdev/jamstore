import Button from './Button'
import '../Assets/styles/navbar.css'
import LoginModal from './LoginModal'
import { useState } from 'react'

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleLoginClick() {
    setIsModalOpen(true)
  }

  return(
    <nav className="navigation">
      <ul>
        <li>Início</li>
        <li>Produtos</li>
        <li>Clássicas</li>
        <li>Diet</li>
        <li>Gourmet</li>
        <li id="button-li">
          <Button handleClick={handleLoginClick} text={"Entre ou Cadastre-se"}/>
        </li>
      </ul>
      { isModalOpen && <LoginModal setIsModalOpen={setIsModalOpen} /> }
    </nav>
  )
}
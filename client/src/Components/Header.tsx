import React from "react";
import '../Assets/styles/header.css'
import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return(
    <header>
      <Logo />
      <Navbar />
    </header>
  )
}
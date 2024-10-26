"use client";

import Image from "next/image";
import Logo from "@/Assets/logo.svg";
import Lupa from "@/Assets/lupa.svg";
import Menu from "@/Assets/menu.svg";
import Delete from "@/Assets/deleteIcon.svg"
import "./style.scss";
import { useState } from "react";
export default function Navbar() {
  const [isMenuOpen,setIsMenuOpen] = useState(false)
  console.log(isMenuOpen)
  const changeMenuOpen = ()=> {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="header">
      <ul className={`isMenuOpen${isMenuOpen}`}>
        <div className= "logoMenu"  >
          <Image
            width={10}
            height={10}
            src={Logo}
            alt="logo pyfit"
            className="logo"
          />
          <Image
            width={10}
            height={10}
            src={isMenuOpen ?  Delete  : Menu}
            alt="logo pyfit"
            onClick={changeMenuOpen}
            className="menu"
          />
        </div>
        <li>Unidades</li>
        <li>Planos</li>
        <li>Conheça</li>
        <li className="inputText">
          <Image
            src={Lupa}
            width={20}
            height={20}
            alt="Lupa image"
            className="lupaImage"
          />
          <input type="text" name="" id="" />
        </li>
        <li className="alunArea">Área do aluno</li>
      </ul>
    </header>
  );
}

"use client";

import Image from "next/image";
import Logo from "@/Assets/logo.svg";
import Lupa from "@/Assets/lupa.svg";
import Menu from "@/Assets/menu.svg";
import Delete from "@/Assets/deleteIcon.svg";
import styles from "./style.module.scss";
import { useState } from "react";
import Link from "next/link";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  const changeMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.header}>
      <ul
        className={`${isMenuOpen ? styles.isMenuOpentrue : styles.isMenuOpenfalse}`}
      >
        <div className={styles.logoMenu}>
          <Link href="/">
            <Image
              width={10}
              height={10}
              src={Logo}
              alt="logo pyfit"
              className={styles.logo}
            />
          </Link>
          <Image
            width={10}
            height={10}
            src={isMenuOpen ? Delete : Menu}
            alt="logo pyfit"
            onClick={changeMenuOpen}
            className={styles.menu}
          />
        </div>
        <li>Unidades</li>
        <li>Planos</li>
        <li>Conheça</li>
        <li className={styles.inputText}>
          <Image
            src={Lupa}
            width={20}
            height={20}
            alt="Lupa image"
            className={styles.lupaImage}
          />
          <input type="text" name="" id="" />
        </li>
        <li className={styles.alunArea}>
          <Link href="/login">Área do aluno</Link>
        </li>
      </ul>
    </header>
  );
}

import style from "./navbar.module.css"
import React from 'react'
import logo from "../../../public/logo.svg"
import Image from "next/image"
import Link from "next/link"
import AuthLinks from "../authLinks/AuthLinks"
import ThemeToggle from "../themeToggle/ThemeToggle"

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src ={logo} alt="socials" width={75} height={75} />
      </div>
      <div className={style.logo}>GOOD NEWS</div>
      <div className={style.links}>
        <ThemeToggle />
        <Link href="/" className={style.link}>Homepage</Link>
        <Link href="https://andrei-negrea-contact.onrender.com/" className={style.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
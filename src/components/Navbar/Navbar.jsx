import style from "./navbar.module.css"
import React from 'react'
import test from "../../../public/next.svg"
import Image from "next/image"
import Link from "next/link"
import AuthLinks from "../authLinks/AuthLinks"
import ThemeToggle from "../themeToggle/ThemeToggle"

const Navbar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src ={test} alt="socials" width={24} height={23} />
        <Image src ={test} alt="socials" width={24} height={23} />
        <Image src ={test} alt="socials" width={24} height={23} />
      </div>
      <div className={style.logo}>GOOD NEWS</div>
      <div className={style.links}>
        <ThemeToggle />
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
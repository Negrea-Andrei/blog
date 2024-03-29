import style from "./navbar.module.css"
import React from 'react'
import test from "../../../public/next.svg"
import Image from "next/image"
import Link from "next/link"

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
        <Link href="/">Homepage</Link>
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
        <Link href="/">Login</Link>
      </div>
    </div>
  )
}

export default Navbar
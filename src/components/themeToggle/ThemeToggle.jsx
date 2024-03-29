import style from "./themeToggle.module.css"
import moon from "../../../public/moon.png"
import sun from "../../../public/sun.png"
import Image from "next/image"
import React from 'react'

const ThemeToggle = () => {
  return (
    <div className={style.container}>
      <Image src={moon} alt="moon" width={14} height={14} />
      <div className={style.ball}></div>
      <Image src={sun} alt="moon" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle
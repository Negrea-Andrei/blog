"use client"

import style from "./themeToggle.module.css"
import moon from "../../../public/moon.png"
import sun from "../../../public/sun.png"
import Image from "next/image"
import React from 'react'
import { useContext } from "react"
import { ThemeContext } from "@/context/ThemeContext"

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={style.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <Image src={moon} alt="moon" width={14} height={14} />
      <div
        className={style.ball}
        style={
          theme === "dark"
            ? { left: 1, background: "#0f172a" }
            : { right: 1, background: "white" }
        }
      ></div>
      <Image src={sun} alt="moon" width={14} height={14} />
    </div>
  )
}

export default ThemeToggle
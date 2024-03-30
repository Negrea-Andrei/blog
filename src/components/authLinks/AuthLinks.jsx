"use client"
import style from "./authLinks.module.css"
import Link from 'next/link'
import React, { useState } from 'react'


const AuthLinks = () => {
  const [open, setOpen] = useState(false)

  const status = "notauthenticated"

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={style.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={style.link}>
            Write
          </Link>
          <span className={style.link}>
            Logout
          </span>
        </>
      )}
      <div className={style.burger} onClick={() => setOpen(!open)}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      {open && (
        <div className={style.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={style.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
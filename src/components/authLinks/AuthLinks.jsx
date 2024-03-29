import style from "./authLinks.module.css"
import Link from 'next/link'
import React from 'react'

const status = "notauthentificate"

const AuthLinks = () => {
  return (
    <div>
      {status === "notauthentificated" ? (

        <Link href="/">Login</Link>) : (<>
          <Link href="/">Post</Link>
          <span className={style.link}>Logout</span></>
      )}
    </div>
  )
}

export default AuthLinks
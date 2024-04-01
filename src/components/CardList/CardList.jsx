import PagesComponent from "../PagesComponent/PagesComponent"
import style from "./cardList.module.css"
import React from 'react'
import Image from "next/image"

const CardList = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Recent Posts</h1>
      <div className={style.posts}>
        <div className={style.post}>
          <div className={style.imageContainer}>
            <Image src="/p1.jpeg" alt="autofill" fill/>
          </div>
          <div className={style.textContainer}></div>
          
        </div>
      </div>
      <PagesComponent />
    </div>
  )
}

export default CardList
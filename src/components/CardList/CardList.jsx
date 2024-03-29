import PagesComponent from "../PagesComponent/PagesComponent"
import style from "./cardList.module.css"
import React from 'react'

const CardList = () => {
  return (
    <div className={style.container}>
      <PagesComponent />
    </div>
  )
}

export default CardList
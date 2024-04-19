import React from "react";
import style from "./menu.module.css";
import MenuPosts from "../MenuPosts/MenuPosts";
import MenuCategories from "../MenuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={style.container}>
      <h2 className={style.subtitle}>{"What's hot"}</h2>
      <h1 className={style.title}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={style.subtitle}>Discover by topic</h2>
      <h1 className={style.title}>Categories</h1>
      <MenuCategories />
      <h2 className={style.subtitle}>Chosen by the editor</h2>
      <h1 className={style.title}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
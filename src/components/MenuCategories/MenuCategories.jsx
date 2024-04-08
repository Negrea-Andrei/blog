import Link from "next/link";
import React from "react";
import style from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={style.categoryList}>
      <Link
        href="/blog?cat=style"
        className={`${style.categoryItem} ${style.style}`}
      >
        Nature
      </Link>
      <Link href="/blog" className={`${style.categoryItem} ${style.fashion}`}>
        Science
      </Link>
      <Link href="/blog" className={`${style.categoryItem} ${style.food}`}>
        Food
      </Link>
      <Link href="/blog" className={`${style.categoryItem} ${style.travel}`}>
        Travel
      </Link>
      <Link href="/blog" className={`${style.categoryItem} ${style.culture}`}>
        Culture
      </Link>
      <Link href="/blog" className={`${style.categoryItem} ${style.coding}`}>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;
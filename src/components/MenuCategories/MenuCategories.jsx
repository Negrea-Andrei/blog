import Link from "next/link";
import React from "react";
import style from "./menuCategories.module.css";

const MenuCategories = () => {
  return (
    <div className={style.categoryList}>
      <Link
        href="/blog?cat=nature"
        className={`${style.categoryItem} ${style.nature}`}
      >
        Nature
      </Link>
      <Link href="/blog?cat=science" className={`${style.categoryItem} ${style.science}`}>
        Science
      </Link>
      <Link href="/blog?cat=food" className={`${style.categoryItem} ${style.food}`}>
        Food
      </Link>
      <Link href="/blog?cat=travel" className={`${style.categoryItem} ${style.travel}`}>
        Travel
      </Link>
      <Link href="/blog?cat=culture" className={`${style.categoryItem} ${style.culture}`}>
        Culture
      </Link>
      <Link href="/blog?cat=coding" className={`${style.categoryItem} ${style.coding}`}>
        Coding
      </Link>
    </div>
  );
};

export default MenuCategories;

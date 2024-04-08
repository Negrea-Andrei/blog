import React from "react";
import style from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.info}>
        <div className={style.logo}>
          <Image src="/logo.svg" alt="Andrei" width={50} height={50} />
          <h1 className={style.logoText}>GOOD NEWS</h1>
        </div>
        <p className={style.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className={style.icons}>
          <Image src="/github.png" alt="" width={18} height={18} />
          <Image src="/linkedin.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={style.links}>
        <div className={style.list}>
          <span className={style.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Tags</span>
          <Link href="/">Nature</Link>
          <Link href="/">Science</Link>
          <Link href="/">Food</Link>
          <Link href="/">Culture</Link>
          <Link href="/">Travel</Link>
          <Link href="/">Coding</Link>          
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Social</span>
          <Link href="/">Github</Link>
          <Link href="/">Linkedin</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
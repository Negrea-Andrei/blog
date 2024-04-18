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
          <Link href="https://andrei-negrea-contact.onrender.com/">About</Link>
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Tags</span>
          <Link href="/blog?cat=nature">Nature</Link>
          <Link href="/blog?cat=science">Science</Link>
          <Link href="/blog?cat=food">Food</Link>
          <Link href="/blog?cat=culture">Culture</Link>
          <Link href="/blog?cat=travel">Travel</Link>
          <Link href="/blog?cat=coding">Coding</Link>          
        </div>
        <div className={style.list}>
          <span className={style.listTitle}>Social</span>
          <Link href="https://github.com/Negrea-Andrei">Github</Link>
          <Link href="https://www.linkedin.com/in/andrei-negrea-49a669239/">Linkedin</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
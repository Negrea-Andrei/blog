import React from "react";
import style from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <b>Hey, sunt Andrei!</b> Hai să începem ziua cu vești bune!
      </h1>
      <div className={style.post}>
        <div className={style.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={style.image} />
        </div>
        <div className={style.textContainer}>
          <h1 className={style.postTitle}>Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
          <p className={style.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className={style.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
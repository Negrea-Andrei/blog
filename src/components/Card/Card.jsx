import Image from "next/image";
import style from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={style.container} key={key}>
      {item.img && (
        <div className={style.imageContainer}>
          <Image src={item.img} alt="" fill className={style.image} />
        </div>
      )}
      <div className={style.textContainer}>
        <div className={style.detail}>
          <span className={style.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={style.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>        
        <div className={style.desc} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        <Link href={`/posts/${item.slug}`} className={style.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

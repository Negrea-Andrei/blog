import CardList from "../../components/cardList/CardList";
import style from "./blogPage.module.css";
import Menu from "../../components/Menu/Menu";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={style.container}>
      <h1 className={style.title}>{cat} Blog</h1>
      <div className={style.content}>
        <CardList page={page} cat={cat}/>
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
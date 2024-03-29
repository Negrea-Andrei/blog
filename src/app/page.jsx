import Featured from "@/components/Featured/Featured";
import style from "./page.module.css"
import Link from "next/link";
import CategoryList from "@/components/CategoryList/CategoryList";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div className={style.container}>
      <Featured />
      <CategoryList />
      <div className={style.container}>
        <CardList />
        <Menu />
      </div>
    </div>    
  );
}

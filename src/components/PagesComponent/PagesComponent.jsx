"use client";

import React from "react";
import style from "./pagesComponent.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter();

  return (
    <div className={style.container}>
      <button
        className={style.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={style.button}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
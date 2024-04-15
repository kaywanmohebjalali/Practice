import Link from "next/link";
import React from "react";

const ArticleHome = ({data}) => {
  return (
    <>
       {data&& data.map(article=><div key={article.id}>
        <Link  href={`articles/${article.id}`} >{article.title}</Link>
       </div>)}
    </>
  );
};

export default ArticleHome;

export async function getStaticProps() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=5");
    const data = await response.json();
    
    return {
      props: {data:data},
    }
  } catch (error) {
    return {
      props: {error:error?.message}
    }
  }
}

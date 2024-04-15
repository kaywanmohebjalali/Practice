import React from "react";

const ArticleUser = ({ data }) => {
  return <div>{data.title}</div>;
};

export default ArticleUser;

export async function getStaticPaths() {

  
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    const paths=data.map(article=>{
      return {
        params:{idCount:String(article.id)},
      }
    })

  return {
    paths:paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const productId = context.params.idCount;
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await response.json();

    return {
      props: { data: data },
    };
  } catch (error) {
    return {
      props: { error: error?.message },
    };
  }
}

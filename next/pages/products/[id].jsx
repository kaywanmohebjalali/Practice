import { getCabin, getCabins } from "@/services/apiCabins";
import { useRouter } from "next/router";
import React from "react";

const Cabin = ({ data }) => {
  // const router = useRouter();

  // if (router.isFallback) {
  //   return <h1>FallBack Page:</h1>;
  // }

  return <div>{data?.description}</div>;
};

export default Cabin;


export async function getServerSideProps(context) {
  const id = context.params.id;
  const { req, res, params, query } = context;
  console.log(req);


  try {
    const data = await getCabin(id);

    return {
      props: { data: data },
    };
  } catch (error) {
    return {
      props: { error: error?.message },
    };
  }
}

// export async function getStaticProps(context) {
//   const id = context.params.id;

//   try {
//     const data = await getCabin(id);

//     if (data)
//       return {
//         props: { data: data },
//       };

//     return {
//       // notFound: true,
//       redirect: { destination: "/products" },
//     };
//   } catch (error) {
//     return {
//       props: { error: error?.message },
//     };
//   }
// }

// export async function getStaticPaths() {
//   const data = await getCabins();

//   const paths = data.slice(0, 3).map((cabin) => {
//     return {
//       params: { id: String(cabin.id) },
//     };
//   });

//   return {
//     paths: paths,
//     fallback: "blocking",
//   };
// }

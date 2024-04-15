import React from "react";
import { getCabins } from "../../services/apiCabins";
import Link from "next/link";

const ProductsHome = ({ data, error }) => {
  return (
    <>
      {error && <h1>{error}</h1>}
      {data &&
        data.map((cabin) => (
          <div key={cabin.id}>
            <Link href={`/products/${cabin.id}`}>{cabin.name}</Link>
          </div>
        ))}
      {/* <Product title={'test'}/> */}
    </>
  );
};

export default ProductsHome;

export async function getServerSideProps(context) {
  const { req, res, params, query } = context;

  console.log("query  :", query);

  try {
    const data = await getCabins();

    return {
      props: { data: data, error: null },
    };
  } catch (error) {
    return {
      props: { data: null, error: error },
    };
  }
}

// export async function getStaticProps() {
//      const data = await getCabins()
//      console.log('ISR');
//     return {
//       props: {data:data},
//       revalidate:10, //10 second
//     }

// }

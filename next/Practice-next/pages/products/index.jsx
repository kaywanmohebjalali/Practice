import React, { useEffect, useState } from "react";
import { getCabins } from "../../services/apiCabins";
import Link from "next/link";
import useSWR from 'swr'

const productFetcher=async ()=>await getCabins()

const ProductsHome = () => {

 const {data, error}=useSWR('product',productFetcher)

  if(error)return <h1>Error ...</h1>

  // useEffect(()=>{
  //   async function getData(){
  //     try {
  //       const data = await getCabins();
  //       setData(data)
  //     } catch (error) {
        
  //     }
  //   }
  //   getData()
  // },[])
  
  return (
    <>
      {/* {error && <h1>{error}</h1>} */}
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





// export async function getServerSideProps(context) {
//   const { req, res, params, query } = context;

//   console.log('getServerSideProps');

//   try {
//     const data = await getCabins();

//     return {
//       props: { data: data, error: null },
//     };
//   } catch (error) {
//     return {
//       props: { data: null, error: error },
//     };
//   }
// }






// export async function getStaticProps() {
//      const data = await getCabins()
//      console.log('ISR');
//     return {
//       props: {data:data},
//       revalidate:10, //10 second
//     }

// }

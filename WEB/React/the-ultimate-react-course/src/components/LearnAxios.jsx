import { useEffect } from "react"
import { getProducts } from "../service/product"
import { createPost } from "../service/post"

// const  url ='https://course-api.com/react-store-products'
// const  url ='https://jsonplaceholder.typicode.com/posts'

const LearnAxios = () => {


  useEffect(()=>{

    async function getData(){
      const response = await createPost('/posts',{
      title:'instagram',
      body:'this is post instagram'
      })

      console.log('data : ',response);
     
    }
    getData()
  },[])
  return (
    <div>Learn Axios</div>
  )
}

export default LearnAxios
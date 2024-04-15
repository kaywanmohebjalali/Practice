import axios from "axios";



const authAxios = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com',
   headers:{
      "Content-Type":'application/json'
   }
})

authAxios.interceptors.request.use((request) => {


   console.log('request : ', request);
   return request
},
   (error) => {
      return Promise.reject(error)
   })


authAxios.interceptors.response.use((response) => {

   console.log('response : ', response);
   return response
},
   (error) => {
  
      if (error?.response?.status == 404) console.log('NOT FOUND');
      return Promise.reject(error)
   })



export async function createPost(url, post) {
   try {
      const { data } = await authAxios.post(url, post)
      return data
   } catch (error) {
      console.log(error?.message);
      console.log(error?.response);
   }
}
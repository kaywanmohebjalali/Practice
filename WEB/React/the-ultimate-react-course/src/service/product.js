import axios from "axios";


export async function getProducts(url){

    try {
        const response = await axios(url)
        return response
        
    } catch (error) {
        console.log('error : ',error);
        console.log('error?.message : ', error?.message);
        console.log('error?.response : ', error?.response);
    }


}
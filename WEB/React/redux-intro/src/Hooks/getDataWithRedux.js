


function getData(url,action,setLoading,setError){
    
    return async function getData(dispatch){
         try {
            setLoading(true)
            const response = await fetch(url)
            const data = await response.json()
            console.log('data : ',data);
             dispatch(action(data.rates.USD))
         } catch (error) {
            setError(error.message)
         }finally{
            setLoading(false)
         }
    }

}
export default getData
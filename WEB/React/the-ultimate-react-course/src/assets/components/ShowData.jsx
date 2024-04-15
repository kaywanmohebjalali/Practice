import React, { useEffect, useState } from "react";



const ShowData = ({ url, countShowData }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getList() {
      try {
        setIsLoading(true)
        const response = await fetch(url);
        const data = await response.json();
        
        setData(data)
      } catch (error) {
       
        setError(error.message)
      }finally{
        setIsLoading(false)
      }
    }
    getList();
  }, []);

  return <div>
      
      {
        isLoading && <p>loading...</p>||
        error &&<p>{error}</p>||
        !isLoading && !error &&
        data.length>0 && data.map(item=>{
            if(item.id <= countShowData){
                return  <p key={item.id}>{item.title}</p>
            }
            
        } )
      }
    
  </div>;
};

export default ShowData;

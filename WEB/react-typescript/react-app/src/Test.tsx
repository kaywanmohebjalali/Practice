import { ReactNode } from "react";


interface PropsType{
    
    children:ReactNode;
}


const Test = ({children}:PropsType) => {

  return (
    <>
      

      <div>{children}</div>
    </>
  )
}

export default Test

import styled from 'styled-components'
import { cloneElement, createContext, useContext, useState } from "react"
import { createPortal } from "react-dom"
import useOutSideClickModal from '../../hooks/useOutSideClickModal';



const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  
  backdrop-filter: blur(2px);
  z-index: 1000;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const StyledWindow=styled.div`
   

    width: 80%;
    height: 65vh;
    margin: 2rem auto;
    padding: 4px 1rem;
    border-radius: 10px;

  background-color: #d3d0d0;
  


`

const StyledOpen=styled.div`
color: black;
     
`
const Button=styled.button`
 border: none;
 background-color: transparent;
`












// 1
const modalContext =createContext()


// 2
const Modal = ({children}) => {
    const [openName, setOpenName]=useState('')
const close=()=>setOpenName(false)
const openModal= setOpenName

  return (
    <modalContext.Provider value={{openName, close,openModal}}>
             {children}
    </modalContext.Provider>
  )
}



// 3
function Open({children, nameModal}){
   const {openName,openModal}=useContext(modalContext);
   

    return<StyledOpen>
       {cloneElement(children,{onClick:()=>openModal(nameModal)})}
    
    </StyledOpen>
}

function Window({children, nameModal}){
    const {openName,close}=useContext(modalContext);
    const ref = useOutSideClickModal(close)
    if(nameModal!=openName) return null
 
     return createPortal(
        <Overlay>

        <StyledWindow ref={ref}>
         <Button onClick={close}>X</Button>
         {children}
        </StyledWindow>
        </Overlay>,
        document.body
         
         )
 }



//  4
Modal.Open=Open
Modal.Window=Window
export default Modal
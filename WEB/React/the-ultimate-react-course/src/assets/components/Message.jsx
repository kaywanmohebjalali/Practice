import styled, { css } from "styled-components"

const StyledParent=styled.div`
    width: 100%;
    ${(props) =>
    props.sender?
    css`
   text-align: right;

    `:
     css`
 text-align: left;
    `

    }

`
const StyledName=styled.p`

    color: gray;
    position: relative;
    font-size: 0.7rem;
    font-weight: bold;
    margin-top: 10px;
    padding:0 0.5rem;

   

`
const StyledMessage=styled.span`
    padding: 0.5rem;
    border-radius: 10px;
    
   
    ${(props) =>
    props.sender?
    css`
     background-color: #fa0505;
     color: #fff;

    `:
     css`
     background-color: #fafafa;
     color: #000;
    `

    }

`
const StyledTime=styled.p`
    padding:0 0.5rem;
    color: gray;
    margin-top: 10px;
    font-size: 0.7rem;

`



const Message = ({message}) => {

  return (
    <StyledParent sender={message?.isSender}>
        <StyledName>{message?.fullName}</StyledName>
     <StyledMessage sender={message?.isSender}>
       {message?.title}
     </StyledMessage>
     <StyledTime>{message?.create_at}</StyledTime>
    </StyledParent>
  )
}

export default Message
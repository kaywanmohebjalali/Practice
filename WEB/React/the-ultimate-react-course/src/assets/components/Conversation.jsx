import React from 'react'
import styled from 'styled-components'
import Message from './Message'
const StyledConversation=styled.div`
 padding:0 1rem;
 overflow: auto;
 border-radius: 10px;

 /* lanspace */
 /* height:30vh; */
 height:52vh;


`
const StyledForm=styled.div`

display: flex;
width: 100%;
margin-top: 1rem;

`
const StyledInput=styled.input.attrs(() => ({
    placeholder: 'نوشتن پیام',
  }))`
width: 100%;
direction: rtl;
padding: 0.8rem;
outline: none;
border-radius: 5px;
border: none;
box-shadow: 1px 2px 4px gray,-1px -2px 2px gray;


`

const Button = styled.button`
position: absolute;
width: 10%;
padding: 0.8rem;
border: none;
border-radius: 5px;
background-color: red;
color: #fff;
    
`
const Conversation = ({messages}) => {
  return (
    <>
    <StyledConversation>
   {messages && messages.map(message=><Message
    message={message} key={message.id}/>
    )}
    </StyledConversation>
    <StyledForm>
    <Button>ارسال</Button>
    <StyledInput />

    
    </StyledForm>
    </>
  )
}

export default Conversation
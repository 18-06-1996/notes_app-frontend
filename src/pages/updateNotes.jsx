import React from 'react'
import {Container, Form, Button} from "react-bootstrap"
import '../styles/signupPageStyle.css';

import { useState } from "react"
import { BaseApp } from '../core/BaseApp';
import {Link,  useNavigate} from "react-router-dom"
import axios from 'axios';
import { base_URL } from '../constant/config';
import { useDispatch } from 'react-redux';
import { createNotes, updateNotes } from '../Redux/notes/Note.action';



const UpdateNote = ({title,body,user,_id}) => {
const [notes,setNotes] = useState([])
    const [tempTitle,setTitle] = useState(title) 
    const [tempBody,setBody] = useState(body);
   const dispatch = useDispatch()
  
    const navigate = useNavigate();
  
    
    const handleSubmit = async(e) => {
        e.preventDefault();
      let data= await axios.post(`${base_URL}/note/update`,{
        title,body,id:_id
      })
      let {message,status} = data.data;
      if(status=== 1){
        
        // alert(message)
        navigate("/note")
      }else{
        alert(message)
      }
    }

   
    
  return (
    <BaseApp>
   <Container>
    <h1>Update Note</h1>
    <Form onSubmit={handleSubmit}>
    
        <Form.Group>
            <Form.Label> title</Form.Label>
            <Form.Control 
             type='text'
             name='title' 
            value={tempTitle}
             onChange={(e)=>{setTitle(e.target.value)}} 
             required />
        </Form.Group>
   
        <Form.Group>
            <Form.Label> Body</Form.Label>
            <Form.Control 
             type='text'
             name='body' 
            value={tempBody}
             onChange={(e)=>{setBody(e.target.value)}} 
             required />
        </Form.Group>
   
       
<div style={{display:"flex",width:"100px",gap:"10"}}>
    
<Button style={{marginRight:"5px"}} variant='primary' type='submit' onClick={()=>{
    dispatch(updateNotes(_id,{title:tempTitle,body:tempBody}))
    navigate("/note")
}}> Update</Button>
        <Button variant='primary' type='submit' onClick={()=>navigate("/note")}> Cancel</Button>
</div>
    
    </Form>
   </Container>
   </BaseApp>
  )
}

export default UpdateNote

import React from 'react'
import {Container, Form, Button} from "react-bootstrap"
import '../styles/signupPageStyle.css';

import { useState } from "react"
import { BaseApp } from '../core/BaseApp';
import {Link,  useNavigate} from "react-router-dom"
import axios from 'axios';
import { base_URL } from '../constant/config';
import { useDispatch } from 'react-redux';
import { createNotes } from '../Redux/notes/Note.action';



const CreateNote = () => {
    const [title,setTitle] = useState("") 
    const [body,setBody] = useState("");
   const dispatch = useDispatch()
  
    const navigate = useNavigate();
  
    
    const handleSubmit = async(e) => {
        e.preventDefault();
      let data= await axios.post(`${base_URL}/note/create`,{
        title,body
      })
      let {message,status} = data.data;
      if(status=== 1){
        // alert(message)
        navigate("/note")
      }else{
        alert(message)
      }
    }

    const handleCreate =()=>{
        dispatch(createNotes({title,body}))
        navigate("/note")
    }
    
  return (
    <BaseApp>
   <Container>
    <h1>Create New Notes</h1>
    <Form onSubmit={handleSubmit}>
    
        <Form.Group>
            <Form.Label> title</Form.Label>
            <Form.Control 
             type='text'
             name='title' 
            value={title}
             onChange={(e)=>{setTitle(e.target.value)}} 
             required />
        </Form.Group>
   
        <Form.Group>
            <Form.Label> Body</Form.Label>
            <Form.Control 
             type='text'
             name='body' 
            value={body}
             onChange={(e)=>{setBody(e.target.value)}} 
             required />
        </Form.Group>
   
       
<div style={{display:"flex",width:"100px",gap:"10"}}>
    
<Button style={{marginRight:"5px"}} variant='primary' type='submit' onClick={handleCreate}> Create</Button>
        <Button variant='primary' type='submit' onClick={()=>navigate("/note")}> Cancel</Button>
</div>
    
    </Form>
   </Container>
   </BaseApp>
  )
}

export default CreateNote

import React from 'react'
import {Container, Form, Button} from "react-bootstrap"
import '../styles/signupPageStyle.css';

import { useState } from "react"
import { BaseApp } from '../core/BaseApp';
import {Link,  useNavigate} from "react-router-dom"
import axios from 'axios';
import { base_URL } from '../constant/config';



const SignUp = () => {
    const [name,setName] = useState("") 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
  
    
    const handleSubmit = async(e) => {
        e.preventDefault();
      let data= await axios.post(`${base_URL}/user/register`,{
        name,email,password
      })
      let {message,status} = data.data;
      if(status=== 1){
        alert(message)
        navigate("/user/login")
      }else{
        alert(message)
      }
    }
    
  return (
    <BaseApp>
   <Container>
    <h1>Registeration Form</h1>
    <Form onSubmit={handleSubmit}>
    
        <Form.Group>
            <Form.Label> Name</Form.Label>
            <Form.Control 
             type='text'
             name='name' 
            value={name}
             onChange={(e)=>{setName(e.target.value)}} 
             required />
        </Form.Group>
   
        <Form.Group>
            <Form.Label> Email</Form.Label>
            <Form.Control 
             type='email'
             name='email' 
            value={email}
             onChange={(e)=>{setEmail(e.target.value)}} 
             required />
        </Form.Group>
   
        <Form.Group>
            <Form.Label> Password</Form.Label>
            <Form.Control 
             type='password'
             name='password' 
             value={password}
             onChange={(e)=>{setPassword(e.target.value)}} 
             required />
        </Form.Group>

        <Button variant='primary' type='submit'> Register</Button>
        <p>Already have an account ? <Link to="/login">Login</Link> </p>
    
    </Form>
   </Container>
   </BaseApp>
  )
}

export default SignUp

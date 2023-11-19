
import React, { useState } from 'react'
import {Container, Form, Button} from "react-bootstrap"

import {Link,  useNavigate} from "react-router-dom"

import {useDispatch,useSelector} from 'react-redux'

import { getUser } from '../Redux/users/User.action'
import { BaseApp } from '../core/BaseApp'
import ("../styles/LoginpageStyle.css")

const LogIn = () => {
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {auth,loading,token,error} = useSelector((state)=>state.userReducer)
    console.log(auth,token)
    if(auth){
      navigate("/note")
    }
    
    
    const handleSubmit = async(e) => {
        e.preventDefault();
      dispatch(getUser({email,password}))
    }
    if(loading)return <h1 style={{marginTop:"50px"}}>Loading......</h1>
    if(error)return <h1 style={{marginTop:"50px"}}>Error......</h1>
  return (
   <BaseApp>
    <Container>
    <h1>Login Form</h1>
    <Form onSubmit={handleSubmit}>
    
      
   
        <Form.Group>
            <Form.Label> Email</Form.Label>
            <Form.Control 
             type='email'
             name='email' 
             value={email}
             onChange={(e)=>setEmail(e.target.value)} 
             required />
        </Form.Group>
   
        <Form.Group>
            <Form.Label> Password</Form.Label>
            <Form.Control 
             type='password'
             name='password' 
             value={password}
             onChange={(e)=>setPassword(e.target.value)} 
             required />
        </Form.Group>

        <Button variant='primary' type='submit'> LogIn</Button>
       
    
    </Form>
   </Container>
   </BaseApp>
  )
}

export default LogIn

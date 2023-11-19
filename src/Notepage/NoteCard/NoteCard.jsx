

import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteNotes, updateNotes } from '../../Redux/notes/Note.action'

import {  useNavigate } from 'react-router-dom'


const NoteCard = ({title,body,user,_id}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    
    <Card style={{ width: '20rem',height:"200px",margin:"10px", display:"flex",padding:"10px", backgroundColor:"yellow"}}>
 
  <Card.Body>
    <Card.Title style={{fontWeight:"bold"}}>{title}</Card.Title>
    <Card.Text>
      {body}
    </Card.Text>
    <Card.Body style={{display:"flex"}}>
    <Button variant="primary" style={{width:"100px", margin:"10px"}}onClick={()=>navigate("/update")} >Update</Button>
    <Button variant="danger" style={{width:"100px", margin:"10px"}} onClick={()=>{
      dispatch(deleteNotes(_id))
    }}>Delete</Button>
    </Card.Body>
    
  </Card.Body>
</Card>

  )
}

export default NoteCard

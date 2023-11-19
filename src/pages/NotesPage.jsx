import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getNotes } from '../Redux/notes/Note.action';
import { useState } from 'react';
import NoteCard from '../Notepage/NoteCard/NoteCard';
import { Button, Container } from 'react-bootstrap';
import { BaseApp } from '../core/BaseApp'
import { MdOutlineAdd } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const NotesPage = () => {

    const {loading,error,data} = useSelector((state)=>state.noteReducer)
   console.log(data)
const navigate = useNavigate()
   const [notes,setNotes] = useState([]);

const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getNotes());
},[])

useEffect(()=>{
setNotes(data)
},[data]);

if(loading)return <h1 style={{marginTop:"50px"}}>Loading......</h1>
// if(error)return <h1 style={{marginTop:"50px"}}>Error......</h1>

  return (
    <>
    <BaseApp>
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",textAlign:"center",alignItems:"center",margin:"10px",flexWrap:"wrap"}}>

     {notes?.map((ele)=><NoteCard {...ele}/>)}

     </div>
      
      <div>
      <Button onClick={()=>navigate("/create")} style={{fontWeight:"bold", alignItems:"center",height:"50px",width:"50px",bottom:"15px",border:"none",borderRadius:"50%", right:"15px",position:"fixed"}}><MdOutlineAdd/></Button>
     
      </div>
     </BaseApp> 
    
     </>
  )

  
}

export default NotesPage ;

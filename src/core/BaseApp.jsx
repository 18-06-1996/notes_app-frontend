import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ("./BaseApp.css")




export function BaseApp({title,children}){
const navigate = useNavigate();
const {auth,loading,token,error} = useSelector((state)=>state.userReducer)
console.log(auth)
    return(
    <div className='all_page'>
        <div>
            <div className='nav'> 
            <h1>Note App</h1>
            
            <div className='btn-group'>
                
            <Button  variant='primary'
                 display={auth==true?"block":"none"}
                onClick={()=>navigate("/note")}
                className='dash-btn'>All Notes</Button>

                <Button  variant='primary'
                  display={auth==true?"block":"none"}
                onClick={()=>navigate("/user/login")}
                className='adduser-btn'>Login</Button>
                <Button  variant='primary'
                  display={auth==true?"block":"none"}
                onClick={()=>navigate("/signup")}
                className='adduser-btn'>register</Button>
            </div>
            </div>
            
            

           
            {/* <div className='title'>{title}</div> */}
        </div>

        <div className='children'> {children}
     
        
        </div>
       
        </div>
    )
}
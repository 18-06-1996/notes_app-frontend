import { UseSelector, useSelector } from "react-redux"
import { CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_ERROR, DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, GET_NOTES_ERROR, GET_NOTES_LOADING, GET_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } from "./Note.types"
import axios from "axios"
import { base_URL } from "../../constant/config"
import { store } from "../Store"



export const  getNotes=()=>async(dispatch)=>{
    const {token} = store.getState().userReducer
    
    dispatch({type:GET_NOTES_LOADING})

    try {
        const res = await axios(`${base_URL}/note`,{
            method:"get",
            headers:{
                Authorization:token
            }
        })

        const {status,message,data} = res.data ;
        if(status == 1){
            dispatch({type:GET_NOTES_SUCCESS,payload:data})
        }else{
            dispatch({type:GET_NOTES_ERROR})
        }
       
        
    } catch (error) {
        dispatch({type:GET_NOTES_ERROR})
    }
}




export const  createNotes=(obj)=>async(dispatch)=>{
    const {token} = store.getState().userReducer

    dispatch({type:CREATE_NOTES_LOADING})

    try {
        const res = await axios(`${base_URL}/note/create`,{
            method:"post",
            data:obj,
            headers:{
                Authorization:token
            }
        })

        const {status,message} = res.data ;
        if(status === 1){
            dispatch({type:CREATE_NOTES_SUCCESS})
            dispatch(getNotes())
            alert(message)
        }else{
            dispatch({type:CREATE_NOTES_ERROR})
            alert(message)
        }
       
        
    } catch (error) {
        dispatch({type:CREATE_NOTES_ERROR})
    }
}



export const  deleteNotes=(id)=>async(dispatch)=>{
    const {token} = store.getState().userReducer
    dispatch({type:DELETE_NOTES_LOADING})

    try {
        const res = await axios(`${base_URL}/note/delete`,{
            method:"delete",
            headers:{
                Authorization:token,
                id:id
            }
        })

        const {status,message} = res.data ;
        console.log(message)
        if(status === 1){
            dispatch({type:DELETE_NOTES_SUCCESS})
            dispatch(getNotes())
        }else{
            dispatch({type:DELETE_NOTES_ERROR})
        }
       
        
    } catch (error) {
        dispatch({type:DELETE_NOTES_ERROR})
    }
}




export const  updateNotes=(obj,id)=>async(dispatch)=>{
   
    const {token} = store.getState().userReducer
    dispatch({type:UPDATE_NOTES_LOADING})

    try {
        const res = await axios(`${base_URL}/note/update`,{
            method:"patch",
            data:obj,
            headers:{
                Authorization:token,
                id:id
            }
        })

        const {status,message} = res.data ;
        console.log(message)
        if(status === 1){
            dispatch({type:UPDATE_NOTES_SUCCESS})
            dispatch(getNotes())
        }else{
            dispatch({type:UPDATE_NOTES_ERROR})
        }
       
        
    } catch (error) {
        dispatch({type:UPDATE_NOTES_ERROR})
    }
}


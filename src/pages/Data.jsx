import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { fetchpostdetails } from "../action/Action";
import '../Liststyle.css';

const Data=()=>{
    
    const dispatch=useDispatch();
    const {id}=useParams();
const post=useSelector((state)=>state.postdetails)
 
useEffect(()=>{
    dispatch(fetchpostdetails(id));
},[id]);


return(<> 

<div className="container-all">
        {post?(<div><h1>{post.title}</h1><p>{post.body}</p></div>
        ):(
            <p>Loging post...</p>
        )}
        
           
           </div>
            
        </>
        
            );
        
        }
export default Data;
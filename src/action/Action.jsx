import Axios from "axios";
export const fetchpost=()=>{
  return(dispatch)=>{
    Axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) =>{
        dispatch({
          type:'FETCH_POST_SUCCESS',
          payload:res.data})
       })
       .catch((error)=>{console.log(error)})
}}
export const fetchpostdetails=(id)=>{
  return(dispatch)=>{
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) =>{
        dispatch({
          type:'FETCH_POST_DETAILS_SUCCESS',
          payload:res.data})
       })
       .catch((error)=>{console.log(error)})
}}
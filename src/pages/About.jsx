import React,{useEffect} from "react";
import {Link,Outlet} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import '../Liststyle.css';
import { fetchpost } from "../action/Action";

const About=()=>{

const posts=useSelector(((state)=>state.post))
const dispatch=useDispatch();
useEffect(()=>{
   dispatch(fetchpost());
},[]);

    return(<> 

<div className="container-all">
     
    <nav >
    <div className="container-scroll">
       {posts.map((item)=>(
<div key={item.id} className="container-link">
   <Link to={`/about/data/${item.id}`}className="ListItem">{item.id} {item.title}</Link></div>
    
      ))}
    </div>
      </nav>
      <Outlet/>
    </div>
           
        </>
        
            )
        
        }
export default About;
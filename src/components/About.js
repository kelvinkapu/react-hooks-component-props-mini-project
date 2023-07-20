import React from "react";
import blogData from "../data/blog";
console.log(blogData);

function About(){
    //  console.log(props);
     <img src="https://via.placeholder.com/215"     alt="blog logo"/>
     return (
       
     <div>
         <aside>  
         <img src={blogData.image} alt="blog logo"/>
         <p>{blogData.about}</p>
         </aside>
      </div>
   
     )
   }

   export default About
import React from "react";
import blogData from "../data/blog";
// console.log(blogData);

function Header(){
    //  console.log(props)
     return (
     <div>
         <header>
           <h1>
             {blogData.name}
           </h1>
         </header>
     </div>
   
     )
   }
   export default Header